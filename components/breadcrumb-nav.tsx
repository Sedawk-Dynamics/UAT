import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export default function BreadcrumbNav({ items, light }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className={cn("size-3.5", light ? "text-white/50" : "text-slate/50")} aria-hidden="true" />}
            {it.href ? (
              <Link href={it.href} className={cn(light ? "text-white/70 hover:text-yellow" : "text-slate hover:text-blue")}>
                {it.label}
              </Link>
            ) : (
              <span className={cn("font-medium", light ? "text-yellow" : "text-ink")} aria-current="page">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
