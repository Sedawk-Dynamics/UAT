"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Heading } from "../section";
import Btn from "../brand-button";
import ProductCard from "../product-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATALOG, getFeatured } from "@/lib/products";

export default function FeaturedProducts() {
  const featured = getFeatured();
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? featured : featured.filter((p) => p.category === filter);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((p, i) => (
            <ProductCard key={p.slug} p={p} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Btn href="/products" variant="outline">View All Products <ArrowRight className="size-4" /></Btn>
        </div>
      </div>
    </section>
  );
}
