"use client";

import { useState } from "react";
import Media from "./media";
import { cn } from "@/lib/utils";

/** Product hero image with an optional thumbnail gallery (diagrams / variants). */
export default function ProductGallery({
  name,
  hero,
  gallery,
}: {
  name: string;
  hero: string;
  gallery?: string[];
}) {
  const images = [hero, ...(gallery ?? [])];
  const [active, setActive] = useState(0);

  return (
    <div>
      <Media
        key={images[active]}
        src={images[active]}
        alt={name}
        ratio={4 / 3}
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="rounded-3xl border border-line shadow-[0_18px_50px_rgba(27,67,196,0.18)]"
      />
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View ${name} image ${i + 1}`}
              aria-pressed={active === i}
              className={cn(
                "overflow-hidden rounded-xl border-2 transition-all",
                active === i ? "border-blue" : "border-line hover:border-blue/50"
              )}
            >
              <Media src={src} alt={`${name} — view ${i + 1}`} ratio={1} sizes="120px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
