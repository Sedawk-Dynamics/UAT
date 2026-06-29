import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/section";
import Btn from "@/components/brand-button";
import ProductCard from "@/components/product-card";
import CTABand from "@/components/sections/cta-band";
import { CATALOG, getCategory } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return CATALOG.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Products" };
  return {
    title: `${cat.name} | UAT`,
    description: cat.blurb,
    alternates: { canonical: `/products/category/${cat.slug}` },
    openGraph: {
      title: `${cat.name} — UAT`,
      description: cat.blurb,
      images: cat.image ? [{ url: cat.image, alt: cat.name }] : undefined,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const crumbs = [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: cat.short }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />

      <PageHero
        eyebrow={`${cat.tag} Range`}
        title={cat.name}
        sub={cat.blurb}
        crumbs={crumbs}
      />

      <Section tone="white" py="py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cat.products.map((p, i) => (
            <ProductCard key={p.slug} index={i} p={{ ...p, category: cat.slug, categoryName: cat.name, categoryShort: cat.short, categoryTag: cat.tag }} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATALOG.filter((c) => c.slug !== cat.slug).map((c) => (
            <Btn key={c.slug} href={`/products/category/${c.slug}`} variant="soft">{c.short} <ArrowRight className="size-4" /></Btn>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
