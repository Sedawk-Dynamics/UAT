import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

/**
 * Brand image frame: next/image (object-cover) in a fixed aspect ratio, with an
 * optional cohesive blue duotone/scrim so mixed source photos feel on-brand.
 */
export default function Media({
  src,
  alt,
  ratio = 4 / 3,
  className,
  imgClassName,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  duotone = false,
  scrim = false,
  zoom = false,
}: {
  src: string;
  alt: string;
  ratio?: number;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** subtle blue multiply wash to unify mismatched photos */
  duotone?: boolean;
  /** bottom-up dark gradient for caption legibility */
  scrim?: boolean;
  /** scale image on group-hover (wrap target in a `group`) */
  zoom?: boolean;
}) {
  return (
    <AspectRatio ratio={ratio} className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", zoom && "transition-transform duration-500 group-hover:scale-110", imgClassName)}
      />
      {duotone && <div className="pointer-events-none absolute inset-0 bg-blue/25 mix-blend-multiply" />}
      {scrim && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-deep/75 via-blue-deep/10 to-transparent" />}
    </AspectRatio>
  );
}
