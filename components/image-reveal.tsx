"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Fade + subtle zoom reveal for hero & editorial imagery. Reduced-motion → plain
 * fade. Uses opacity/scale (not clip-path) so the image always settles fully
 * visible even if the reveal is interrupted.
 */
export default function ImageReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
