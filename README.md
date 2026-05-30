# UAT (Universal Air Technologies) — Corporate Website

A production-grade, motion-rich **brochure website** for an industrial air-engineering
manufacturer. The only dynamic feature is a contact/inquiry form that emails submissions to
**info@uat.com** via **Web3Forms** (no backend).

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

# configure the form email key (see below)
cp .env.local.example .env.local      # then paste your Web3Forms key

npm run dev          # http://localhost:3000  (Turbopack)
npm run build        # production build (SSG)
npm start            # serve the build
```

### Environment variables

Copy `.env.local.example` → `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key-here
NEXT_PUBLIC_SITE_URL=https://www.uat.com
```

**Generating the Web3Forms key (free, no backend):**

1. Go to <https://web3forms.com>.
2. Enter the destination inbox **`info@uat.com`** and create an Access Key (emailed to you).
3. Paste it into `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`.

Until a valid key is present, both forms show a notice and still offer a **mailto fallback** to
`info@uat.com`, so no submission is ever lost. `NEXT_PUBLIC_SITE_URL` feeds metadata, `sitemap.xml`
and JSON-LD.

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
3. **Settings → Environment Variables**: add `NEXT_PUBLIC_WEB3FORMS_KEY` and `NEXT_PUBLIC_SITE_URL`.
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
  forms/     inquiry-form, contact-form  (shadcn form + RHF + zod + sonner + Web3Forms)
  ui/        shadcn primitives
lib/
  products.ts  single source of truth for the catalog
  site.ts      NAP, stats, pillars, process, industries, hero slides
  schema.ts    Organization + LocalBusiness + Product JSON-LD
  web3forms.ts form submission helper
  utils.ts     cn()
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

Phone/WhatsApp `+91 98211 52726` and `info@uat.com` are taken verbatim from the brief. Update them
in one place — [`lib/site.ts`](lib/site.ts) — if the real domain or number differ.
