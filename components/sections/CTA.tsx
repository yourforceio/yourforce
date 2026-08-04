import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { cta } from "@/data/cta";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#05081c] py-24">

            {/* Top Divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

                <div className="absolute right-[-180px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[140px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">

                <div className="mx-auto max-w-5xl text-center">

                    {/* Badge */}

                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
                        <span>{cta.badge.icon}</span>
                        <span>{cta.badge.text}</span>
                    </div>

                    {/* Heading */}

                    <h2 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                        {cta.title}

                        <span className="mt-2 block text-blue-500">
                            {cta.highlight}
                        </span>
                    </h2>

                    {/* Description */}

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
                        {cta.description}
                    </p>

                    {/* Highlights */}

                    <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">

                        {cta.highlights.map((item) => (
                            <div
                                key={item}
                                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10"
                            >
                                <CheckCircle2
                                    className="h-5 w-5 shrink-0 text-blue-500"
                                />

                                <span>{item}</span>

                            </div>
                        ))}

                    </div>

                    {/* Buttons */}

                    <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

                        {cta.buttons.map((button) => (
                            <Link
                                key={button.label}
                                href={button.href}
                                className={
                                    button.variant === "primary"
                                        ? "inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                                        : "inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/5"
                                }
                            >
                                {button.label}

                                {button.variant === "primary" && (
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                )}

                            </Link>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}