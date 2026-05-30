import { Wind } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Clearly-labelled image placeholder. Swap with <Image> from next/image and a
 * real photo under /public when assets are available — the label marks the spot.
 */
export default function ImagePlaceholder({
  label,
  className,
  light = false,
}: {
  label: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} (image placeholder)`}
      className={cn(
        "relative overflow-hidden",
        light ? "bg-bgsoft" : "bg-gradient-to-br from-blue via-blue to-blue-deep",
        className
      )}
    >
      <div className={cn("absolute inset-0", light ? "blueprint-ink" : "blueprint")} />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <Wind className={cn("mb-2 size-9", light ? "text-blue/40" : "text-white/50")} strokeWidth={1.5} />
        <span className={cn("text-[11px] font-semibold uppercase tracking-wider", light ? "text-slate" : "text-white/85")}>
          {label}
        </span>
        <span className={cn("mt-1 text-[9px]", light ? "text-slate/60" : "text-white/50")}>
          Image placeholder — swap with photo
        </span>
      </div>
    </div>
  );
}
