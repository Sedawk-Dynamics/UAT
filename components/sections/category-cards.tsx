import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Heading } from "../section";
import Reveal from "../reveal";
import Media from "../media";
import LucideIcon from "../lucide-icon";
import { CATALOG, FALLBACK_IMAGE } from "@/lib/products";

export default function CategoryCards() {
  return (
    <Section tone="soft">
      <Heading center eyebrow="What We Make" title="Three pillars of industrial air engineering" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {CATALOG.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.08}>
            <Link
              href={`/products/category/${c.slug}`}
              className="group relative block h-full overflow-hidden rounded-3xl border border-line shadow-[0_1px_2px_rgba(11,18,32,0.04),0_10px_30px_rgba(11,18,32,0.06)] transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(27,67,196,0.18)]"
            >
              <Media
                src={c.image ?? FALLBACK_IMAGE}
                alt={c.name}
                ratio={4 / 5}
                zoom
                duotone
                scrim
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-3xl"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="mb-3 grid size-11 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                  <LucideIcon name={c.icon} className="size-6" />
                </span>
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <span className="mt-2 block h-0.5 w-10 bg-yellow transition-all duration-300 group-hover:w-20" />
                <p className="mt-3 text-sm text-white/80">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow">
                  Explore range <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
