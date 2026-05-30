import Hero from "@/components/hero";
import IntroStrip from "@/components/sections/intro-strip";
import CategoryCards from "@/components/sections/category-cards";
import FeaturedProducts from "@/components/sections/featured-products";
import WhyUs from "@/components/sections/why-us";
import StatsBand from "@/components/sections/stats-band";
import IndustriesSection from "@/components/sections/industries-section";
import ProcessSequence from "@/components/sections/process-sequence";
import CTABand from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <CategoryCards />
      <FeaturedProducts />
      <WhyUs />
      <StatsBand />
      <IndustriesSection />
      <ProcessSequence />
      <CTABand />
    </>
  );
}
