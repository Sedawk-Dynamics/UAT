"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Phone, Mail, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { Facebook, Linkedin, Instagram, X } from "./social-icons";
import Logo from "./logo";
import Btn from "./brand-button";
import LucideIcon from "./lucide-icon";
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CATALOG } from "@/lib/products";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", mega: true },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile sheet
  const [mega, setMega] = useState(false); // desktop products dropdown
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMega(false), 130);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={cn("fixed inset-x-0 top-0 z-60 transition-all duration-300", scrolled ? "bg-white/95 shadow-[0_1px_2px_rgba(11,18,32,0.04),0_10px_30px_rgba(11,18,32,0.06)] backdrop-blur" : "bg-white")}>
      {/* Utility bar */}
      <div className={cn("overflow-hidden bg-blue-deep text-xs text-white/90 transition-all duration-300", scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100")}>
        <div className="mx-auto flex h-9 max-w-[1760px] items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <a href={SITE.phoneHref} className="hidden items-center gap-1.5 hover:text-yellow sm:flex"><Phone className="size-3.5" />{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex min-w-0 items-center gap-1.5 hover:text-yellow"><Mail className="size-3.5 shrink-0" /><span className="truncate">{SITE.email}</span></a>
            <span className="hidden items-center gap-1.5 md:flex"><Clock className="size-3.5" />{SITE.hours}</span>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <a href={SITE.social.instagram} aria-label="Instagram" className="grid size-7 place-items-center rounded-md bg-white/10 transition-colors hover:bg-yellow hover:text-blue-deep"><Instagram className="size-4" /></a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="grid size-7 place-items-center rounded-md bg-white/10 transition-colors hover:bg-yellow hover:text-blue-deep"><Facebook className="size-4" /></a>
            <a href={SITE.social.x} aria-label="X (Twitter)" className="grid size-7 place-items-center rounded-md bg-white/10 transition-colors hover:bg-yellow hover:text-blue-deep"><X className="size-3.5" /></a>
            <a href={SITE.social.linkedin} aria-label="LinkedIn" className="grid size-7 place-items-center rounded-md bg-white/10 transition-colors hover:bg-yellow hover:text-blue-deep"><Linkedin className="size-4" /></a>
          </div>
        </div>
      </div>

      {/* Main bar — relative so the mega panel can anchor to the full container width */}
      <div className="mx-auto max-w-[1760px] px-4 sm:px-6">
        <div className={cn("relative flex items-center justify-between gap-4 transition-all duration-300", scrolled ? "h-16" : "h-20")}>
          <Link href="/" aria-label="UAT home" className="shrink-0"><Logo priority className="h-12 sm:h-14" /></Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.mega ? (
                <div key={item.label} onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={mega}
                    onClick={() => setMega(false)}
                    className={cn("flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors", isActive(item.href) ? "text-blue" : "text-ink hover:text-blue")}
                  >
                    {item.label}
                    <ChevronDown className={cn("size-4 transition-transform", mega && "rotate-180")} />
                  </Link>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className={cn("rounded-lg px-3 py-2 text-sm font-semibold transition-colors", isActive(item.href) ? "text-blue" : "text-ink hover:text-blue")}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Btn href="/inquiry" magnetic>Get a Quote</Btn>
          </div>

          {/* Mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm gap-0 overflow-y-auto border-0 bg-blue-deep p-0 text-white">
              <div className="pointer-events-none absolute inset-0 blueprint opacity-40" />
              <SheetHeader className="relative">
                <SheetTitle className="text-left text-white"><Logo variant="light" /></SheetTitle>
              </SheetHeader>
              <nav className="relative px-6 py-2" aria-label="Mobile">
                <ul className="space-y-1">
                  {NAV.map((item, i) => (
                    <motion.li key={item.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i + 0.05 }}>
                      <SheetClose asChild>
                        <Link href={item.href} className="block border-b border-white/10 py-3.5 font-display text-2xl font-bold">
                          {item.label}
                        </Link>
                      </SheetClose>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-1 gap-2">
                  {CATALOG.map((c) => (
                    <SheetClose asChild key={c.slug}>
                      <Link href={`/products/category/${c.slug}`} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-sm font-semibold">
                        <LucideIcon name={c.icon} className="size-4 text-yellow" />
                        {c.short}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>
              <div className="relative space-y-3 border-t border-white/10 p-6">
                <Btn href="/inquiry" className="w-full">Get a Quote</Btn>
                <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-yellow">
                  <Phone className="size-4" />{SITE.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop mega-menu — anchored to the full container width (no overflow) */}
          <AnimatePresence>
            {mega && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                onMouseEnter={openMega}
                onMouseLeave={scheduleClose}
                className="absolute inset-x-0 top-full z-50 hidden pt-2 lg:block"
              >
                <div className="grid grid-cols-3 gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_18px_50px_rgba(27,67,196,0.18)]">
                  {CATALOG.map((cat) => (
                    <div key={cat.slug}>
                      <Link href={`/products/category/${cat.slug}`} className="group mb-2 flex items-center gap-2.5 font-display text-sm font-bold text-blue hover:text-blue-deep">
                        <span className="relative size-9 shrink-0 overflow-hidden rounded-lg">
                          <Image src={cat.image ?? "/img/feature.jpg"} alt="" fill sizes="36px" className="object-cover" />
                          <span className="absolute inset-0 bg-blue/30 transition-colors group-hover:bg-blue/10" />
                        </span>
                        {cat.short}
                      </Link>
                      <ul className="space-y-0.5">
                        {cat.products.map((p) => (
                          <li key={p.slug}>
                            <Link href={`/products/${p.slug}`} className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[13px] text-slate transition-colors hover:bg-bgsoft hover:text-blue">
                              <span className="size-1 shrink-0 rounded-full bg-yellow" />
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 mt-1 flex items-center justify-between border-t border-line pt-3">
                    <Link href="/products" className="flex items-center gap-1 text-sm font-semibold text-blue hover:text-blue-deep">
                      View all products <ArrowRight className="size-4" />
                    </Link>
                    <Btn href="/inquiry" className="px-4 py-2 text-xs">Get a Quote</Btn>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
