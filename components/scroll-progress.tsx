"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin yellow scroll-progress bar pinned to the top. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-yellow"
      aria-hidden="true"
    />
  );
}
