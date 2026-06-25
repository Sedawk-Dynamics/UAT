import Image from "next/image";
import { Phone, Send } from "lucide-react";
import AirflowField from "../airflow-field";
import Btn from "../brand-button";
import Reveal from "../reveal";
import { SITE } from "@/lib/site";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden py-16">
      <Image src="/img/products/centrifugal-blowers-hall.jpg" alt="" aria-hidden fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-blue-deep/85" />
      <div className="absolute inset-0 bg-blue-deep/40 mix-blend-multiply" />
      <div className="absolute inset-0 blueprint opacity-50" />
      <AirflowField className="opacity-40" />
      <div className="relative mx-auto max-w-[1760px] px-4 text-center sm:px-6">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-[clamp(1.7rem,4vw,2.5rem)] font-bold text-white">
            Have a requirement? Get an engineered solution.
          </h2>
          <p className="mt-4 text-white/80">
            Tell us your application, airflow and emission targets — our engineers will size the
            right system for you.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Btn href="/inquiry" magnetic><Send className="size-4" />Send an Inquiry</Btn>
            <Btn href={SITE.phoneHref} variant="ghost"><Phone className="size-4" />{SITE.phone}</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
