/** Company facts, NAP, and reusable content blocks. */

export const SITE = {
  brand: "UAT",
  full: "Universal Air Technologies",
  legal: "UAT Private Limited",
  tagline: "Cleaning Air, Saving Lives",
  positioning:
    "UAT manufactures industrial air-pollution-control and HVAC equipment and delivers turnkey ventilation and fabrication projects across heavy industry.",
  phone: "+91 98211 52726",
  phoneHref: "tel:+919821152726",
  whatsapp: "https://wa.me/919821152726",
  email: "info@uat.com",
  gst: "24AAECU0661L1ZA",
  hours: "Mon–Sat 9:00 AM – 6:00 PM · Sun Closed",
  address:
    "Plot No 92/4, Shiv Industrial Infrastructure Park, Village: Lamdapura, Near Savli GIDC, Vadodara – 391775, Gujarat, India",
  addressParts: {
    street:
      "Plot No 92/4, Shiv Industrial Infrastructure Park, Village: Lamdapura, Near Savli GIDC",
    locality: "Vadodara",
    region: "Gujarat",
    postalCode: "391775",
    country: "IN",
  },
  mapLink: "https://maps.app.goo.gl/WSANv79f6cbP77sR7",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7374.245988534221!2d73.20900318285281!3d22.46201189418878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcd66dd10a6b1%3A0xfa482f68fa434233!2sUniversal%20Air%20Technologies!5e0!3m2!1sen!2sin",
  geo: { lat: 22.462, lng: 73.209 },
  ogImage: "/img/logo-og.jpg",
  catalogueUrl:
    "https://www.universalairtechnologies.com/download/Universal-single-page-catalogue.pdf",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.uat.com",
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    x: "#",
  },
} as const;

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  plain?: boolean; // render without thousands separators (e.g. a year)
}

export const STATS: StatItem[] = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 1994, label: "Established", plain: true },
  { value: 950, suffix: "+", label: "Happy Clients" },
  { value: 1800, suffix: "+", label: "Projects Delivered" },
  { value: 130, suffix: "+", label: "Team Members" },
];

export interface Pillar {
  icon: string;
  title: string;
  text: string;
}

export const PILLARS: Pillar[] = [
  { icon: "BadgeCheck", title: "Quality Products", text: "Engineered to international standards with rigorous QA at every stage." },
  { icon: "Zap", title: "Low Power Consumption", text: "Optimised aerodynamics and drives that cut running cost and energy." },
  { icon: "Infinity", title: "Long Life", text: "Robust construction and premium media for maximum service life." },
  { icon: "Ruler", title: "Custom-Engineered", text: "Every unit sized and built to your exact application and duty." },
  { icon: "Factory", title: "In-House Fabrication", text: "Full MS / SS / PP-FRP fabrication under one roof for tight control." },
  { icon: "Clock", title: "On-Time Delivery", text: "Disciplined project management for dependable, predictable schedules." },
];

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
}

export const PROCESS: ProcessStep[] = [
  { step: "01", title: "Design", text: "Application study, sizing & engineered drawings tailored to your duty." },
  { step: "02", title: "Manufacture", text: "In-house MS/SS/PP-FRP fabrication & assembly under tight QA." },
  { step: "03", title: "Install", text: "Site erection, ducting & integration with your process." },
  { step: "04", title: "Commission", text: "Testing, balancing & performance hand-over to spec." },
  { step: "05", title: "Support", text: "Spares, AMC & lifecycle service for the long run." },
];

export interface Industry {
  name: string;
  icon: string;
  note: string;
  image: string;
}

export const INDUSTRIES: Industry[] = [
  { name: "Thermal Power Plants", icon: "Zap", note: "Dust collection & FD/ID draft fans for boiler & ash handling.", image: "/img/products/id-fan.jpg" },
  { name: "Coal", icon: "Mountain", note: "Bag houses & cyclones for coal handling and crushing dust.", image: "/img/products/cyclone-separator.jpg" },
  { name: "Cement", icon: "Building2", note: "Bag houses & high-temperature ID fans across the process.", image: "/img/products/puls-jet-bag-filtter.jpg" },
  { name: "Engineering", icon: "Cog", note: "Fume extraction, ventilation & custom fabricated ducting.", image: "/img/products/custom-fabrication.jpg" },
  { name: "Pharmaceutical", icon: "FlaskConical", note: "BIBO + GMP portable collectors and cleanroom AHUs.", image: "/img/products/gmp-portable-dust-collector.jpg" },
  { name: "Textile", icon: "Shirt", note: "Filter washing systems, de-dusting & humidity AHUs.", image: "/img/products/air-handling-unit.jpg" },
  { name: "Sugar", icon: "Leaf", note: "Wet scrubbers & ID fans for bagasse-fired boilers.", image: "/img/products/packed-bed-scrubber.jpg" },
  { name: "Steel", icon: "Hammer", note: "Heavy-duty pulse-jet bag filters & fume capture.", image: "/img/products/pulse-jet-bag-filter-install-1.jpg" },
  { name: "Ceramic", icon: "Pyramid", note: "Centrifugal blowers, spray-dryer & kiln dedusting.", image: "/img/products/centrifugal-blowers.jpg" },
  { name: "Foundry", icon: "Flame", note: "Bag filters & blowers for melting & shake-out fume.", image: "/img/products/high-pressure-blower.png" },
  { name: "Paint", icon: "SprayCan", note: "Venturi scrubbers, booths & exhaust blowers.", image: "/img/products/venturi-scrubber.jpg" },
  { name: "Chemical", icon: "Beaker", note: "Packed-bed scrubbers for acidic & odorous gases.", image: "/img/products/hybrid-scrubber.png" },
];

export interface HeroSlide {
  kicker: string;
  title: string;
  sub: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  { kicker: "Air Pollution Control", title: "Manufacturer of Air Pollution Control Equipment", sub: "Dust collectors, bag houses & scrubbers engineered to keep your emissions compliant and your plant safe.", image: "/img/slider/Pulse-Jet-Bag-Filter.jpg" },
  { kicker: "HVAC Equipment", title: "Centrifugal Blowers & High-Pressure Fans", sub: "High-efficiency air movement built for high static pressure and demanding industrial duty.", image: "/img/slider/blower.jpg" },
  { kicker: "Draft Fans", title: "ID & FD Fans for Heavy-Duty Process", sub: "Induced and forced-draft fans engineered for boilers, kilns and high-temperature service.", image: "/img/slider/id-fan.jpg" },
  { kicker: "Ventilation", title: "Axial, Inline & Tube Fans", sub: "High-volume ventilation airflow across the full range of pressures and duties.", image: "/img/slider/Tube-Axial-Fan.jpg" },
  { kicker: "Clean Air", title: "Plug Fans & Air Handling Units", sub: "Direct-drive plug fans and modular AHUs for cleanroom and HVAC air treatment.", image: "/img/slider/plug-fan.jpg" },
  { kicker: "Turnkey & Fabrication", title: "Turnkey Projects & Fabrication", sub: "Design to commissioning, with full in-house MS, SS and PP-FRP fabrication.", image: "/img/slider/company-photo.jpg" },
];

export const WHY_POINTS = [
  "30+ years' experience",
  "Custom-engineered to application",
  "In-house MS/SS/PP-FRP fabrication",
  "On-time delivery",
];
