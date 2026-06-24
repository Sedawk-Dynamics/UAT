import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Download } from "lucide-react";
import { Facebook, Linkedin, Instagram, X } from "./social-icons";
import Logo from "./logo";
import AirflowField from "./airflow-field";
import { CATALOG } from "@/lib/products";
import { SITE } from "@/lib/site";

const QUICK = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Inquiry", href: "/inquiry" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-blue-deep text-white/80">
      <AirflowField className="h-40 opacity-25" interactive={false} />
      <div className="relative mx-auto max-w-[1760px] px-4 pb-8 pt-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" className="h-12" />
            <p className="mt-4 max-w-sm text-sm text-white/70">{SITE.positioning}</p>
            <p className="mt-4 font-display text-lg font-bold text-yellow">{SITE.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
              <a href={SITE.social.instagram} aria-label="Instagram" className="grid size-9 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-yellow hover:text-ink"><Instagram className="size-4" /></a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="grid size-9 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-yellow hover:text-ink"><Facebook className="size-4" /></a>
              <a href={SITE.social.x} aria-label="X (Twitter)" className="grid size-9 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-yellow hover:text-ink"><X className="size-4" /></a>
              <a href={SITE.social.linkedin} aria-label="LinkedIn" className="grid size-9 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-yellow hover:text-ink"><Linkedin className="size-4" /></a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {QUICK.map((q) => <li key={q.label}><Link href={q.href} className="transition-colors hover:text-yellow">{q.label}</Link></li>)}
              <li><a href={SITE.catalogueUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-yellow"><Download className="size-3.5" />Download Catalogue</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Products</h2>
            <ul className="space-y-2 text-sm">
              {CATALOG.map((c) => <li key={c.slug}><Link href={`/products/category/${c.slug}`} className="transition-colors hover:text-yellow">{c.name}</Link></li>)}
              <li className="pt-1"><Link href="/products/pulse-jet-bag-filter" className="text-[13px] text-white/60 hover:text-yellow">Pulse Jet Bag Filter</Link></li>
              <li><Link href="/products/centrifugal-blowers" className="text-[13px] text-white/60 hover:text-yellow">Centrifugal Blowers</Link></li>
              <li><Link href="/products/air-handling-unit" className="text-[13px] text-white/60 hover:text-yellow">Air Handling Units</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-yellow" /><span>{SITE.address}</span></li>
              <li className="flex gap-2.5"><Phone className="size-4 shrink-0 text-yellow" /><a href={SITE.phoneHref} className="hover:text-yellow">{SITE.phone}</a></li>
              <li className="flex gap-2.5"><Mail className="size-4 shrink-0 text-yellow" /><a href={`mailto:${SITE.email}`} className="hover:text-yellow">{SITE.email}</a></li>
              <li className="flex gap-2.5"><Clock className="size-4 shrink-0 text-yellow" /><span>{SITE.hours}</span></li>
              <li className="text-xs text-white/60">GST: {SITE.gst}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-56 overflow-hidden rounded-2xl border border-white/10">
          <iframe title="UAT plant location — Vadodara" src={SITE.mapEmbed} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.legal}. All rights reserved.</p>
          <p>Designed for {SITE.legal} · {SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
