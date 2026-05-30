import Image from "next/image";
import { Heading } from "../section";
import Reveal from "../reveal";
import AirflowField from "../airflow-field";
import LucideIcon from "../lucide-icon";
import { PILLARS } from "@/lib/site";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* feature photo backdrop with a deep-blue brand scrim */}
      <Image src="/img/feature.jpg" alt="" aria-hidden fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-blue-deep/92" />
      <div className="absolute inset-0 bg-blue-deep/40 mix-blend-multiply" />
      <div className="absolute inset-0 blueprint opacity-40" />
      <AirflowField className="opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Heading
          center
          light
          eyebrow="Why Choose Us"
          title="Engineered advantages that lower your cost of ownership"
          sub="Six reasons leading plants across India trust UAT for critical air systems."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="grid size-12 place-items-center rounded-xl bg-yellow text-ink">
                  <LucideIcon name={p.icon} className="size-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
