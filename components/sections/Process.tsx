import Container from "@/components/layout/Container";
import ProcessCard from "@/components/process/ProcessCard";

import { process } from "@/data/process";

export default function Process() {
  return (
    <section
      id="process"
      className="overflow-hidden bg-slate-50 py-20 lg:py-24"
    >
      <Container>
        {/* Section introduction */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            {process.badge}
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            {process.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {process.description}
          </p>
        </div>

        {/* Process roadmap */}
        <div className="relative mx-auto mt-16 max-w-7xl">
          {/* Desktop connector */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-7
              hidden
              h-px
              bg-gradient-to-r
              from-blue-200
              via-blue-500
              to-blue-200
              xl:block
            "
          />

          <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.items.map((step) => (
              <ProcessCard
                key={step.number}
                step={step}
                deliverableLabel={process.deliverableLabel}
              />
            ))}
          </div>
        </div>

        {/* Delivery principle */}
        <div
          className="
            mx-auto
            mt-14
            max-w-4xl
            rounded-2xl
            border
            border-blue-200
            bg-blue-50/70
            px-6
            py-5
            text-center
          "
        >
          <p className="text-sm font-semibold leading-7 text-slate-700">
            {process.principle}
          </p>
        </div>
      </Container>
    </section>
  );
}
