import Link from "next/link";
import { Section, Heading } from "../section";
import Media from "../media";
import LucideIcon from "../lucide-icon";
import { INDUSTRIES } from "@/lib/site";

/** Marquee row + photo grid. Marquee pauses under reduced-motion (CSS). */
export default function IndustriesSection() {
  const doubled = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <Section tone="soft">
      <Heading
        center
        eyebrow="Industries Served"
        title="Trusted across heavy industry"
        sub="From thermal power to pharma, our equipment runs in the toughest process environments."
      />

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max gap-3 motion-safe:animate-marquee">
          {doubled.map((ind, i) => (
            <span key={`${ind.name}-${i}`} className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink">
              <LucideIcon name={ind.icon} className="size-4 text-blue" />
              {ind.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {INDUSTRIES.map((ind) => (
          <Link
            key={ind.name}
            href="/industries"
            className="group relative overflow-hidden rounded-2xl border border-line shadow-[0_1px_2px_rgba(11,18,32,0.04),0_10px_30px_rgba(11,18,32,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(27,67,196,0.18)]"
          >
            <Media
              src={ind.image}
              alt={ind.name}
              ratio={4 / 3}
              zoom
              duotone
              scrim
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3.5 text-white">
              <LucideIcon name={ind.icon} className="size-4 shrink-0 text-yellow" />
              <span className="text-sm font-semibold leading-tight">{ind.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
