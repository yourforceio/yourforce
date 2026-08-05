"use client";

import { useState } from "react";
import {
  ChevronDown,
  Mail,
  MessageCircleQuestion,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { contact } from "@/data/contact";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="contact-faq"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#05081c]
        py-20
        text-white
        lg:py-24
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute -right-40 top-0 h-[320px] w-[320px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

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
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/30
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
              "
            >
              <MessageCircleQuestion
                aria-hidden="true"
                className="h-4 w-4"
              />

              FAQ
            </span>

            <h2 className="mt-7 text-4xl font-black tracking-tight text-white md:text-5xl">
              {contact.faq.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              {contact.faq.description}
            </p>
          </div>

          {/* Accordion */}
          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {contact.faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `contact-faq-panel-${index}`;
              const buttonId = `contact-faq-button-${index}`;

              return (
                <article
                  key={item.question}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "border-blue-500/30 bg-slate-900/85 shadow-lg shadow-blue-950/10"
                        : "border-slate-800 bg-slate-900/55 hover:border-slate-700 hover:bg-slate-900/70"
                    }
                  `}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        px-6
                        py-5
                        text-left
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-blue-400
                        sm:px-7
                        sm:py-6
                      "
                    >
                      <span
                        className={`
                          text-base
                          font-semibold
                          transition-colors
                          duration-200
                          sm:text-lg

                          ${
                            isOpen
                              ? "text-white"
                              : "text-slate-200 group-hover:text-blue-300"
                          }
                        `}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                              : "border-slate-700 bg-slate-950/60 text-slate-400 group-hover:border-blue-500/20 group-hover:text-blue-400"
                          }
                        `}
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`
                            h-4
                            w-4
                            transition-transform
                            duration-300

                            ${isOpen ? "rotate-180" : ""}
                          `}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-300
                      ease-out

                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-800 px-6 pb-6 pt-5 sm:px-7">
                        <p className="max-w-3xl leading-8 text-slate-400">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Additional question */}
          <div
            className="
              mx-auto
              mt-10
              flex
              max-w-4xl
              flex-col
              gap-5
              rounded-2xl
              border
              border-blue-500/20
              bg-blue-500/[0.06]
              px-6
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="font-semibold text-slate-200">
                Still have a question?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Send us your requirements and we’ll respond within one
                business day.
              </p>
            </div>

            <a
              href="mailto:hello@yourforce.io"
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                text-sm
                font-semibold
                text-blue-400
                transition-colors
                hover:text-blue-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
              "
            >
              <Mail aria-hidden="true" className="h-4 w-4" />

              hello@yourforce.io
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
