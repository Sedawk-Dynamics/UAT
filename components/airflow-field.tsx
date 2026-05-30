"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

const LINES = [
  { d: "M-50 90 C 240 30, 520 150, 850 70 S 1300 120, 1490 60", o: 0 },
  { d: "M-50 150 C 260 90, 560 210, 880 130 S 1320 170, 1490 120", o: -1.4 },
  { d: "M-50 210 C 220 150, 540 270, 900 190 S 1340 230, 1490 180", o: -2.8 },
  { d: "M-50 270 C 280 210, 600 330, 920 250 S 1360 290, 1490 240", o: -4.2 },
  { d: "M-50 330 C 240 270, 560 390, 940 310 S 1380 350, 1490 300", o: -5.6 },
];

/**
 * Brand signature — "make invisible air visible".
 * Flowing aerodynamic lines that drift, parallax on scroll, and bend toward
 * the cursor on desktop. Static under prefers-reduced-motion.
 */
export default function AirflowField({
  className,
  color = "rgba(255,255,255,0.5)",
  accent = "rgba(255,193,7,0.65)",
  interactive = true,
}: {
  className?: string;
  color?: string;
  accent?: string;
  interactive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.6 });
  const by = useSpring(my, { stiffness: 120, damping: 22, mass: 0.6 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !interactive) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 40);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 26);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <motion.div style={reduce ? undefined : { x: bx, y: by }} className="absolute inset-0">
        <motion.svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          style={reduce ? undefined : { y: parY }}
        >
          {LINES.map((l, i) => (
            <path
              key={i}
              d={l.d}
              fill="none"
              stroke={i === 2 ? accent : color}
              strokeWidth={i === 2 ? 2.2 : 1.4}
              strokeLinecap="round"
              className={reduce ? undefined : "airflow-path"}
              style={reduce ? undefined : { animationDelay: `${l.o}s` }}
            />
          ))}
        </motion.svg>
      </motion.div>
    </div>
  );
}
