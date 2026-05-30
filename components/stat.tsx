"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/** Count-up number that animates when it enters the viewport. */
export default function Stat({
  value,
  suffix = "",
  label,
  plain = false,
  duration = 1700,
}: {
  value: number;
  suffix?: string;
  label: string;
  plain?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  const formatted = plain ? String(display) : display.toLocaleString("en-IN");

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-yellow text-[clamp(2.25rem,5vw,3.25rem)] leading-none tracking-tight">
        {formatted}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-white/80">{label}</div>
    </div>
  );
}
