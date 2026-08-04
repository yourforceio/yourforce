import Container from "@/components/layout/Container";
import ProcessCard from "@/components/process/ProcessCard";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-5 py-2 text-sm font-medium text-blue-700">
            {process.badge}
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            {process.heading}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            {process.description}
          </p>
        </div>

        <div className="mx-auto mt-28 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.items.map((step) => (
              <ProcessCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
