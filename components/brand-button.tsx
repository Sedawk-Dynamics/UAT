"use client";

import Link from "next/link";
import { forwardRef, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 select-none will-change-transform focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue/40 disabled:opacity-60 disabled:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-yellow text-ink hover:bg-yellow-deep shadow-[0_8px_24px_rgba(245,158,11,0.28)]",
        blue: "bg-blue text-white hover:bg-blue-deep",
        outline: "border-2 border-blue text-blue hover:bg-blue hover:text-white",
        ghost: "border-2 border-white/40 text-white hover:bg-white hover:text-blue",
        soft: "border border-line bg-bgsoft text-blue hover:border-blue hover:bg-blue hover:text-white",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

type Variant = NonNullable<VariantProps<typeof btn>["variant"]>;

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();
  return (
    <motion.span
      ref={ref}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * 0.25,
          y: (e.clientY - (r.top + r.height / 2)) * 0.35,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.4 }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  );
}

interface Common {
  variant?: Variant;
  magnetic?: boolean;
  className?: string;
  children: React.ReactNode;
}
type BtnProps = Common & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = Common & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type Props = BtnProps | AnchorProps;

const Btn = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(function Btn(
  { variant = "primary", magnetic, className, children, ...rest },
  ref
) {
  const cls = cn(btn({ variant }), className);
  let node: React.ReactNode;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    node = href.startsWith("/") ? (
      <Link href={href} className={cls} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorRest}>
        {children}
      </Link>
    ) : (
      <a href={href} className={cls} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorRest}>
        {children}
      </a>
    );
  } else {
    node = (
      <button className={cls} ref={ref as React.Ref<HTMLButtonElement>} {...(rest as BtnProps)}>
        {children}
      </button>
    );
  }

  return magnetic ? <Magnetic>{node}</Magnetic> : node;
});

export default Btn;
