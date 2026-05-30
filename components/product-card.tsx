"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Media from "./media";
import { Badge } from "@/components/ui/badge";
import { FALLBACK_IMAGE, type FlatProduct } from "@/lib/products";

export default function ProductCard({ p, index = 0 }: { p: FlatProduct; index?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1], delay: (index % 4) * 0.06 }}
      className="h-full"
    >
      <Link
        href={`/products/${p.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgba(11,18,32,0.04),0_10px_30px_rgba(11,18,32,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(27,67,196,0.18)]"
      >
        <div className="relative">
          <Media
            src={p.image ?? FALLBACK_IMAGE}
            alt={p.name}
            ratio={4 / 3}
            zoom
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <Badge className="absolute left-3 top-3 z-10 bg-white/90 text-[10px] font-bold uppercase tracking-wider text-blue hover:bg-white">
            {p.categoryTag}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-blue">{p.name}</h3>
          <span className="mt-1.5 block h-0.5 w-0 bg-yellow transition-all duration-300 group-hover:w-12" />
          <p className="mt-2 flex-1 text-sm text-slate">{p.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.applications.slice(0, 3).map((a) => (
              <span key={a} className="rounded-md border border-line bg-bgsoft px-2 py-0.5 text-[11px] text-slate">
                {a}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
            View details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
