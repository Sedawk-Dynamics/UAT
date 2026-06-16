# Images Needed — UAT Product Catalogue

The client has supplied real photography for most products (stored under
[`public/img/products/`](public/img/products/), renamed to clean slug-based
names: primary `<slug>.jpg`, gallery `<slug>-N.ext`). The few products below
still render a **borrowed or fallback** photo — no card or `next/image` ever
renders empty. Replace the file (or update `PRODUCT_IMAGES` in
[`lib/products.ts`](lib/products.ts)) when a real photo arrives.

**Image convention:** primary `/public/img/products/<slug>.jpg`, gallery
`<slug>-1.jpg`, `<slug>-2.jpg`, … (primary first).

| Product | Slug | # images | Suggested filename(s) | Currently showing | Notes |
|---|---|---|---|---|---|
| FLP Wall Mounting Exhaust Fan | `flp-wall-mounting-exhaust-fan` | 1–2 | `flp-wall-mounting-exhaust-fan.jpg`, `…-1.jpg` | `tube-axial-fan.jpg` (borrowed) | New product — flameproof + non-flameproof variants |
| Inline Fans | `inline-fans` | 1 | `inline-fans.jpg` | `tube-axial-fan.jpg` (borrowed) | No client photo supplied yet |
| Filter Washing Systems | `filter-washing-systems` | 1 | `filter-washing-systems.jpg` | `/img/feature.jpg` (fallback) | No client photo supplied yet |

### Resolved this pass (real client photos wired in)
Pulse Jet Bag Filter (added install photos), Cyclone Separator, BIBO Dust
Collector, BIBO Units (client "BIBO Filter Housing"), Horizontal Dust Collector,
GMP Portable Dust Collector, Venturi Scrubber, Packed Bed Scrubber, Hybrid
Scrubber, De-Dusting Tunnels, Centrifugal Blowers, Tube Axial Fan, Plug Fan,
Cabinet Fans, Air Handling Unit, Custom Fabrication.
