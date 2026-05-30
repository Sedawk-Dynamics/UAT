import { SITE } from "./site";
import type { FlatProduct } from "./products";

/** JSON-LD: Organization + LocalBusiness for the whole site. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: `${SITE.brand} (${SITE.full})`,
    legalName: SITE.legal,
    slogan: SITE.tagline,
    description: SITE.positioning,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: "1994",
    taxID: SITE.gst,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressParts.street,
      addressLocality: SITE.addressParts.locality,
      addressRegion: SITE.addressParts.region,
      postalCode: SITE.addressParts.postalCode,
      addressCountry: SITE.addressParts.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: SITE.mapLink,
    sameAs: Object.values(SITE.social).filter((u) => u && u !== "#"),
  };
}

/** JSON-LD: Product for a detail page. */
export function productSchema(p: FlatProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.longDescription,
    category: p.categoryName,
    image: p.image ? `${SITE.url}${p.image}` : undefined,
    brand: { "@type": "Brand", name: `${SITE.brand} (${SITE.full})` },
    manufacturer: { "@type": "Organization", name: SITE.legal },
    url: `${SITE.url}/products/${p.slug}`,
  };
}
