import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { clashDisplay, satoshi } from "./fonts";
import { SITE } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import Providers from "@/components/providers";
import SmoothScroll from "@/components/smooth-scroll";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import FloatingButtons from "@/components/floating-buttons";
import ScrollProgress from "@/components/scroll-progress";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "UAT (Universal Air Technologies) | Industrial Air Pollution Control & HVAC Equipment",
    template: "%s | UAT (Universal Air Technologies)",
  },
  description:
    "Manufacturer of centrifugal blowers, axial fans, dust collectors & scrubbers — Vadodara. Turnkey ventilation & MS/SS/PP-FRP fabrication. 30+ years. Cleaning Air, Saving Lives.",
  applicationName: "UAT",
  keywords: [
    "air pollution control equipment", "dust collector manufacturer", "pulse jet bag filter",
    "centrifugal blower", "ID fan", "FD fan", "wet scrubber", "AHU manufacturer",
    "industrial ventilation Vadodara",
  ],
  authors: [{ name: SITE.legal }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${SITE.brand} (${SITE.full})`,
    title: "UAT — Manufacturer of Air Pollution Control & HVAC Equipment",
    description:
      "Industrial dust collectors, bag filters, scrubbers, centrifugal blowers, ID/FD fans, AHUs & turnkey fabrication. Cleaning Air, Saving Lives.",
    locale: "en_IN",
    url: SITE.url,
    images: [{ url: SITE.ogImage, width: 2658, height: 1136, alt: "UAT — Universal Air Technologies" }],
  },
  twitter: { card: "summary_large_image", images: [SITE.ogImage] },
  robots: { index: true, follow: true },
  // Site icon is provided by the file convention app/icon.png (the UAT logo).
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(clashDisplay.variable, satoshi.variable)}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-blue focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Providers>
          <SmoothScroll>
            <ScrollProgress />
            <SiteHeader />
            <main id="main" className="min-h-screen">{children}</main>
            <SiteFooter />
            <FloatingButtons />
          </SmoothScroll>
          <Toaster richColors position="bottom-center" />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
