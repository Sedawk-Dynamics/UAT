import Image from "next/image";
import AirflowField from "../airflow-field";
import Stat from "../stat";
import { STATS } from "@/lib/site";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden py-16">
      <Image src="/img/products/quality-slogan.jpg" alt="" aria-hidden fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-blue/90" />
      <div className="absolute inset-0 bg-blue mix-blend-multiply" />
      <div className="absolute inset-0 blueprint opacity-50" />
      <AirflowField className="opacity-30" color="rgba(255,255,255,0.35)" />
      <div className="relative mx-auto grid max-w-[1760px] grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-5">
        {STATS.map((s) => (
          <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} plain={s.plain} />
        ))}
      </div>
    </section>
  );
}
