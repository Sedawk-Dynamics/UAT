import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/section";
import Reveal from "@/components/reveal";
import Btn from "@/components/brand-button";
import LucideIcon from "@/components/lucide-icon";
import ProductCard from "@/components/product-card";
import CTABand from "@/components/sections/cta-band";
import { CATALOG } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Dust Collectors, Bag Filters, Scrubbers, Blowers & Fans",
  description:
    "Browse UAT's range: pulse-jet bag filters, BIBO units, scrubbers, centrifugal blowers, ID/FD fans, AHUs and turnkey fabrication.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "UAT Products — APC, HVAC & Turnkey Fabrication",
    description:
      "Pulse-jet bag filters, BIBO units, scrubbers, centrifugal blowers, ID/FD fans, AHUs and turnkey fabrication.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Industrial air-pollution-control & HVAC equipment"
        sub="Browse our full range across three engineering pillars — every product custom-built to your application."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      {CATALOG.map((c, ci) => (
        <Section key={c.slug} tone={ci % 2 ? "soft" : "white"} py="py-16">
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-blue text-white">
                    <LucideIcon name={c.icon} className="size-6" />
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">{c.name}</h2>
                </div>
                <p className="mt-3 text-slate">{c.blurb}</p>
              </div>
              <Btn href={`/products/category/${c.slug}`} variant="soft">View category <ArrowRight className="size-4" /></Btn>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((p, i) => (
              <ProductCard key={p.slug} index={i} p={{ ...p, category: c.slug, categoryName: c.name, categoryShort: c.short, categoryTag: c.tag }} />
            ))}
          </div>
        </Section>
      ))}

      <CTABand />
    </>
  );
}
