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
          "The Cyclone Separator is an inertial pre-separator built to withstand the abrasion of the very particulate it collects. With no moving parts, it spins the dust-laden gas to fling coarse particles to the wall and drop them out, cutting the dust load that reaches the final filter so the system can run at maximum efficiency. It is fabricated in hot-rolled plate or stainless steel, then cleaned, primed and painted in the customer's choice of standard colours.",
        features: [
          "Inertial separation — no moving parts to maintain",
          "Abrasion-resistant construction for high-wear dust",
          "Reduces dust load reaching the final filter",
          "Lets a paired final filter run at peak efficiency",
          "Hot-rolled plate or stainless-steel fabrication",
          "Cleaned, primed & painted in a standard colour of choice",
        ],
        specs: [
          ["Type", "Inertial / centrifugal separator"],
          ["Moving parts", "None"],
          ["Function", "Coarse pre-separation"],
          ["Pairing", "Upstream of a final filter"],
          ["Construction", "Hot-rolled plate / stainless steel"],
          ["Finish", "Cleaned, primed & painted (standard colours)"],
        ],
        applications: ["Cement", "Steel", "Foundry", "Coal", "Engineering"],
      },
      {
        slug: "bibo-dust-collector",
        name: "BIBO Dust Collector",
        blurb: "Bag-In/Bag-Out contained-change collector for hazardous & toxic dust.",
        longDescription:
          "The BIBO (Bag-In/Bag-Out) Dust Collector is a safe-change collector for potent products — anti-cancer compounds, hormones and similar materials that mandate contained handling. Polybags restrict operator contact with the potent dust during filter changes, while the captured dust collects in a bag designed to be easily removed and replaced for fully contained disposal.",
        features: [
          "Bag-In/Bag-Out polybag safe-change method",
          "Restricts operator contact with potent dust",
          "For anti-cancer, hormone & similar potent products",
          "Captured dust in an easily removed, replaceable bag",
          "Fully contained disposal",
          "GMP-friendly for pharmaceutical processes",
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
        blurb: "Pulse-jet baghouse in a height-constrained horizontal configuration.",
        longDescription:
          "The Horizontal Dust Collector is a pulse-jet baghouse arranged horizontally for height-constrained layouts, available in a range of designs to suit the application. Rapid high-pressure air jets send a shock of air through each bag to dislodge and discharge the dust cake, so the unit keeps running continuously with the fan on — generally without compartmentalisation. It is easily customised, handles a wide range of temperatures and pressures, and delivers high collection efficiency.",
        features: [
          "Horizontal layout for low-headroom sites",
          "High-pressure air-jet shock cleaning of each bag",
          "Continuous operation with the fan running",
          "Generally non-compartmentalised design",
          "Handles a wide range of temperatures & pressures",
          "High collection efficiency, easily customised",
        ],
        specs: [
          ["Configuration", "Horizontal pulse-jet baghouse"],
          ["Cleaning", "Rapid high-pressure air-jet (shock pulse)"],
          ["Operation", "Continuous, generally non-compartmentalised"],
          ["Best for", "Height-constrained layouts"],
          ["Operating temp/pressure", "Wide range, as per application"],
          ["Materials", "MS / SS as per application"],
        ],
        applications: ["Engineering", "Cement", "Steel", "General Industry"],
      },
      {
        slug: "gmp-portable-dust-collector",
        name: "GMP Portable Dust Collector",
        blurb: "Mobile, GMP-compliant unit for pharma & clean point-of-source capture.",
        longDescription:
          "The GMP Portable Dust Collector is a mobile, GMP-compliant unit for pharmaceutical and clean point-of-source capture, where airborne-particulate control is critical to compliance. It is custom-designed to collect dust-laden air from sifters, multi-mills, tablet compression, capsule and packing operations. Accessories — flexible hoses, capture hoods, pendants and adjustable arms — capture dust right at source to ensure containment.",
        features: [
          "Mobile, wheel-mounted GMP-compliant unit",
          "Custom-designed for pharma point-of-source capture",
          "Suits sifters, multi-mills, tablet compression, capsule & packing",
          "Flexible hoses, capture hoods, pendants & adjustable arms",
          "Captures dust at source to ensure containment",
          "HEPA filtration with safe-change option",
        ],
        specs: [
          ["Mobility", "Castor-mounted, portable"],
          ["Compliance", "GMP"],
          ["Filtration", "Pre + HEPA"],
          ["Capture", "Hoods, pendants & adjustable arms at source"],
          ["Use", "Sifting, milling, compression, capsule & packing"],
          ["Materials", "SS construction"],
        ],
        applications: ["Pharmaceutical", "FMCG", "Cleanroom"],
      },
      {
        slug: "venturi-scrubber",
        name: "Venturi Scrubber",
        blurb: "High-efficiency wet scrubbing for fine particulate & fume.",
        longDescription:
          "The Venturi Scrubber is a wet scrubber that removes fine particulate and fume from industrial exhaust by forcing the gas through a constricted Venturi throat. The throat accelerates the gas and creates a pressure drop that disperses the particulate and drives it to collide with injected liquid droplets; the wetted particulate is then separated from the cleaned gas. The result is high efficiency on fine, sub-micron particulate that is difficult for dry collection.",
        features: [
          "Constricted Venturi throat accelerates the gas stream",
          "Pressure drop drives particulate into liquid droplets",
          "Wetted particulate separated from the cleaned gas",
          "High efficiency on fine, sub-micron particulate",
          "Effective on sticky, hot dust, fume and mist",
          "Robust wet-scrubbing construction",
        ],
        specs: [
          ["Principle", "Venturi-throat wet scrubbing"],
          ["Target", "Fine / sub-micron particulate & fume"],
          ["Mechanism", "Throat acceleration & liquid-droplet collision"],
          ["Liquid", "Water / reagent as per duty"],
          ["Efficiency", "High on fine particulate"],
          ["Materials", "SS / PP-FRP as per application"],
        ],
        applications: ["Paint", "Chemical", "Foundry", "Steel"],
      },
      {
        slug: "packed-bed-scrubber",
        name: "Packed Bed Scrubber",
        blurb: "Gas absorption & neutralization of acidic or odorous gases.",
        longDescription:
          "The Packed Bed Scrubber is a gas-absorption tower filled with random or structured packing — plastic or ceramic — for neutralising acidic or odorous gases. The polluted gas passes through the bed in counter-current or cross-flow while scrubbing liquid (water or a chemical solution) is distributed over the packing through spray nozzles. The large gas–liquid contact area drives pollutant absorption by mass transfer before the cleaned gas is discharged.",
        features: [
          "Random or structured packing — plastic or ceramic",
          "Counter-current or cross-flow gas path",
          "Spray nozzles distribute scrubbing liquid over the bed",
          "Large gas–liquid contact area for high mass transfer",
          "Absorbs & neutralises acidic / odorous gases",
          "Corrosion-resistant PP-FRP construction",
        ],
        specs: [
          ["Principle", "Packed-media gas absorption (mass transfer)"],
          ["Target", "Acidic / odorous gases"],
          ["Flow", "Counter-current or cross-flow"],
          ["Packing", "Random / structured, plastic or ceramic"],
          ["Liquid", "Water or chemical solution via spray nozzles"],
          ["Materials", "PP-FRP / FRP"],
        ],
        applications: ["Chemical", "Pharmaceutical", "Paint", "Effluent / ETP"],
      },
      {
        slug: "hybrid-scrubber",
        name: "Hybrid Scrubber",
        blurb: "Multi-technology scrubber combining Venturi and packed-bed stages.",
        longDescription:
          "The Hybrid Scrubber combines multiple technologies in a single train for demanding pollutant-removal duties — typically a Venturi scrubber followed by a packed-bed scrubber, with added stages for gas absorption or chemical reaction. Capturing both fine particulate and soluble or reactive gases in one system, it is configured to suit the specific application.",
        features: [
          "Combines Venturi + packed-bed scrubbing in one train",
          "Venturi stage captures fine, sub-micron particulate",
          "Packed-bed stage absorbs acidic or odorous gases",
          "Optional stages for gas absorption or chemical reaction",
          "Handles mixed particulate-and-gas pollutant streams",
          "Configured to suit the specific application",
        ],
        specs: [
          ["Principle", "Multi-stage wet scrubbing"],
          ["Stages", "Venturi + packed-bed (+ absorption / reaction)"],
          ["Target", "Fine particulate & soluble / reactive gases"],
          ["Liquid", "Water / chemical reagent as per duty"],
          ["Configuration", "As per application"],
          ["Materials", "SS / PP-FRP as per application"],
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
      "Centrifugal blowers, axial fans, plug fans, cabinet fans and AHUs engineered for efficient air movement.",
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
          "The Tube Axial Fan is a high-volume, low-to-medium-pressure axial fan for exhausting dirty air or fumes — such as from paint spray booths — supplying fresh air, and spot-cooling people, rooms or machinery. It is available direct-driven, with the propeller on the motor shaft, or belt-driven, keeping the motor outside the airstream and away from high temperature, dirt or caustic contaminants. Typically built in mild steel, with aluminium or all-aluminium propellers for spark resistance and stainless steel or coatings for chemical resistance.",
        features: [
          "High-volume airflow at low-to-medium pressure",
          "Exhausts dirty air & fumes, e.g. paint spray booths",
          "Fresh-air supply and spot-cooling duties",
          "Direct-drive (propeller on shaft) or belt-drive options",
          "Belt drive keeps the motor out of the airstream",
          "Spark-resistant aluminium props; SS / coatings for chemicals",
        ],
        specs: [
          ["Type", "Tube axial"],
          ["Flow", "High volume"],
          ["Pressure", "Low to medium static"],
          ["Drive", "Direct (propeller on shaft) or belt"],
          ["Construction", "Mild steel; SS / coatings for chemical duty"],
          ["Propeller", "Aluminium / all-aluminium for spark resistance"],
        ],
        applications: ["Paint", "Engineering", "General Ventilation", "Warehousing"],
      },
      {
        slug: "plug-fan",
        name: "Plug Fan",
        blurb: "Unhoused backward-inclined plenum fan for AHUs and clean-air systems.",
        longDescription:
          "The Plug Fan is an unhoused, backward-inclined centrifugal (plenum) fan for supply, exhaust or recirculation duty in AHUs and clean-air systems. It relies on the surrounding plenum to direct airflow, keeping the motor, bearings and drives out of the airstream — so it suits clean, contaminated and high-temperature systems alike. It is built to a wide duty range and mounts either horizontally or vertically.",
        features: [
          "Unhoused backward-inclined plenum design",
          "Supply, exhaust or recirculation duty",
          "Motor, bearings & drives kept out of the airstream",
          "Suits clean, contaminated & high-temperature systems",
          "Belt or direct drive; horizontal or vertical mounting",
          "Flexible discharge for AHU & cleanroom integration",
        ],
        specs: [
          ["Type", "Backward-inclined plenum (plug) fan"],
          ["Flow", "Up to 150,000 m³/hr"],
          ["Pressure", "Up to 150 mm WC"],
          ["Operating temp", "Up to 800 °C"],
          ["Drive", "Belt or direct"],
          ["Mounting", "Horizontal or vertical"],
        ],
        applications: ["HVAC", "Textile", "Paint", "Pharmaceutical", "Cleanroom"],
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
        slug: "man-coolers",
        name: "Man Coolers",
        blurb: "High-velocity cooling air for workers in hot industrial areas.",
        longDescription:
          "Man Coolers are heavy-duty, high-velocity fans that direct a strong stream of air onto operators working in hot industrial areas — foundries, forging shops, furnaces and boiler floors. By moving large volumes of air at the work point, they relieve heat stress and improve comfort, safety and productivity where ambient cooling is impractical. Built rugged for continuous duty, in fixed, wall-mounted or portable configurations to suit the floor.",
        features: [
          "High-velocity air delivered straight to the work point",
          "Relieves heat stress for workers in hot areas",
          "Ideal for foundries, forging, furnace & boiler floors",
          "Rugged construction for continuous industrial duty",
          "Fixed, wall-mounted or portable configurations",
          "Heavy-duty motor with balanced impeller for long life",
        ],
        specs: [
          ["Type", "High-velocity man-cooling fan"],
          ["Function", "Spot cooling of personnel"],
          ["Mounting", "Fixed / wall / portable"],
          ["Construction", "Heavy-duty MS, industrial finish"],
          ["Drive", "Direct drive"],
          ["Materials", "MS / SS as per application"],
        ],
        applications: ["Foundry", "Steel", "Engineering", "Ceramic", "General Industry"],
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
 * Real client photography stored under /public/img/products. Files were supplied
 * by the client and renamed to clean, slug-based, URL-safe names (primary
 * <slug>.jpg, gallery <slug>-N.ext). Where the client supplied no dedicated
 * photo, a category-appropriate confirmed photo is reused (marked TODO) so no
 * card ever renders empty/broken.
 */
const PRODUCT_IMAGES: Record<string, { image: string; gallery?: string[] }> = {
  // Air Pollution Control
  "pulse-jet-bag-filter": {
    image: "/img/products/pulse-jet-bag-filter-install-1.jpg",
    gallery: [
      "/img/products/pulse-jet-bag-filter-install-2.jpg",
      "/img/products/puls-jet-bag-filtter-1.png",
      "/img/products/pulse-jet-system2.png",
      "/img/products/pulse-jet-system3.png",
      "/img/products/pulse-jet-system4.png",
    ],
  },
  "cyclone-separator": {
    image: "/img/products/cyclone-separator-1.jpg",
    gallery: ["/img/products/cyclone-separator.jpg"],
  },
  "bibo-dust-collector": {
    image: "/img/products/bibo-dust-collector.jpg",
    gallery: ["/img/products/bibo-dust-collector-1.jpg"],
  },
  "bibo-units": {
    image: "/img/products/bibo-units.jpg",
    gallery: ["/img/products/bibo-units-1.jpg"],
  },
  "horizontal-dust-collector": {
    image: "/img/products/horizontal-dust-collector.jpg",
    gallery: [
      "/img/products/horizontal-dust-collector-3.jpg",
      "/img/products/horizontal-dust-collector-1.jpg",
      "/img/products/horizontal-dust-collector-2.png",
      "/img/products/pulse-jet-bag-filter-install-3.jpg",
    ],
  },
  "gmp-portable-dust-collector": {
    image: "/img/products/gmp-portable-dust-collector.jpg",
    gallery: [
      "/img/products/gmp-portable-dust-collector-1.png",
      "/img/products/gmp-portable-dust-collector-2.png",
      "/img/products/gmp-portable-dust-collector-3.png",
      "/img/products/gmp-portable-dust-collector-4.png",
    ],
  },
  "venturi-scrubber": {
    image: "/img/products/venturi-scrubber-main.png",
    gallery: [
      "/img/products/venturi-scrubber.jpg",
      "/img/products/venturi-scrubber-1.jpg",
      "/img/products/venturi-scrubber-2.png",
    ],
  },
  "packed-bed-scrubber": {
    image: "/img/products/packed-bed-scrubber-3.jpg",
    gallery: [
      "/img/products/packed-bed-scrubber.jpg",
      "/img/products/packed-bed-scrubber-1.png",
      "/img/products/packed-bed-scrubber-2.png",
    ],
  },
  "hybrid-scrubber": {
    image: "/img/products/hybrid-scrubber.png",
    gallery: [
      "/img/products/hybrid-scrubber-1.png",
      "/img/products/hybrid-scrubber-2.png",
      "/img/products/hybrid-scrubber-3.png",
      "/img/products/hybrid-scrubber-4.png",
    ],
  },
  "de-dusting-tunnels": {
    image: "/img/products/de-dusting-tunnels.jpg",
    gallery: [
      "/img/products/de-dusting-tunnels-1.jpg",
      "/img/products/de-dusting-tunnels-2.jpg",
      "/img/products/de-dusting-tunnels-3.jpg",
      "/img/products/de-dusting-tunnels-4.jpg",
    ],
  },
  // HVAC
  "centrifugal-blowers": {
    image: "/img/products/centrifugal-blowers-4.jpg",
    gallery: [
      "/img/products/centrifugal-blowers-5.jpg",
      "/img/products/centrifugal-blowers.jpg",
      "/img/products/centrifugal-blowers-1.jpg",
      "/img/products/centrifugal-blowers-2.jpg",
      "/img/products/centrifugal-blowers-3.jpg",
      "/img/products/fd-fan.png",
      "/img/products/didw-fan.png",
      "/img/products/high-pressure-blower.png",
      "/img/products/exhaust-blower.jpg",
      "/img/products/id-fan.jpg",
    ],
  },
  "tube-axial-fan": {
    image: "/img/products/tube-axial-fan-4.png",
    gallery: [
      "/img/products/tube-axial-fan.jpg",
      "/img/products/tube-axial-fan-1.jpg",
      "/img/products/tube-axial-fan-2.png",
      "/img/products/tube-axial-fan-3.jpg",
      "/img/products/tube-axial-fan-5.png",
    ],
  },
  "plug-fan": {
    image: "/img/products/plug-fan.jpg",
    gallery: [
      "/img/products/plug-fan-1.jpg",
      "/img/products/plug-fan-2.jpg",
      "/img/products/plug-fan-3.png",
      "/img/products/plug-fan-4.jpg",
      "/img/products/plug-fan-5.jpg",
      "/img/products/plug-fan-6.png",
    ],
  },
  "cabinet-fans": {
    image: "/img/products/cabinet-fans.jpg",
    gallery: ["/img/products/cabinet-fans-1.jpg"],
  },
  "man-coolers": {
    image: "/img/products/man-coolers.jpg",
    gallery: ["/img/products/man-coolers-1.jpg"],
  },
  "air-handling-unit": {
    image: "/img/products/air-handling-unit.jpg",
    gallery: [
      "/img/products/air-handling-unit-1.png",
      "/img/products/air-handling-unit-2.jpg",
      "/img/products/air-handling-unit-3.jpg",
      "/img/products/air-handling-unit-4.jpg",
      "/img/products/air-handling-unit-5.jpg",
    ],
  },
  // Turnkey & Fabrication
  "turnkey-projects": { image: "/img/slider/company-photo.jpg" },
  "custom-fabrication": {
    image: "/img/products/custom-fabrication.jpg",
    gallery: [
      "/img/products/custom-fabrication-1.jpg",
      "/img/products/custom-fabrication-2.jpg",
      "/img/products/custom-fabrication-3.jpg",
      "/img/products/custom-fabrication-4.jpg",
      "/img/products/custom-fabrication-5.jpg",
      "/img/products/custom-fabrication-6.jpg",
      "/img/products/custom-fabrication-7.jpg",
      "/img/products/custom-fabrication-8.jpg",
      "/img/products/custom-fabrication-9.jpg",
    ],
  },
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
