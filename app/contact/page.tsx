import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/section";
import Reveal from "@/components/reveal";
import ContactForm from "@/components/forms/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact UAT | Vadodara, Gujarat | +91 98211 52726",
  description: "Contact UAT Private Limited, Vadodara. Phone, WhatsApp, email and plant map. Mon–Sat 9–6.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact UAT — Vadodara, Gujarat",
    description: "Phone, WhatsApp, email and plant map. Mon–Sat 9–6.",
  },
};

const CARDS = [
  { icon: Phone, title: "Call / WhatsApp", lines: [SITE.phone], href: SITE.phoneHref, wa: true },
  { icon: Mail, title: "Email", lines: [SITE.email], href: `mailto:${SITE.email}` },
  { icon: Clock, title: "Working Hours", lines: ["Mon–Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's engineer cleaner air together"
        sub="Reach us by phone, email or WhatsApp — or visit our manufacturing plant in Vadodara."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-bgsoft p-6">
                  <span className="grid size-12 place-items-center rounded-xl bg-blue text-white"><Icon className="size-6" /></span>
                  <h2 className="mt-4 font-display text-lg font-bold text-ink">{c.title}</h2>
                  {c.lines.map((l) =>
                    c.href ? (
                      <a key={l} href={c.href} className="mt-1 block font-medium text-slate hover:text-blue">{l}</a>
                    ) : (
                      <p key={l} className="mt-1 text-slate">{l}</p>
                    )
                  )}
                  {c.wa && (
                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366]">
                      <MessageCircle className="size-4" />Chat on WhatsApp
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="mb-6 flex gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-yellow text-ink"><MapPin className="size-6" /></span>
              <div>
                <h2 className="font-display text-lg font-bold text-ink">Our Address</h2>
                <p className="mt-1 text-slate">{SITE.address}</p>
                <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                  Open in Google Maps <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-[26rem] overflow-hidden rounded-2xl border border-line">
              <iframe title="UAT plant location — Vadodara" src={SITE.mapEmbed} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
