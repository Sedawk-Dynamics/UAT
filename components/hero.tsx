"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import AirflowField from "./airflow-field";
import Btn from "./brand-button";
import { HERO_SLIDES } from "@/lib/site";
import { cn } from "@/lib/utils";

const AUTOPLAY = 6000;

export default function Hero() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((idx: number) => {
    setSelected((idx + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance. The timer is keyed on `selected`, so it resets whenever the
  // slide changes (e.g. a dot click) and each slide gets a full interval.
  useEffect(() => {
    if (reduce || paused) return;
    const t = window.setTimeout(() => go(selected + 1), AUTOPLAY);
    return () => window.clearTimeout(t);
  }, [selected, paused, reduce, go]);

  return (
    <section
      className="relative flex min-h-[92vh] w-screen mx-[calc(50%-50vw)] items-center overflow-hidden bg-blue-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Crossfading full-cover Ken-Burns slides. Stacked (not a horizontal
          track), so each image always fills the hero edge-to-edge — no carousel
          measurement, no sliver of the next slide, no gap on the right. */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, i) => {
          const active = selected === i;
          return (
            <motion.div
              key={i}
              aria-hidden={!active}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.04 }}
                animate={reduce ? { scale: 1.04 } : { scale: active ? 1.12 : 1.04 }}
                transition={{ duration: AUTOPLAY / 1000 + 2, ease: "linear" }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
              {/* left→right blue scrim for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/95 via-blue-deep/80 to-blue-deep/40" />
              <div className="absolute inset-0 bg-blue-deep/20 mix-blend-multiply" />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="absolute inset-0 mesh opacity-50" />
      <Image
        src="/img/slider/hero-geo.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-25 mix-blend-screen"
      />
      <AirflowField className="opacity-70" />

      {/* Foreground copy (crossfades with the active slide) */}
      <div className="relative mx-auto w-full max-w-[1760px] px-4 pb-24 pt-28 sm:px-6">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`kick-${selected}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow"
            >
              <span className="size-1.5 rounded-full bg-yellow" />
              {HERO_SLIDES[selected].kicker}
            </motion.div>
          </AnimatePresence>

          <h1 className="font-display text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.04] text-white">
            <AnimatePresence mode="wait">
              <motion.span key={`title-${selected}`} className="inline-block">
                {HERO_SLIDES[selected].title.split(" ").map((word, wi) => (
                  <motion.span
                    key={`${selected}-${wi}`}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, filter: "blur(8px)" }}
                    animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.06 * wi, ease: [0.2, 0.7, 0.2, 1] }}
                    className="mr-[0.28em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${selected}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl"
            >
              {HERO_SLIDES[selected].sub}
            </motion.p>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="/products" magnetic>Explore Products <ArrowRight className="size-4" /></Btn>
            <Btn href="/inquiry" variant="ghost">Get a Quote</Btn>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            {["30+ Years' Experience", "Established 1994", "1800+ Projects Delivered"].map((t) => (
              <span key={t} className="flex items-center gap-2"><Check className="size-4 text-yellow" />{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* progress dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => go(idx)}
            className="relative h-2 overflow-hidden rounded-full transition-all"
            style={{ width: idx === selected ? "2rem" : "0.5rem" }}
          >
            <span className={cn("absolute inset-0", idx === selected ? "bg-white/30" : "bg-white/40 hover:bg-white/70")} />
            {idx === selected && !reduce && !paused && (
              <motion.span
                key={`bar-${selected}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: AUTOPLAY / 1000, ease: "linear" }}
                className="absolute inset-0 origin-left bg-yellow"
              />
            )}
            {idx === selected && (reduce || paused) && <span className="absolute inset-0 bg-yellow" />}
          </button>
        ))}
      </div>
    </section>
  );
}
