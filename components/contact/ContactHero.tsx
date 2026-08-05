import { CheckCircle2 } from "lucide-react";

import Container from "@/components/layout/Container";

import { contact } from "@/data/contact";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-white/10
        bg-slate-950
        pb-14
        pt-16
        text-white
        lg:pb-16
        lg:pt-20
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <span
            className="
              inline-flex
              items-center
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
            {contact.hero.badge}
          </span>

          <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {contact.hero.title}

            <span
              className="
                ml-2
                bg-gradient-to-r
                from-blue-400
                via-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {contact.hero.highlight}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {contact.hero.description}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {contact.hero.highlights.map((highlight) => (
              <li
                key={highlight}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="h-4 w-4 text-blue-400"
                />

                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
