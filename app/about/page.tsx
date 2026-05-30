import type { Metadata } from "next";
import { ArrowRight, Phone, Mail, Clock, BadgeCheck } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section, Heading } from "@/components/section";
import Reveal from "@/components/reveal";
import Btn from "@/components/brand-button";
import Media from "@/components/media";
import StatsBand from "@/components/sections/stats-band";
import WhyUs from "@/components/sections/why-us";
import IndustriesSection from "@/components/sections/industries-section";
import CTABand from "@/components/sections/cta-band";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About UAT | 30+ Years in Industrial Air Engineering",
  description:
    "UAT — a trusted manufacturer of air-pollution-control & HVAC equipment, established 1994. Cleaning Air, Saving Lives.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About UAT"
        title="Three decades of cleaner industrial air"
        sub="A trusted manufacturer of air-pollution-control and HVAC equipment — Cleaning Air, Saving Lives."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue">
              <span className="h-px w-8 bg-blue" />Our Story
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-ink">Established 1994. Re-engineered for today.</h2>
            <p className="mt-5 text-lg text-slate">
              UAT (Universal Air Technologies) is a new branch carrying forward the expertise of
              Universal Air Technologies, established 1994. With 30+ years of accumulated
              experience, we are an established, trusted manufacturer — not a startup.
            </p>
            <p className="mt-3 text-slate">
              We manufacture industrial air-pollution-control and HVAC equipment and deliver turnkey
              ventilation and fabrication projects across heavy industry. Every unit is
              custom-engineered to its application and built in-house in MS, SS and PP-FRP for tight
              quality control and dependable delivery.
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-bgsoft p-5">
              <p className="font-display text-xl font-bold text-blue">Our mission</p>
              <p className="mt-1 text-slate">
                To protect people and the environment by cleaning industrial air —{" "}
                <span className="font-semibold text-ink">Cleaning Air, Saving Lives.</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <Media src="/img/about-1.jpg" alt="UAT facility" ratio={4 / 3} duotone sizes="(max-width:1024px) 50vw, 25vw" className="rounded-2xl" />
              <Media src="/img/slider/company-photo.jpg" alt="UAT plant" ratio={4 / 3} duotone sizes="(max-width:1024px) 50vw, 25vw" className="mt-8 rounded-2xl" />
              <Media src="/img/products/blower.jpg" alt="Centrifugal blower" ratio={4 / 3} duotone sizes="(max-width:1024px) 50vw, 25vw" className="-mt-8 rounded-2xl" />
              <Media src="/img/feature.jpg" alt="Installed system" ratio={4 / 3} duotone sizes="(max-width:1024px) 50vw, 25vw" className="rounded-2xl" />
            </div>
          </Reveal>
        </div>
      </Section>

      <StatsBand />
      <WhyUs />
      <IndustriesSection />

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Heading eyebrow="Visit Us" title="Our manufacturing plant" sub={SITE.address} />
            <ul className="mt-6 space-y-3 text-slate">
              <li className="flex gap-2.5"><Phone className="size-5 shrink-0 text-blue" /><a href={SITE.phoneHref} className="font-medium text-ink hover:text-blue">{SITE.phone}</a></li>
              <li className="flex gap-2.5"><Mail className="size-5 shrink-0 text-blue" /><a href={`mailto:${SITE.email}`} className="font-medium text-ink hover:text-blue">{SITE.email}</a></li>
              <li className="flex gap-2.5"><Clock className="size-5 shrink-0 text-blue" />{SITE.hours}</li>
              <li className="flex gap-2.5"><BadgeCheck className="size-5 shrink-0 text-blue" />GST: {SITE.gst}</li>
            </ul>
            <Btn href="/contact" variant="blue" className="mt-6">Contact Us <ArrowRight className="size-4" /></Btn>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-80 overflow-hidden rounded-2xl border border-line">
              <iframe title="UAT plant location" src={SITE.mapEmbed} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
