import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Layers, MessageCircle } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section, Heading } from "@/components/section";
import Reveal from "@/components/reveal";
import ImageReveal from "@/components/image-reveal";
import Btn from "@/components/brand-button";
import ProductGallery from "@/components/product-gallery";
import ProductCard from "@/components/product-card";
import CTABand from "@/components/sections/cta-band";
import { Badge } from "@/components/ui/badge";
import { ALL_PRODUCTS, getProduct, getCategory, FALLBACK_IMAGE } from "@/lib/products";
import { productSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product" };
  return {
    title: `${p.name} | UAT Industrial Air Equipment`,
    description: p.blurb,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title: `${p.name} — UAT`,
      description: p.blurb,
      type: "website",
      images: [{ url: p.image ?? FALLBACK_IMAGE, alt: p.name }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const cat = getCategory(p.category)!;
  const related = cat.products.filter((x) => x.slug !== p.slug).slice(0, 3);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: cat.short, href: `/products/category/${cat.slug}` },
    { label: p.name },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(p)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />

      <PageHero eyebrow={cat.name} title={p.name} crumbs={crumbs} />

      <Section tone="white" py="py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ImageReveal>
              <ProductGallery
                name={p.name}
                hero={p.image ?? FALLBACK_IMAGE}
                gallery={p.gallery}
              />
            </ImageReveal>
          </Reveal>

          <Reveal delay={0.1}>
            <Badge className="bg-blue/10 text-[11px] font-bold uppercase tracking-wider text-blue hover:bg-blue/10">{cat.tag}</Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">{p.name}</h2>
            <p className="mt-4 text-lg text-slate">{p.longDescription}</p>

            {p.variants && (
              <div className="mt-5">
                <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-wider text-ink">Variants</h3>
                <div className="flex flex-wrap gap-2">
                  {p.variants.map((v) => (
                    <span key={v} className="rounded-lg border border-line bg-bgsoft px-3 py-1.5 text-sm text-slate">{v}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={`/inquiry?product=${p.slug}`} magnetic>Request a Quote</Btn>
              <Btn href={SITE.whatsapp} variant="outline"><MessageCircle className="size-4" />WhatsApp Us</Btn>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft" py="py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-ink"><Check className="size-6 text-yellow" />Key Features & Benefits</h2>
            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-xl border border-line bg-white p-3.5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-blue text-white"><Check className="size-3.5" /></span>
                  <span className="text-slate">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-ink"><Layers className="size-6 text-blue" />Specifications</h2>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              {p.specs.map(([k, v], idx) => (
                <div key={k} className={`flex gap-4 px-5 py-3.5 ${idx % 2 ? "bg-bgsoft/50" : ""}`}>
                  <span className="w-40 shrink-0 text-sm font-semibold text-ink">{k}</span>
                  <span className="text-sm text-slate">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs italic text-slate/70">* Specifications are indicative and engineered as per application. Contact us for a duty-specific datasheet.</p>
            <div className="mt-6">
              <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-wider text-ink">Applications / Industries</h3>
              <div className="flex flex-wrap gap-2">
                {p.applications.map((a) => (
                  <span key={a} className="rounded-lg border border-line bg-white px-3 py-1.5 text-sm font-medium text-blue">{a}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white" py="py-16">
        <Heading eyebrow="Related" title={`More from ${cat.short}`} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r, i) => (
            <ProductCard key={r.slug} index={i} p={{ ...r, category: cat.slug, categoryName: cat.name, categoryShort: cat.short, categoryTag: cat.tag }} />
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
