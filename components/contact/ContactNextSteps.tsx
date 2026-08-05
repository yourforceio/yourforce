import {
  ArrowRight,
  Clock3,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { contact } from "@/data/contact";

export default function ContactNextSteps() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-slate-950
        pb-16
        pt-14
        text-white
        lg:pb-20
        lg:pt-16
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <Container>
        <div className="relative">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              {
                contact.info.nextSteps
                  .eyebrow
              }
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              {contact.info.nextSteps.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              A straightforward process that
              turns your initial enquiry into a
              clear and practical direction.
            </p>
          </div>

          {/* Steps */}
          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {contact.info.nextSteps.items.map(
              (step, index) => (
                <li
                  key={step.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/65
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/30
                    hover:bg-slate-900/85
                    hover:shadow-xl
                    hover:shadow-blue-950/10
                  "
                >
                  <div className="pointer-events-none absolute -right-10 -top-12 text-[110px] font-black leading-none text-white/[0.025]">
                    {step.number}
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-blue-500/30
                          bg-blue-500/10
                          text-xs
                          font-black
                          text-blue-400
                        "
                      >
                        {step.number}
                      </span>

                      {index <
                        contact.info
                          .nextSteps.items
                          .length -
                          1 && (
                        <ArrowRight
                          aria-hidden="true"
                          className="hidden h-5 w-5 text-slate-700 lg:block"
                        />
                      )}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ol>

          {/* Response time */}
          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-3xl
              flex-col
              gap-4
              rounded-2xl
              border
              border-emerald-500/20
              bg-emerald-500/[0.06]
              p-5
              sm:flex-row
              sm:items-center
              sm:justify-center
            "
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
              <Clock3
                aria-hidden="true"
                className="h-5 w-5 text-emerald-400"
              />
            </span>

            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                {
                  contact.info.response
                    .label
                }
              </p>

              <p className="mt-1 font-semibold leading-6 text-slate-200">
                {
                  contact.info.response
                    .text
                }
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
