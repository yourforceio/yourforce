import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Braces,
  CheckCircle2,
  FlaskConical,
} from "lucide-react";

import Container from "@/components/layout/Container";

import HeadlessCommerceDemo from "@/components/lab/headless-commerce/HeadlessCommerceDemo";

import { headlessCommerce } from "@/data/headless-commerce";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title:
    headlessCommerce.metadata.title,

  description:
    headlessCommerce.metadata.description,

  alternates: {
    canonical:
      "/lab/headless-commerce",
  },

  openGraph: {
    type:
      "website",

    url:
      "/lab/headless-commerce",

    title:
      headlessCommerce.metadata.title,

    description:
      headlessCommerce.metadata.description,

    images: [
      {
        url:
          site.image,

        width:
          1200,

        height:
          630,

        alt:
          "YourForce Headless Commerce Engineering Lab",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      headlessCommerce.metadata.title,

    description:
      headlessCommerce.metadata.description,

    images: [
      site.image,
    ],
  },
};

export default function HeadlessCommerceLabPage() {
  return (
    <main>
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          bg-slate-950
          py-16
          text-white
          sm:py-20
          lg:py-24
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="
              absolute
              -left-40
              top-0
              h-[420px]
              w-[420px]
              rounded-full
              bg-blue-600/20
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              -right-40
              bottom-0
              h-[400px]
              w-[400px]
              rounded-full
              bg-cyan-500/10
              blur-[140px]
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
          <div className="relative z-10">
            <Link
              href="/lab"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-slate-400
                transition-colors
                hover:text-white
              "
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4"
              />

              Engineering Lab
            </Link>

            <div
              className="
                mt-10
                grid
                gap-10
                lg:grid-cols-[1fr_0.55fr]
                lg:items-end
                lg:gap-16
              "
            >
              <div>
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
                  "
                >
                  <FlaskConical
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  Lab {headlessCommerce.lab.number}
                  {" • "}
                  {headlessCommerce.lab.eyebrow}
                </div>

                <h1
                  className="
                    mt-7
                    max-w-4xl
                    text-4xl
                    font-black
                    tracking-[-0.04em]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  {headlessCommerce.lab.title}
                </h1>

                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-300
                  "
                >
                  {headlessCommerce.lab.description}
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/70
                  p-6
                  backdrop-blur
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-blue-300
                  "
                >
                  Lab Environment
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    "Simulated product data",
                    "Interactive storefront",
                    "No live payment processing",
                    "No client implementation",
                  ].map(
                    (item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-slate-300
                        "
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-cyan-400
                          "
                        />

                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="
          relative
          overflow-hidden
          bg-slate-100
          py-12
          sm:py-16
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
                mb-6
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-end
                sm:justify-between
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
                  Interactive Experience
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-slate-950
                    sm:text-3xl
                  "
                >
                  Try the storefront
                </h2>
              </div>

              <p
                className="
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Browse products, open a product,
                select a variant, add items to
                cart, and change quantities.
              </p>
            </div>

            <HeadlessCommerceDemo />
          </div>
        </Container>
      </section>

      <section
        className="
          bg-white
          py-20
          sm:py-24
        "
      >
        <Container>
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.65fr_1.35fr]
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
                <Braces
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </div>

              <h2
                className="
                  mt-6
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                "
              >
                {
                  headlessCommerce
                    .architecture
                    .heading
                }
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                {
                  headlessCommerce
                    .architecture
                    .description
                }
              </p>
            </div>

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              {headlessCommerce
                .architecture
                .items.map(
                  (
                    item,
                    index,
                  ) => (
                    <article
                      key={
                        item.title
                      }
                      className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-7
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-black
                          tracking-[0.18em]
                          text-blue-600
                        "
                      >
                        0
                        {index +
                          1}
                      </p>

                      <h3
                        className="
                          mt-4
                          text-xl
                          font-bold
                          text-slate-950
                        "
                      >
                        {
                          item.title
                        }
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-7
                          text-slate-600
                        "
                      >
                        {
                          item.description
                        }
                      </p>
                    </article>
                  ),
                )}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="
          bg-white
          pb-20
          sm:pb-24
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
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-20
                top-0
                h-72
                w-72
                rounded-full
                bg-blue-600/20
                blur-[110px]
              "
            />

            <div className="relative">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-300
                "
              >
                From Prototype to Production
              </p>

              <h2
                className="
                  mx-auto
                  mt-4
                  max-w-3xl
                  text-3xl
                  font-bold
                  tracking-tight
                  sm:text-4xl
                "
              >
                Building a similar commerce experience?
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
                YourForce.io designs and engineers
                scalable storefronts, integrations,
                platform modernization, and digital
                commerce experiences.
              </p>

              <Link
                href="/contact"
                className="
                  mt-8
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
                Discuss Your Project

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
