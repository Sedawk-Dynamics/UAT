import { cn } from "@/lib/utils";
import Reveal from "./reveal";

type Tone = "white" | "soft" | "blue" | "deep";

const tones: Record<Tone, string> = {
  white: "bg-white text-ink",
  soft: "bg-bgsoft text-ink",
  blue: "bg-blue text-white",
  deep: "bg-blue-deep text-white",
};

export function Section({
  children,
  className,
  id,
  tone = "white",
  py = "py-20 md:py-24",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: Tone;
  py?: string;
}) {
  return (
    <section id={id} className={cn(tones[tone], py, "relative", className)}>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  sub,
  center,
  light,
  index,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  light?: boolean;
  index?: string;
}) {
  return (
    <Reveal className={cn(center ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {index && (
        <div className={cn("mb-2 font-display text-6xl leading-none font-bold", light ? "text-white/10" : "text-blue/10")}>
          {index}
        </div>
      )}
      {eyebrow && (
        <div className={cn("mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]", light ? "text-yellow" : "text-blue")}>
          <span className={cn("h-px w-8", light ? "bg-yellow" : "bg-blue")} />
          {eyebrow}
        </div>
      )}
      <h2 className={cn("font-display font-bold leading-[1.05] text-balance text-[clamp(2rem,4vw,3.1rem)]", light ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {sub && <p className={cn("mt-4 text-base md:text-lg", light ? "text-white/75" : "text-slate")}>{sub}</p>}
    </Reveal>
  );
}
