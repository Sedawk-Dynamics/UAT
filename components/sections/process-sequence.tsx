"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";
import { Heading } from "../section";
import { PROCESS } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Pinned capability sequence that advances as you scroll through it. */
export default function ProcessSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(PROCESS.length - 1, Math.floor(v * PROCESS.length)));
  });

  if (reduce) {
    return (
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
          <Heading center eyebrow="Our Capability" title="From design to lifecycle support" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-2xl border border-line bg-bgsoft p-6">
                <span className="font-display text-5xl font-bold text-blue/15">{p.step}</span>
                <h3 className="-mt-3 font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-slate">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-white" style={{ height: `${PROCESS.length * 80}vh` }}>
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 mesh opacity-60" />
        <div className="relative mx-auto grid w-full max-w-[90rem] gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="Our Capability"
              title="From design to lifecycle support"
              sub="A single accountable partner across the full project lifecycle — scroll to follow the journey."
            />
            <div className="mt-8 space-y-1">
              {PROCESS.map((p, idx) => (
                <div key={p.step} className="flex items-center gap-4 py-2">
                  <span className={cn("grid size-9 shrink-0 place-items-center rounded-full font-display text-sm font-bold transition-colors", idx === active ? "bg-blue text-white" : "bg-bgsoft text-slate")}>
                    {p.step}
                  </span>
                  <span className={cn("font-display text-lg font-bold transition-colors", idx === active ? "text-ink" : "text-slate/50")}>
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-blue to-blue-deep shadow-[0_18px_50px_rgba(27,67,196,0.18)]">
              <div className="absolute inset-0 blueprint opacity-50" />
              {PROCESS.map((p, idx) => (
                <motion.div
                  key={p.step}
                  initial={false}
                  animate={{ opacity: idx === active ? 1 : 0, y: idx === active ? 0 : 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-center p-8 text-white"
                  style={{ pointerEvents: idx === active ? "auto" : "none" }}
                >
                  <span className="font-display text-7xl font-bold text-white/15">{p.step}</span>
                  <h3 className="-mt-4 font-display text-3xl font-bold">{p.title}</h3>
                  <p className="mt-3 max-w-sm text-white/80">{p.text}</p>
                </motion.div>
              ))}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
                <motion.div className="h-full bg-yellow" animate={{ width: `${((active + 1) / PROCESS.length) * 100}%` }} transition={{ duration: 0.4 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
