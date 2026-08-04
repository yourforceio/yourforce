import type { ProcessStep } from "@/types/process";

type Props = {
    step: ProcessStep;
};

export default function ProcessCard({ step }: Props) {
    const Icon = step.icon;

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white px-9 py-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">

            {/* Top Accent */}
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

            {/* Large Number */}
            <span className="absolute right-8 top-8 text-7xl font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                {step.number}
            </span>

            {/* Step Label */}
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-slate-500">
                STEP {step.number}
            </span>

            {/* Icon */}
            <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={24} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {step.title}
            </h3>

            {/* Description */}
            <p className="mt-4 flex-1 leading-8 text-slate-600">
                {step.description}
            </p>
        </article>
    );
}