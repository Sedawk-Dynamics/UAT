import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, Check } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/section";
import Reveal from "@/components/reveal";
import AirflowField from "@/components/airflow-field";
import InquiryForm from "@/components/forms/inquiry-form";
import { SITE, WHY_POINTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote | Industrial Air Solutions",
  description:
    "Send your RFQ to UAT. Custom-engineered dust collectors, scrubbers, blowers, fans & AHUs. Routed to info@uat.com.",
  alternates: { canonical: "/inquiry" },
};

export default async function InquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; industry?: string }>;
}) {
  const { product, industry } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your requirement"
        sub="Share your application and our engineers will size the right system and revert with a quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Inquiry" }]}
      />

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <InquiryForm prefillProduct={product} prefillIndustry={industry} />
            </Reveal>
          </div>

          <aside className="space-y-4">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-blue p-6 text-white">
                <AirflowField className="opacity-30" />
                <div className="relative">
                  <h2 className="font-display text-xl font-bold">Prefer to talk?</h2>
                  <p className="mt-2 text-sm text-white/80">Our engineers are happy to discuss your application directly.</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li><a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-yellow"><Phone className="size-4 text-yellow" />{SITE.phone}</a></li>
                    <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-yellow"><Mail className="size-4 text-yellow" />{SITE.email}</a></li>
                    <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow"><MessageCircle className="size-4 text-yellow" />WhatsApp Chat</a></li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-bgsoft p-6">
                <h2 className="font-display font-bold text-ink">Why UAT?</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate">
                  {WHY_POINTS.map((x) => (
                    <li key={x} className="flex items-center gap-2"><Check className="size-4 text-blue" />{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}
