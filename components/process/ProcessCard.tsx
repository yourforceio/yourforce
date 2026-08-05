import { PackageCheck } from "lucide-react";

import type { ProcessStep } from "@/types/process";

type ProcessCardProps = {
  step: ProcessStep;
  deliverableLabel: string;
};

export default function ProcessCard({
  step,
  deliverableLabel,
}: ProcessCardProps) {
  const Icon = step.icon;

  return (
    <article className="group relative flex h-full flex-col items-center">
      {/* Step marker */}
      <div
        className="
          relative
          z-10
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-blue-200
          bg-white
          text-sm
          font-black
          text-blue-600
          shadow-sm
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:border-blue-500
          group-hover:bg-blue-600
          group-hover:text-white
          group-hover:shadow-lg
          group-hover:shadow-blue-600/20
        "
      >
        {step.number}
      </div>

      {/* Step content */}
      <div
        className="
          mt-7
          flex
          h-full
          w-full
          flex-col
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
          text-left
          shadow-sm
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:border-blue-200
          group-hover:shadow-xl
          group-hover:shadow-slate-900/10
        "
      >
        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-blue-50
            text-blue-600
            transition-all
            duration-300
            group-hover:bg-blue-600
            group-hover:text-white
          "
        >
          <Icon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </div>

        {/* Content */}
        <h3 className="mt-6 min-h-[58px] text-2xl font-bold leading-tight tracking-tight text-slate-950">
          {step.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {step.description}
        </p>

        {/* Deliverable */}
        <div className="mt-auto pt-7">
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <PackageCheck
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </span>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {deliverableLabel}
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  {step.deliverable}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
