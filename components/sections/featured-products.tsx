"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Heading } from "../section";
import Btn from "../brand-button";
import ProductCard from "../product-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATALOG, getFeatured } from "@/lib/products";

export default function FeaturedProducts() {
  const reduce = useReducedMotion();
  const featured = getFeatured();
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? featured : featured.filter((p) => p.category === filter);

  // Repeat until the row is wide enough to scroll seamlessly, then duplicate
  // the whole strip once so the marquee can loop with a -50% translate.
  const filled = [...shown];
  while (filled.length && filled.length < 8) filled.push(...shown);
  const track = [...filled, ...filled];

  return (
    <section className="overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Heading eyebrow="Featured Products" title="Engineered for performance & compliance" />
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="flex-wrap">
              <TabsTrigger value="all">All</TabsTrigger>
              {CATALOG.map((c) => (
                <TabsTrigger key={c.slug} value={c.slug}>{c.short}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Moving product strip — full-bleed marquee that pauses on hover. */}
      {reduce ? (
        <div className="mx-auto mt-10 grid max-w-[1760px] gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {shown.map((p, i) => (
            <ProductCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="group relative mt-10 w-screen mx-[calc(50%-50vw)] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused]">
            {track.map((p, i) => (
              <div key={`${p.slug}-${i}`} className="mr-5 w-[78vw] shrink-0 sm:w-[340px]">
                <ProductCard p={p} index={0} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto mt-10 max-w-[1760px] px-4 text-center sm:px-6">
        <Btn href="/products" variant="outline">View All Products <ArrowRight className="size-4" /></Btn>
      </div>
    </section>
  );
}
