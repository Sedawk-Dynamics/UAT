# UAT (Universal Air Technologies) — Corporate Website

A production-grade, motion-rich **brochure website** for an industrial air-engineering
manufacturer. The only dynamic feature is a contact/inquiry form that emails submissions to
**info@uatindia.com** over **SMTP** via a small serverless route (`app/api/contact`, nodemailer).

> Tagline: **Cleaning Air, Saving Lives.**
> Signature idea — *make invisible air visible*: flowing aerodynamic line motifs
> (`AirflowField`) that drift, parallax on scroll, and bend toward the cursor on desktop.

## Tech stack (locked)

| Concern | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript** — SSG / Server Components |
| Styling | **Tailwind CSS v4** — CSS-first config (`@import "tailwindcss"` + `@theme` tokens), `@tailwindcss/postcss` |
| Components | **shadcn/ui** (Radix primitives) — `cn()` (clsx + tailwind-merge), CVA variants, `components.json` |
| Carousel | **embla-carousel-react** (hero slider) |
| Forms | **react-hook-form + @hookform/resolvers + zod** |
| Toasts | **sonner** |
| Motion | **motion** (framer-motion successor) + **lenis** smooth scroll |
| Icons / images | **lucide-react** · **next/image** |
| Fonts | **next/font/local** — Clash Display (display) + Satoshi (body) |
| Theme | **next-themes**, locked to light |
| Analytics | **@vercel/analytics** |
| Deploy | **Vercel** |

## Getting started

```bash
npm install

# configure the form SMTP credentials (see below)
cp .env.local.example .env.local      # then fill in the SMTP_* values

npm run dev          # http://localhost:3000  (Turbopack)
npm run build        # production build (SSG)
npm start            # serve the build
```

### Environment variables

Copy `.env.local.example` → `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://www.uatindia.com

# SMTP (server-only — never NEXT_PUBLIC). Form submissions are delivered to MAIL_TO.
SMTP_HOST=mail.uatindia.com
SMTP_PORT=465              # 465 (SSL) or 587 (STARTTLS)
SMTP_USER=info@uatindia.com
SMTP_PASS=your-mailbox-password
MAIL_TO=info@uatindia.com
MAIL_FROM=info@uatindia.com
```

The contact & inquiry forms POST to `app/api/contact`, which sends the message over SMTP
([`lib/mailer.ts`](lib/mailer.ts), nodemailer). If the SMTP vars are missing or the send fails, the
form falls back to a **mailto** link to `info@uatindia.com`, so no submission is ever lost.
`NEXT_PUBLIC_SITE_URL` feeds metadata, `sitemap.xml` and JSON-LD (a protocol-less value like
`www.uatindia.com` is normalised to `https://`).

## Imagery

All photography is **mirrored locally** into `public/img/` (so `next/image` optimizes and serves
it) from the live Universal Air Technologies site. Image paths are wired into the catalog in
[`lib/products.ts`](lib/products.ts) (`PRODUCT_IMAGES` / `CATEGORY_IMAGES`) and into hero slides /
industries in [`lib/site.ts`](lib/site.ts).

To re-mirror or refresh the assets:

```bash
# from the project root — pulls the /img tree into public/img
wget -r -np -nH -P public -A jpg,jpeg,png,webp \
  https://www.universalairtechnologies.com/img/

# (Windows PowerShell equivalent: loop Invoke-WebRequest over the manifest paths)
```

A handful of products had no dedicated source photo; these reuse a category-appropriate image and
are flagged `// TODO` in `PRODUCT_IMAGES`. Drop a real photo into `public/img/products/` and update
that one line to replace it. Every image is rendered with `next/image` (`fill` + `sizes`,
`object-cover`, fixed aspect ratios via shadcn `aspect-ratio`) and a cohesive blue duotone/scrim so
mixed-source photos read as one brand system.

## Deploy to Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Vercel → **New Project → Import** (framework auto-detected as Next.js).
3. **Settings → Environment Variables**: add `NEXT_PUBLIC_SITE_URL` and the `SMTP_*` / `MAIL_*` vars.
4. **Deploy.** Pushes to the default branch auto-deploy.

## Structure

```
app/
  layout.tsx            fonts, metadata, Org/LocalBusiness JSON-LD, providers, shell, Toaster, Analytics
  template.tsx          per-route entrance transition (motion)
  globals.css           Tailwind v4 @theme tokens (brand colors + fonts) + atmosphere utilities
  fonts.ts              next/font/local — Clash Display + Satoshi (files in app/fonts/)
  page.tsx              Home
  about/ industries/ inquiry/ contact/
  products/page.tsx                       hub
  products/category/[category]/           category pages (generateStaticParams)
  products/[slug]/                        product detail (generateStaticParams + Product JSON-LD)
  sitemap.ts  robots.ts
components/
  site-header (navigation-menu mega + Sheet mobile), site-footer, hero (embla),
  airflow-field, reveal, section, stat, brand-button (magnetic), product-card, logo,
  page-hero, smooth-scroll, scroll-progress, floating-buttons, lucide-icon, providers
  sections/  intro-strip, category-cards, featured-products (tabs), why-us, stats-band,
             industries-section (marquee), process-sequence (pinned), cta-band
  forms/     inquiry-form, contact-form  (shadcn form + RHF + zod + sonner → /api/contact)
  ui/        shadcn primitives
app/api/contact/route.ts  SMTP form handler (nodemailer)
lib/
  products.ts    single source of truth for the catalog
  site.ts        NAP, stats, pillars, process, industries, hero slides
  schema.ts      Organization + LocalBusiness + WebSite + Breadcrumb + Product JSON-LD
  mailer.ts      SMTP transport (nodemailer)
  submit-form.ts client helper that POSTs to /api/contact
  utils.ts       cn()
_v2-next15/            previous Next.js 15 build (archived for reference)
_legacy-single-file/   original single-file React preview (archived)
```

### Extending the catalog

Add a product object to the relevant category in [`lib/products.ts`](lib/products.ts). It appears
automatically in the mega-menu, products hub, category page, the inquiry dropdown, sitemap, and gets
its own statically-generated detail page at `/products/<slug>` — no other edits required.

## Design system

- **Theme:** light, blue-dominant (`--color-blue #1B43C4`), yellow accent (`--color-yellow #FFC107`);
  dark bands only for CTA / footer / stats. Yellow surfaces carry dark text (WCAG AA).
- **Type:** Clash Display (headings) + Satoshi (body) via `next/font/local`; tokens `--font-display`
  / `--font-sans` declared in the Tailwind v4 `@theme` block.
- shadcn `--primary` / `--ring` / `--border` are tuned to the brand so all primitives match.

## Accessibility, motion & performance

- Semantic landmarks, keyboard-navigable mega-menu (Radix) and Sheet mobile nav, visible focus
  rings, skip-to-content link, descriptive alt text on image placeholders.
- `prefers-reduced-motion` disables Lenis, parallax, autoplay and large motion (subtle fades kept).
- SSG + friendly slugs; per-route metadata + Open Graph; JSON-LD (Organization/LocalBusiness +
  per-product Product); `sitemap.xml` + `robots.txt`. Animations use transform/opacity only.

## Swapping in real imagery

`ImagePlaceholder` marks every spot expecting a photo. Drop real images into `/public` and replace
`<ImagePlaceholder />` with `next/image` `<Image>` for optimized, lazy-loaded delivery. Replace the
footer `Download Catalogue` link target (`/catalogue.pdf`) with a real PDF.

## Note on contact details

Phone/WhatsApp `+91 98211 52726` and `info@uatindia.com` live in one place —
[`lib/site.ts`](lib/site.ts) — update them there if the real domain or number differ.
