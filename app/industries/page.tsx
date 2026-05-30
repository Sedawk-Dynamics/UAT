import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/section";
import Reveal from "@/components/reveal";
import LucideIcon from "@/components/lucide-icon";
import StatsBand from "@/components/sections/stats-band";
import CTABand from "@/components/sections/cta-band";
import { INDUSTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries Served | Power, Cement, Pharma, Steel & More",
  description:
    "Air-pollution-control & HVAC solutions for thermal power, cement, pharma, steel, foundry, chemical and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Solutions for every heavy industry"
        sub="Equipment matched to the dust, fume, gas and ventilation challenges of your sector."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <Section tone="white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-line bg-bgsoft p-6 transition-all hover:border-blue/30 hover:shadow-[0_1px_2px_rgba(11,18,32,0.04),0_10px_30px_rgba(11,18,32,0.06)]">
                <span className="grid size-12 place-items-center rounded-xl bg-blue text-white transition-colors group-hover:bg-yellow group-hover:text-ink">
                  <LucideIcon name={ind.icon} className="size-6" />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold text-ink">{ind.name}</h2>
                <p className="mt-2 text-sm text-slate">{ind.note}</p>
                <Link href={`/inquiry?industry=${encodeURIComponent(ind.name)}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue hover:text-blue-deep">
                  Discuss your needs <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBand />
      <CTABand />
    </>
  );
}
