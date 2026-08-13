import { PackageCheck } from "lucide-react";

import Container from "@/components/layout/Container";

import { process } from "@/data/process";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="overflow-hidden bg-white py-20 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            {process.badge}
          </span>

          <h2
            id="process-heading"
            className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl"
          >
            {process.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {process.description}
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-7xl">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 xl:block"
          />

          <div className="relative grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
            {process.items.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="relative">
                  <div className="flex items-center gap-4 xl:block">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-white text-sm font-black text-blue-600 shadow-sm">
                      {step.number}
                    </div>

                    <div className="xl:mt-8">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-5 flex items-start gap-3 border-t border-slate-200 pt-5">
                    <PackageCheck
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                    />

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        {process.deliverableLabel}
                      </p>

                      <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-700">
                        {step.deliverable}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-sm font-semibold leading-7 text-slate-600">
          {process.principle}
        </p>
      </Container>
    </section>
  );
}
