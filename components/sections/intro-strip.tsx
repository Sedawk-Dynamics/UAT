import { ArrowRight } from "lucide-react";
import Btn from "../brand-button";
import Reveal from "../reveal";
import ImageReveal from "../image-reveal";
import Media from "../media";

export default function IntroStrip() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue">
            <span className="h-px w-8 bg-blue" />
            Cleaning Air, Saving Lives
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.1rem)] font-bold leading-[1.1] text-ink text-balance">
            Industrial air engineering, backed by 30+ years of expertise
          </h2>
          <p className="mt-5 text-lg text-slate">
            UAT (Universal Air Technologies) manufactures industrial air-pollution-control and HVAC
            equipment, and delivers turnkey ventilation and fabrication projects across heavy
            industry. A new branch carrying forward the experience of Universal Air Technologies,
            established 1994.
          </p>
          <p className="mt-3 text-slate">
            From dust collectors and scrubbers to centrifugal blowers, ID/FD fans and AHUs — each
            system is custom-engineered to your application and built in-house in MS, SS and PP-FRP.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Btn href="/about" variant="blue">About UAT <ArrowRight className="size-4" /></Btn>
            <Btn href="/products" variant="outline">Browse Products</Btn>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            {/* offset accent frame */}
            <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border border-blue/30 sm:block" aria-hidden="true" />
            <ImageReveal className="relative">
              <Media
                src="/img/about-1.jpg"
                alt="UAT manufacturing facility"
                ratio={4 / 3}
                duotone
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-3xl shadow-[0_18px_50px_rgba(27,67,196,0.18)]"
              />
            </ImageReveal>
            <div className="absolute -bottom-6 -left-2 rounded-2xl bg-yellow px-6 py-5 text-ink shadow-[0_18px_50px_rgba(27,67,196,0.18)] sm:-left-6">
              <div className="font-display text-4xl font-bold leading-none">30+</div>
              <div className="mt-1 text-sm font-semibold">Years of Experience</div>
              <div className="text-xs opacity-70">Established 1994</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
