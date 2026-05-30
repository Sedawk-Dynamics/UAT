import Btn from "@/components/brand-button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-white px-4 pt-24 text-center">
      <div className="max-w-lg">
        <h1 className="font-display text-7xl font-bold text-blue">404</h1>
        <p className="mt-3 text-slate">We couldn&apos;t find that page.</p>
        <Btn href="/" className="mt-6">Back to Home</Btn>
      </div>
    </section>
  );
}
