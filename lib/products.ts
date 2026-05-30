/**
 * Single source of truth for the UAT product catalog.
 * Category pages, the products hub, the mega-menu, the inquiry dropdown and
 * every product detail page are rendered by mapping over this data — so the
 * catalog is trivially extensible: add a product object and it appears everywhere.
 */

export type CategorySlug =
  | "air-pollution-control"
  | "hvac-equipment"
  | "turnkey-projects-fabrication";

export interface Product {
  slug: string;
  name: string;
  blurb: string;
  longDescription: string;
  features: string[];
  /** [label, value] — values are indicative / "as per application". */
  specs: [string, string][];
  applications: string[];
  variants?: string[];
  /** hero image path under /public (injected from IMAGES below). */
  image?: string;
  /** optional gallery of diagrams / variant photos. */
  gallery?: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  tag: string;
  /** lucide-react icon name */
  icon: string;
  blurb: string;
  products: Product[];
  /** representative photo (injected from IMAGES below). */
  image?: string;
}

export const CATALOG: Category[] = [
  {
    slug: "air-pollution-control",
    name: "Air Pollution Control Equipment",
    short: "Air Pollution Control",
    tag: "APC",
    icon: "Filter",
    blurb:
      "Dust collectors, bag houses, BIBO units and wet & dry scrubbers that keep emissions compliant and workplaces safe.",
    products: [
      {
        slug: "pulse-jet-bag-filter",
        name: "Pulse Jet Bag Filter",
        blurb:
          "Conventional dedusting filter re-engineered for longer bag life, lower emissions and lower power.",
        longDescription:
          "Our Pulse Jet Bag Filter is a conventional dedusting filter re-engineered for longer bag life, lower emission levels, lower pressure drop, lower power consumption, higher air-to-cloth ratios and a smaller footprint. Woven and non-woven tubular filter bags are placed vertically inside a housing; a timed compressed-air pulse cleans the bags online without interrupting the process. Each unit is customized to the application and is ideal for high air volumes, above-ambient temperatures or difficult material.",
        features: [
          "Longer bag life & lower emission levels",
          "Lower pressure drop and power consumption",
          "Higher air-to-cloth ratio, smaller footprint",
          "Online pulse cleaning — no process downtime",
          "Woven & non-woven tubular bags, vertically mounted",
          "Customized to application, high-temperature capable",
        ],
        specs: [
          ["Configuration", "Vertical tubular bags in housing"],
          ["Cleaning", "Online pulse-jet (compressed air)"],
          ["Air-to-cloth ratio", "High — as per application"],
          ["Emission level", "Low — meets pollution norms"],
          ["Operating temp", "Ambient to elevated, as per application"],
          ["Materials", "MS / SS / PP-FRP as required"],
        ],
        applications: ["Cement", "Power", "Steel", "Foundry", "Chemical", "Pharmaceutical"],
      },
      {
        slug: "cyclone-separator",
        name: "Cyclone Separator",
        blurb: "Inertial pre-separator for coarse particulate — durable, no moving parts.",
        longDescription:
          "The Cyclone Separator is an inertial pre-separator for coarse particulate. With no moving parts and rugged construction, it is highly durable and is often paired upstream of a bag filter to reduce dust load and protect downstream media, extending overall system life.",
        features: [
          "Removes coarse particulate by centrifugal force",
          "No moving parts — minimal maintenance",
          "Durable, rugged construction",
          "Ideal as a pre-separator ahead of bag filters",
          "Reduces load & extends downstream media life",
        ],
        specs: [
          ["Type", "Inertial / centrifugal separator"],
          ["Moving parts", "None"],
          ["Typical use", "Coarse pre-separation"],
          ["Pairing", "Upstream of bag filters"],
          ["Materials", "MS / SS as per application"],
        ],
        applications: ["Cement", "Steel", "Foundry", "Coal", "Engineering"],
      },
      {
        slug: "bibo-dust-collector",
        name: "BIBO Dust Collector",
        blurb: "Bag-In/Bag-Out contained-change collector for hazardous & toxic dust.",
        longDescription:
          "The BIBO (Bag-In/Bag-Out) Dust Collector is a contained-change dust collector designed for hazardous, toxic and pharmaceutical dust. Filters are changed inside a sealed PVC bag so the operator is never exposed to the captured material, ensuring safe maintenance and full containment of potent compounds.",
        features: [
          "Contained Bag-In/Bag-Out filter change",
          "Zero operator exposure to captured dust",
          "Designed for hazardous, toxic & potent dust",
          "GMP-friendly for pharmaceutical processes",
          "Sealed, leak-tested containment housing",
        ],
        specs: [
          ["Change method", "Bag-In / Bag-Out (contained)"],
          ["Containment", "Sealed, operator-safe"],
          ["Filtration", "HEPA / cartridge as per duty"],
          ["Compliance", "GMP / pharma suitable"],
          ["Materials", "SS / MS as per application"],
        ],
        applications: ["Pharmaceutical", "Chemical", "Fine Chemicals"],
      },
      {
        slug: "bibo-units",
        name: "BIBO Units",
        blurb: "Containment housings for safe-change filtration in critical & clean processes.",
        longDescription:
          "BIBO Units are containment housings that enable safe-change filtration in critical and clean processes. They allow filters to be replaced without releasing captured contaminants, protecting both personnel and product in clean and contained manufacturing environments.",
        features: [
          "Safe-change containment filter housings",
          "Protects personnel & product",
          "For critical and clean processes",
          "Configurable HEPA / pre-filter stages",
          "Leak-tested, robust construction",
        ],
        specs: [
          ["Type", "Containment filter housing"],
          ["Change method", "Bag-In / Bag-Out"],
          ["Filter stages", "Pre + HEPA, as per duty"],
          ["Materials", "SS preferred"],
        ],
        applications: ["Pharmaceutical", "Cleanroom", "Chemical"],
      },
      {
        slug: "horizontal-dust-collector",
        name: "Horizontal Dust Collector",
        blurb: "Space-efficient horizontal configuration for height-constrained layouts.",
        longDescription:
          "The Horizontal Dust Collector is a space-efficient, horizontally configured filtration unit for plant layouts with height constraints. It delivers reliable dedusting performance where a tall vertical collector cannot be accommodated.",
        features: [
          "Horizontal layout for low-headroom sites",
          "Reliable pulse-cleaned filtration",
          "Compact, space-saving footprint",
          "Customized to plant layout",
        ],
        specs: [
          ["Configuration", "Horizontal"],
          ["Cleaning", "Pulse-jet"],
          ["Best for", "Height-constrained layouts"],
          ["Materials", "MS / SS as per application"],
        ],
        applications: ["Engineering", "Cement", "Steel", "General Industry"],
      },
      {
        slug: "gmp-portable-dust-collector",
        name: "GMP Portable Dust Collector",
        blurb: "Mobile, GMP-compliant unit for pharma & clean point-of-source capture.",
        longDescription:
          "The GMP Portable Dust Collector is a mobile, GMP-compliant unit for pharmaceutical and clean environments. It provides point-of-source dust capture and can be wheeled to wherever it is needed for dispensing, sampling, charging and similar operations.",
        features: [
          "Mobile, wheel-mounted unit",
          "GMP-compliant for pharma / clean areas",
          "Point-of-source dust capture",
          "HEPA filtration with safe-change option",
          "Compact and easy to relocate",
        ],
        specs: [
          ["Mobility", "Castor-mounted, portable"],
          ["Compliance", "GMP"],
          ["Filtration", "Pre + HEPA"],
          ["Use", "Point-of-source capture"],
        ],
        applications: ["Pharmaceutical", "FMCG", "Cleanroom"],
      },
      {
        slug: "venturi-scrubber",
        name: "Venturi Scrubber",
        blurb: "High-efficiency wet scrubbing for fine particulate & fume.",
        longDescription:
          "The Venturi Scrubber delivers high-efficiency wet scrubbing for fine particulate and fume. Gas is accelerated through a high-velocity venturi throat where atomised scrubbing liquid captures sub-micron particles, making it ideal for sticky, hot or fine dust that is difficult for dry collection.",
        features: [
          "High-velocity venturi throat for fine capture",
          "Handles sticky, hot or sub-micron dust",
          "Effective on fume and mist",
          "Robust wet-scrubbing construction",
          "Adjustable throat for variable load",
        ],
        specs: [
          ["Principle", "High-velocity venturi wet scrubbing"],
          ["Target", "Fine particulate & fume"],
          ["Liquid", "Water / reagent as per duty"],
          ["Materials", "SS / PP-FRP as per application"],
        ],
        applications: ["Paint", "Chemical", "Foundry", "Steel"],
      },
      {
        slug: "packed-bed-scrubber",
        name: "Packed Bed Scrubber",
        blurb: "Gas absorption & neutralization of acidic or odorous gases.",
        longDescription:
          "The Packed Bed Scrubber is designed for gas absorption and neutralization of acidic or odorous gases. The gas stream passes through packed media wetted with a scrubbing/neutralizing liquid, maximising contact area to absorb and neutralise pollutants before discharge.",
        features: [
          "Absorbs & neutralizes acidic / odorous gases",
          "High contact-area packed media",
          "Corrosion-resistant PP-FRP construction",
          "Configurable reagent dosing",
          "Effective odour & fume control",
        ],
        specs: [
          ["Principle", "Packed-media gas absorption"],
          ["Target", "Acidic / odorous gases"],
          ["Media", "Random / structured packing"],
          ["Materials", "PP-FRP / FRP"],
        ],
        applications: ["Chemical", "Pharmaceutical", "Paint", "Effluent / ETP"],
      },
      {
        slug: "de-dusting-tunnels",
        name: "De-Dusting Tunnels",
        blurb: "Personnel & product dedusting enclosures for pharma & FMCG lines.",
        longDescription:
          "De-Dusting Tunnels are enclosures that remove surface dust from personnel or product as they pass through. Widely used on pharmaceutical and FMCG lines, they improve hygiene and product quality by capturing loose particulate before the next process step.",
        features: [
          "Removes surface dust from product / personnel",
          "Improves hygiene & product quality",
          "Tailored to line speed & geometry",
          "Integrated dust capture & filtration",
        ],
        specs: [
          ["Type", "Walk/convey-through enclosure"],
          ["Use", "Personnel & product dedusting"],
          ["Industry fit", "Pharma & FMCG lines"],
          ["Materials", "SS construction"],
        ],
        applications: ["Pharmaceutical", "FMCG", "Food"],
      },
    ],
  },
  {
    slug: "hvac-equipment",
    name: "HVAC Equipment",
    short: "HVAC Equipment",
    tag: "HVAC",
    icon: "Fan",
    blurb:
      "Centrifugal blowers, axial & inline fans, AHUs and filter-washing systems engineered for efficient air movement.",
    products: [
      {
        slug: "centrifugal-blowers",
        name: "Centrifugal Blowers",
        blurb:
          "High-static-pressure air movement — FD, DIDW, High Pressure, Exhaust & ID fan variants.",
        longDescription:
          "Our Centrifugal Blowers draw air into the impeller centre and expel it radially for high static pressure and efficient air movement against resistance. Available as FD (Forced Draft), DIDW (Double Inlet Double Width), High Pressure, Exhaust and ID (Induced Draft) variants, each is custom-built to the required airflow, pressure and temperature duty.",
        variants: [
          "FD Fan (Forced Draft)",
          "DIDW Fan (Double Inlet Double Width)",
          "High Pressure Blower",
          "Exhaust Blower",
          "ID Fan (Induced Draft)",
        ],
        features: [
          "High static pressure against system resistance",
          "Radial discharge from centre-fed impeller",
          "FD, DIDW, High-Pressure, Exhaust & ID variants",
          "Custom impeller selection for efficiency",
          "Balanced rotor for low vibration & long life",
        ],
        specs: [
          ["Type", "Centrifugal (radial discharge)"],
          ["Variants", "FD · DIDW · High Pressure · Exhaust · ID"],
          ["Pressure", "Medium to high static"],
          ["Drive", "Direct / belt as per duty"],
          ["Temperature", "Ambient to high (ID fans)"],
          ["Materials", "MS / SS as per application"],
        ],
        applications: ["Pharmaceutical", "Ceramic", "Foundry", "Paint", "Chemical", "Power", "Cement"],
      },
      {
        slug: "tube-axial-fan",
        name: "Tube Axial Fan",
        blurb: "High-volume, low-to-medium pressure ventilation airflow.",
        longDescription:
          "The Tube Axial Fan moves high volumes of air at low-to-medium static pressure. Compact and duct-mountable, it is ideal for general ventilation, exhaust and fresh-air supply where large airflow is needed at modest pressure.",
        features: [
          "High-volume airflow at low/medium pressure",
          "Compact, duct-mountable design",
          "Efficient general ventilation & exhaust",
          "Selectable blade & hub for duty",
        ],
        specs: [
          ["Type", "Tube axial"],
          ["Flow", "High volume"],
          ["Pressure", "Low to medium"],
          ["Mounting", "In-duct / inline"],
        ],
        applications: ["Engineering", "General Ventilation", "Warehousing"],
      },
      {
        slug: "plug-fan",
        name: "Plug Fan",
        blurb: "Direct-drive plenum fan for AHUs and clean-air systems.",
        longDescription:
          "The Plug Fan is a direct-drive plenum fan for AHUs and clean-air systems. Its housingless design is compact and efficient, allowing flexible discharge and easy integration into air-handling units and cleanroom plenums.",
        features: [
          "Direct-drive, housingless plenum design",
          "Compact & efficient for AHUs",
          "Flexible discharge direction",
          "Ideal for clean-air & cleanroom systems",
        ],
        specs: [
          ["Type", "Plenum / plug fan"],
          ["Drive", "Direct drive"],
          ["Best for", "AHUs & clean-air systems"],
          ["Control", "VFD-ready"],
        ],
        applications: ["Pharmaceutical", "Cleanroom", "HVAC"],
      },
      {
        slug: "inline-fans",
        name: "Inline Fans",
        blurb: "Duct-mounted inline ventilation for compact installs.",
        longDescription:
          "Inline Fans are duct-mounted ventilation fans that fit directly within ductwork. They provide reliable booster and exhaust airflow in a compact, space-saving form ideal for retrofits and tight services.",
        features: [
          "Mounts directly in-duct",
          "Compact, space-saving installation",
          "Reliable booster & exhaust airflow",
          "Quiet, balanced operation",
        ],
        specs: [
          ["Type", "Inline duct fan"],
          ["Mounting", "In-duct"],
          ["Use", "Booster / exhaust ventilation"],
        ],
        applications: ["Commercial HVAC", "Engineering", "General Ventilation"],
      },
      {
        slug: "cabinet-fans",
        name: "Cabinet Fans",
        blurb: "Acoustically treated cabinet ventilation units.",
        longDescription:
          "Cabinet Fans are acoustically treated ventilation units housed in an insulated cabinet for low-noise operation. They are well suited to supply and exhaust duties where sound levels must be controlled.",
        features: [
          "Acoustically insulated cabinet",
          "Low-noise supply & exhaust",
          "Compact, serviceable enclosure",
          "Forward / backward-curved options",
        ],
        specs: [
          ["Type", "Cabinet (insulated) fan"],
          ["Acoustics", "Sound-attenuated"],
          ["Use", "Supply / exhaust ventilation"],
        ],
        applications: ["Commercial HVAC", "Pharmaceutical", "Hospitality"],
      },
      {
        slug: "air-handling-unit",
        name: "Air Handling Unit (AHU)",
        blurb: "Modular AHUs for HVAC and cleanroom air treatment.",
        longDescription:
          "Our modular Air Handling Units (AHUs) treat air for HVAC and cleanroom applications — filtration, cooling, heating and humidity control in configurable sections. Built to GMP standards where required, they form the core of comfort and process air systems.",
        features: [
          "Modular, configurable sections",
          "Filtration, cooling, heating & humidity control",
          "GMP / cleanroom configurations available",
          "Double-skin insulated panels",
          "Plug-fan / DIDW fan options",
        ],
        specs: [
          ["Type", "Modular AHU"],
          ["Functions", "Filter · cool · heat · humidify"],
          ["Construction", "Double-skin panel"],
          ["Compliance", "GMP / cleanroom optional"],
          ["Materials", "GI / SS / Aluminium frame"],
        ],
        applications: ["Pharmaceutical", "Cleanroom", "Commercial HVAC", "Hospital"],
      },
      {
        slug: "filter-washing-systems",
        name: "Filter Washing Systems",
        blurb: "Automated cleaning systems for filter maintenance & reuse.",
        longDescription:
          "Filter Washing Systems automate the cleaning of filters for maintenance and reuse. By restoring filter media to service condition, they reduce consumable cost and downtime while maintaining consistent air quality.",
        features: [
          "Automated filter cleaning",
          "Extends filter life — reduces consumables",
          "Lowers maintenance downtime",
          "Consistent restored performance",
        ],
        specs: [
          ["Type", "Automated washing system"],
          ["Benefit", "Filter reuse & cost saving"],
          ["Use", "Filter maintenance"],
        ],
        applications: ["Textile", "Automotive", "General Industry"],
      },
    ],
  },
  {
    slug: "turnkey-projects-fabrication",
    name: "Turnkey Projects & Fabrication",
    short: "Turnkey & Fabrication",
    tag: "Turnkey",
    icon: "Wrench",
    blurb:
      "End-to-end design, manufacture, installation & commissioning, plus custom MS / SS / PP-FRP fabrication.",
    products: [
      {
        slug: "turnkey-projects",
        name: "Turnkey Air & Ventilation Projects",
        blurb:
          "End-to-end design, manufacture, installation & commissioning of APC and ventilation systems.",
        longDescription:
          "We deliver end-to-end turnkey air-pollution-control and ventilation projects — from application study and engineered design through in-house manufacture, site installation and final commissioning. A single accountable partner takes your system from concept to a fully performing, compliant installation.",
        features: [
          "Single-source design to commissioning",
          "Application study & engineered drawings",
          "In-house manufacture & site erection",
          "Testing, balancing & performance hand-over",
          "Ongoing spares & service support",
        ],
        specs: [
          ["Scope", "Design · Manufacture · Install · Commission"],
          ["Systems", "APC & ventilation"],
          ["Delivery", "Turnkey, single-source"],
          ["Support", "AMC & spares"],
        ],
        applications: ["Power", "Cement", "Steel", "Pharmaceutical", "Chemical", "Foundry"],
      },
      {
        slug: "custom-fabrication",
        name: "Custom Fabrication (MS / SS / PP-FRP)",
        blurb:
          "Ducting, hoods, stacks, tanks, housings & structural work in MS, SS and PP-FRP.",
        longDescription:
          "Our in-house fabrication shop produces custom work in MS (Mild Steel), SS (Stainless Steel) and PP-FRP — including ducting, hoods, stacks, tanks, housings and structural steel. Tight in-house control ensures dimensional accuracy, quality welding and on-time delivery for both our own equipment and standalone fabrication contracts.",
        features: [
          "MS, SS and PP-FRP fabrication",
          "Ducting, hoods, stacks, tanks & housings",
          "Structural steel work",
          "In-house QA & dimensional control",
          "Standalone or integrated with equipment supply",
        ],
        specs: [
          ["Materials", "MS · SS · PP-FRP"],
          ["Products", "Ducting · hoods · stacks · tanks · housings"],
          ["Capability", "Structural & plate fabrication"],
          ["QA", "In-house inspection"],
        ],
        applications: ["All heavy industry", "Power", "Cement", "Chemical", "Pharmaceutical"],
      },
    ],
  },
];

/** Fallback used if a product/category has no mapped image. */
export const FALLBACK_IMAGE = "/img/feature.jpg";

/**
 * Real photography mirrored from the live Universal Air Technologies site into
 * /public/img. Where the source had no dedicated image, a category-appropriate
 * confirmed photo is reused (marked TODO) so no card ever renders empty/broken.
 */
const PRODUCT_IMAGES: Record<string, { image: string; gallery?: string[] }> = {
  // Air Pollution Control
  "pulse-jet-bag-filter": {
    image: "/img/products/puls-jet-bag-filtter.jpg",
    gallery: [
      "/img/products/puls-jet-bag-filtter-1.png",
      "/img/products/pulse-jet-system2.png",
      "/img/products/pulse-jet-system3.png",
      "/img/products/pulse-jet-system4.png",
    ],
  },
  "cyclone-separator": { image: "/img/products/horizontal-dust-collector.jpg" }, // TODO: dedicated cyclone photo
  "bibo-dust-collector": { image: "/img/products/bibo-dust-collector.jpg" },
  "bibo-units": { image: "/img/products/bibo-dust-collector.jpg" }, // TODO: dedicated BIBO units photo
  "horizontal-dust-collector": { image: "/img/products/horizontal-dust-collector.jpg" },
  "gmp-portable-dust-collector": { image: "/img/products/gmp-portable-dust-collector.jpg" },
  "venturi-scrubber": { image: "/img/products/venturi-scrubber.jpg" },
  "packed-bed-scrubber": { image: "/img/products/packed-bed-scrubber.jpg" },
  "de-dusting-tunnels": { image: "/img/products/gmp-portable-dust-collector.jpg" }, // TODO: dedicated de-dusting tunnel photo
  // HVAC
  "centrifugal-blowers": {
    image: "/img/products/blower.jpg",
    gallery: [
      "/img/products/fd-fan.png",
      "/img/products/didw-fan.png",
      "/img/products/high-pressure-blower.png",
      "/img/products/exhaust-blower.jpg",
      "/img/products/id-fan.jpg",
    ],
  },
  "tube-axial-fan": { image: "/img/products/tube-axial-fan.jpg" },
  "plug-fan": { image: "/img/products/plug-fan.jpg" },
  "inline-fans": { image: "/img/products/tube-axial-fan.jpg" }, // TODO: dedicated inline fan photo
  "cabinet-fans": { image: "/img/products/blower.jpg" }, // TODO: dedicated cabinet fan photo
  "air-handling-unit": { image: "/img/products/blower.jpg" }, // TODO: dedicated AHU photo
  "filter-washing-systems": { image: "/img/feature.jpg" }, // TODO: dedicated filter-washing photo
  // Turnkey & Fabrication
  "turnkey-projects": { image: "/img/slider/company-photo.jpg" },
  "custom-fabrication": { image: "/img/feature.jpg" },
};

const CATEGORY_IMAGES: Record<CategorySlug, string> = {
  "air-pollution-control": "/img/products/puls-jet-bag-filtter.jpg",
  "hvac-equipment": "/img/products/blower.jpg",
  "turnkey-projects-fabrication": "/img/slider/company-photo.jpg",
};

// Inject images into the catalog so every consumer (cards, hub, mega-menu,
// detail pages, sitemap) gets them for free.
for (const category of CATALOG) {
  category.image = CATEGORY_IMAGES[category.slug];
  for (const product of category.products) {
    const mapped = PRODUCT_IMAGES[product.slug];
    product.image = mapped?.image ?? FALLBACK_IMAGE;
    product.gallery = mapped?.gallery;
  }
}

export interface FlatProduct extends Product {
  category: CategorySlug;
  categoryName: string;
  categoryShort: string;
  categoryTag: string;
}

export const ALL_PRODUCTS: FlatProduct[] = CATALOG.flatMap((c) =>
  c.products.map((p) => ({
    ...p,
    category: c.slug,
    categoryName: c.name,
    categoryShort: c.short,
    categoryTag: c.tag,
  }))
);

export const FEATURED_SLUGS = [
  "pulse-jet-bag-filter",
  "centrifugal-blowers",
  "bibo-dust-collector",
  "venturi-scrubber",
  "air-handling-unit",
  "tube-axial-fan",
  "packed-bed-scrubber",
  "custom-fabrication",
];

export const getProduct = (slug: string): FlatProduct | undefined =>
  ALL_PRODUCTS.find((p) => p.slug === slug);

export const getCategory = (slug: string): Category | undefined =>
  CATALOG.find((c) => c.slug === slug);

export const getFeatured = (): FlatProduct[] =>
  FEATURED_SLUGS.map(getProduct).filter((p): p is FlatProduct => Boolean(p));
