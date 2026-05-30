import AirflowField from "./airflow-field";
import BreadcrumbNav, { type Crumb } from "./breadcrumb-nav";

/** Inner-page hero band with the airflow signature and breadcrumbs. */
export default function PageHero({
  eyebrow,
  title,
  sub,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-blue-deep pb-14 pt-32 md:pt-36">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="absolute inset-0 mesh opacity-60" />
      <AirflowField className="opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {crumbs && (
          <div className="mb-4">
            <BreadcrumbNav items={crumbs} light />
          </div>
        )}
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow">
            <span className="h-px w-8 bg-yellow" />
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] text-white text-balance">
          {title}
        </h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-white/75">{sub}</p>}
      </div>
    </section>
  );
}
