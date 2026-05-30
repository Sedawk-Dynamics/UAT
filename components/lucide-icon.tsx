import {
  BadgeCheck, Zap, Infinity as InfinityIcon, Ruler, Factory, Clock,
  Mountain, Building2, Cog, FlaskConical, Shirt, Leaf, Hammer, Pyramid,
  Flame, SprayCan, Beaker, Filter, Fan, Wrench, Wind, Layers,
  type LucideIcon as LucideIconType,
} from "lucide-react";

const MAP: Record<string, LucideIconType> = {
  BadgeCheck, Zap, Infinity: InfinityIcon, Ruler, Factory, Clock,
  Mountain, Building2, Cog, FlaskConical, Shirt, Leaf, Hammer, Pyramid,
  Flame, SprayCan, Beaker, Filter, Fan, Wrench, Wind, Layers,
};

/** Render a lucide icon by string name (used by data-driven sections). */
export default function LucideIcon({
  name,
  className,
  strokeWidth = 1.9,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Wind;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
