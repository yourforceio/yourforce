import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  FlaskConical,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { lab } from "@/data/lab";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: lab.metadata.title,

  description: lab.metadata.description,

  alternates: {
    canonical: "/lab",
  },

  openGraph: {
    type: "website",
    url: "/lab",
    title: lab.metadata.title,
    description: lab.metadata.description,

    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
        alt: "YourForce Engineering Lab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: lab.metadata.title,
    description: lab.metadata.description,
    images: [site.image],
  },
};

export default function LabPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          bg-slate-950
          py-20
          text-white
          sm:py-24
          lg:py-28
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
          "
        >
          <div
            className="
              absolute
              -left-44
              -top-24
              h-[520px]
              w-[520px]
              rounded-full
              bg-blue-600/20
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              -right-44
              bottom-0
              h-[460px]
              w-[460px]
              rounded-full
              bg-cyan-500/10
              blur-[150px]
            "
          />

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
          <div
            className="
              relative
              z-10
              mx-auto
              max-w-5xl
              text-center
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/25
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-200
                backdrop-blur
              "
            >
              <FlaskConical
                aria-hidden="true"
                className="h-4 w-4"
              />

              {lab.hero.badge}
            </div>

            <h1
              className="
                mt-8
                text-4xl
                font-black
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              {lab.hero.heading.primary}

              <span
                className="
                  mt-1
                  block
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-300
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                {lab.hero.heading.accent}
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-base
                leading-8
                text-slate-300
                sm:text-lg
              "
            >
              {lab.hero.description}
            </p>

            {/* Descriptive chips — intentionally not interactive */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-2
              "
            >
              {lab.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-900/70
                    px-3.5
                    py-2
                    text-xs
                    font-semibold
                    text-slate-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Lab Experiences */}
      <section
        className="
          relative
          overflow-hidden
          bg-slate-50
          py-20
          sm:py-24
          lg:py-28
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <Container>
          <div className="relative">
            <div
              className="
                grid
                gap-8
                lg:grid-cols-[0.62fr_1.38fr]
                lg:items-end
                lg:gap-16
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-blue-600
                  "
                >
                  {lab.introduction.eyebrow}
                </p>

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    tracking-[-0.03em]
                    text-slate-950
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {lab.introduction.heading}
                </h2>
              </div>

              <p
                className="
                  max-w-3xl
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                {lab.introduction.description}
              </p>
            </div>

            <div
              className="
                mt-12
                grid
                gap-7
                md:grid-cols-2
              "
            >
              {lab.items.map((item) => {
                const Icon = item.icon;

                const available =
                  item.status === "available";

                return (
                  <article
                    key={item.slug}
                    className="
                      group
                      relative
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-slate-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-xl
                      hover:shadow-slate-950/5
                    "
                  >
                    {/* Preview */}
                    <div
                      className="
                        relative
                        aspect-[16/10]
                        overflow-hidden
                        border-b
                        border-slate-200
                        bg-slate-100
                      "
                    >
                      <Image
                        src={item.preview.src}
                        alt={item.preview.alt}
                        fill
                        sizes="
                          (max-width: 767px) 100vw,
                          (max-width: 1280px) 50vw,
                          600px
                        "
                        className="
                          object-cover
                          object-top
                          transition-transform
                          duration-500
                          group-hover:scale-[1.025]
                        "
                      />

                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-slate-950/20
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Lab number / featured */}
                      <div
                        className="
                          absolute
                          left-4
                          top-4
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            rounded-full
                            border
                            border-white/30
                            bg-slate-950/80
                            px-3
                            py-1.5
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.14em]
                            text-white
                            backdrop-blur
                          "
                        >
                          Lab {item.number}
                        </span>

                        {item.featured && (
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-blue-300/30
                              bg-blue-600/90
                              px-3
                              py-1.5
                              text-[10px]
                              font-black
                              uppercase
                              tracking-[0.12em]
                              text-white
                              backdrop-blur
                            "
                          >
                            <Sparkles
                              aria-hidden="true"
                              className="h-3 w-3"
                            />

                            Featured
                          </span>
                        )}
                      </div>

                      {/* Interactive preview — positioned away from image captions */}
                      <div
                        className="
                          absolute
                          right-4
                          top-4
                        "
                      >
                        <span
                          className="
                            rounded-full
                            border
                            border-white/30
                            bg-slate-950/80
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-white
                            shadow-sm
                            backdrop-blur
                          "
                        >
                          Interactive Preview
                        </span>
                      </div>

                      {!available && (
                        <div
                          className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-slate-950/55
                            backdrop-blur-[2px]
                          "
                        >
                          <span
                            className="
                              rounded-full
                              border
                              border-white/20
                              bg-white/10
                              px-4
                              py-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-[0.14em]
                              text-white
                              backdrop-blur
                            "
                          >
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                        p-6
                        sm:p-7
                        lg:p-8
                      "
                    >
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-5
                        "
                      >
                        <div>
                          <p
                            className="
                              text-xs
                              font-bold
                              uppercase
                              tracking-[0.16em]
                              text-blue-600
                            "
                          >
                            {item.eyebrow}
                          </p>

                          <h3
                            className="
                              mt-3
                              text-2xl
                              font-bold
                              tracking-tight
                              text-slate-950
                              sm:text-[1.7rem]
                            "
                          >
                            {item.title}
                          </h3>
                        </div>

                        <div
                          className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-blue-100
                            bg-blue-50
                            text-blue-600
                            transition-colors
                            group-hover:border-blue-200
                            group-hover:bg-blue-100
                          "
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </div>
                      </div>

                      <p
                        className="
                          mt-5
                          text-sm
                          leading-7
                          text-slate-600
                        "
                      >
                        {item.description}
                      </p>

                      {/* Demo metadata */}
                      <div
                        className="
                          mt-5
                          flex
                          flex-wrap
                          gap-x-5
                          gap-y-2
                          border-y
                          border-slate-100
                          py-4
                          text-xs
                          font-medium
                          text-slate-500
                        "
                      >
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                          "
                        >
                          <Clock3
                            aria-hidden="true"
                            className="
                              h-4
                              w-4
                              text-blue-600
                            "
                          />

                          {item.duration}
                        </span>

                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                          "
                        >
                          <CalendarDays
                            aria-hidden="true"
                            className="
                              h-4
                              w-4
                              text-blue-600
                            "
                          />

                          {item.added}
                        </span>
                      </div>

                      {/* Technologies */}
                      <div
                        className="
                          mt-5
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {item.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-1.5
                                text-[11px]
                                font-semibold
                                text-slate-600
                              "
                            >
                              {technology}
                            </span>
                          ),
                        )}
                      </div>

                      {/* Capabilities */}
                      <div
                        className="
                          mt-6
                          grid
                          gap-3
                          sm:grid-cols-2
                        "
                      >
                        {item.capabilities.map(
                          (capability) => (
                            <div
                              key={capability}
                              className="
                                flex
                                items-start
                                gap-2.5
                                text-sm
                                text-slate-600
                              "
                            >
                              <span
                                className="
                                  mt-0.5
                                  flex
                                  h-5
                                  w-5
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  bg-emerald-50
                                  text-emerald-600
                                "
                              >
                                <Check
                                  aria-hidden="true"
                                  className="h-3 w-3"
                                />
                              </span>

                              {capability}
                            </div>
                          ),
                        )}
                      </div>

                      {/* CTA */}
                      <div
                        className="
                          mt-auto
                          pt-8
                        "
                      >
                        {available ? (
                          <Link
                            href={item.href}
                            className="
                              inline-flex
                              items-center
                              gap-2
                              text-sm
                              font-bold
                              text-blue-600
                              transition-colors
                              hover:text-blue-500
                            "
                          >
                            Enter Lab

                            <ArrowRight
                              aria-hidden="true"
                              className="
                                h-4
                                w-4
                                transition-transform
                                group-hover:translate-x-1
                              "
                            />
                          </Link>
                        ) : (
                          <span
                            className="
                              inline-flex
                              items-center
                              rounded-full
                              bg-slate-100
                              px-3
                              py-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-[0.12em]
                              text-slate-500
                            "
                          >
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Roadmap */}
            <div
              className="
                mt-12
                flex
                flex-col
                gap-5
                rounded-3xl
                border
                border-blue-100
                bg-blue-50/60
                p-7
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-8
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-600
                    text-white
                  "
                >
                  <Sparkles
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-blue-600
                    "
                  >
                    {lab.roadmap.eyebrow}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold
                      text-slate-950
                    "
                  >
                    {lab.roadmap.heading}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-3xl
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    {lab.roadmap.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why the Lab */}
      <section
        className="
          bg-white
          py-20
          sm:py-24
          lg:py-28
        "
      >
        <Container>
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-20
            "
          >
            <div>
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-100
                  bg-blue-50
                  text-blue-600
                "
              >
                <FlaskConical
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </div>

              <p
                className="
                  mt-6
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-blue-600
                "
              >
                {lab.philosophy.eyebrow}
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-bold
                  tracking-[-0.03em]
                  text-slate-950
                  sm:text-4xl
                "
              >
                {lab.philosophy.heading}
              </h2>
            </div>

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              {lab.philosophy.paragraphs.map(
                (paragraph, index) => (
                  <article
                    key={paragraph}
                    className="
                      rounded-3xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-7
                      sm:p-8
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-black
                        tracking-[0.18em]
                        text-blue-600
                      "
                    >
                      0{index + 1}
                    </span>

                    <p
                      className="
                        mt-5
                        text-base
                        leading-8
                        text-slate-600
                      "
                    >
                      {paragraph}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="
          bg-white
          pb-20
          sm:pb-24
          lg:pb-28
        "
      >
        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-slate-950
              px-7
              py-12
              text-center
              text-white
              sm:px-10
              sm:py-14
              lg:px-16
              lg:py-16
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-24
                -top-16
                h-80
                w-80
                rounded-full
                bg-blue-600/20
                blur-[120px]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                bottom-0
                h-72
                w-72
                rounded-full
                bg-cyan-500/10
                blur-[120px]
              "
            />

            <div className="relative">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-blue-300
                "
              >
                Build With YourForce
              </p>

              <h2
                className="
                  mx-auto
                  mt-4
                  max-w-3xl
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                {lab.cta.heading}
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-base
                  leading-8
                  text-slate-300
                "
              >
                {lab.cta.description}
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  justify-center
                  gap-3
                  sm:flex-row
                "
              >
                <Link
                  href={lab.cta.primary.href}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-blue-500
                  "
                >
                  {lab.cta.primary.label}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>

                <Link
                  href={lab.cta.secondary.href}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-7
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    hover:-translate-y-0.5
                    hover:border-slate-600
                    hover:bg-slate-800
                  "
                >
                  {lab.cta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
