import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-14 lg:gap-20 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div>
            {/* Badge */}
            <div className="w-full text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-700">
                {about.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              {about.heading}
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
              {about.description}
            </p>

            {/* Highlights */}
            <ul className="mt-10 space-y-4">
              {about.highlights.map((item) => (
                <li key={item} className="group flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110" />

                  <span className="text-[17px] text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-12">
              <Link href="/contact">
                <Button>Build With Us</Button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-6">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-slate-200 bg-white p-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />

                <div className="text-6xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {stat.value}
                </div>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
