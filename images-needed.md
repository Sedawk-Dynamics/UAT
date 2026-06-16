# Images Needed — UAT Product Catalogue

Tracks products whose detail page currently renders a **borrowed or fallback** photo.
No card or `next/image` ever renders empty — each slot points at a real on-disk asset
until a dedicated photo is supplied. Replace the file (or update the mapping in
[`lib/products.ts`](lib/products.ts) → `PRODUCT_IMAGES`) when the real image arrives.

**Image convention for new photos:** primary `/public/img/products/<slug>.jpg`,
gallery `<slug>-1.jpg`, `<slug>-2.jpg`, … (primary first). Do **not** rename existing
files even where their names are inconsistent (e.g. `puls-jet-bag-filtter.jpg`).

| Product | Slug | # images | Suggested filename(s) | Currently showing | Notes |
|---|---|---|---|---|---|
| Hybrid Scrubber | `hybrid-scrubber` | 1+ | `hybrid-scrubber.jpg` | `venturi-scrubber.jpg` (borrowed) | **New product** — needs its own photo |
| FLP Wall Mounting Exhaust Fan | `flp-wall-mounting-exhaust-fan` | 1–2 | `flp-wall-mounting-exhaust-fan.jpg`, `flp-wall-mounting-exhaust-fan-1.jpg` | `tube-axial-fan.jpg` (borrowed) | **New product** — flameproof + non-flameproof variants; one photo per variant ideal |
| Air Handling Unit (AHU) | `air-handling-unit` | 1+ | `air-handling-unit.jpg` | `blower.jpg` (borrowed) | Client sourcing photos online |
| Cyclone Separator | `cyclone-separator` | 1 | `cyclone-separator.jpg` | `horizontal-dust-collector.jpg` (borrowed) | Dedicated cyclone photo |
| BIBO Units | `bibo-units` | 1 | `bibo-units.jpg` | `bibo-dust-collector.jpg` (borrowed) | Dedicated BIBO units photo |
| De-Dusting Tunnels | `de-dusting-tunnels` | 1 | `de-dusting-tunnels.jpg` | `gmp-portable-dust-collector.jpg` (borrowed) | Dedicated de-dusting tunnel photo |
| Inline Fans | `inline-fans` | 1 | `inline-fans.jpg` | `tube-axial-fan.jpg` (borrowed) | Dedicated inline fan photo |
| Cabinet Fans | `cabinet-fans` | 1 | `cabinet-fans.jpg` | `blower.jpg` (borrowed) | Dedicated cabinet fan photo |
| Filter Washing Systems | `filter-washing-systems` | 1 | `filter-washing-systems.jpg` | `/img/feature.jpg` (fallback) | Dedicated filter-washing photo |
| Custom Fabrication | `custom-fabrication` | 1 | `custom-fabrication.jpg` | `/img/feature.jpg` (fallback) | Dedicated fabrication photo |
