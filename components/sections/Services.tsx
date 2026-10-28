import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileSpreadsheet,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ServiceCard from "@/components/ui/ServiceCard";

import {
  commerceHighlights,
  phpEngineering,
  services,
  specializedOperations,
  type OperationIcon,
} from "@/data/services";

export default function Services() {
  const [featuredService, ...supportingServices] =
    services.items;

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-24"
    >
      <Container>
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              {services.badge}
            </span>

            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              {services.heading}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            {services.description}
          </p>
        </div>

        {/* Two columns: commerce on the left, PHP on the right */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <CommerceColumn service={featuredService} />
          <PhpColumn />
        </div>

        {/* Supporting services */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {supportingServices.map((service, index) => {
            const isLastOddCard =
              supportingServices.length % 2 === 1 &&
              index === supportingServices.length - 1;

            return (
              <ServiceCard
                key={service.title}
                service={service}
                className={isLastOddCard ? "md:col-span-2" : ""}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

type CommerceService = (typeof services.items)[number];

function CommerceColumn({ service }: { service: CommerceService }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-blue-400/20 bg-slate-950 p-8 text-white shadow-xl shadow-slate-950/10 md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <ShoppingCart aria-hidden="true" className="h-7 w-7" />
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
          {service.eyebrow}
        </p>

        <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
          {service.title}
        </h3>

        <p className="mt-5 text-base leading-7 text-slate-300">
          {service.description}
        </p>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          What we deliver
        </p>

        <ul
          aria-label="What we deliver"
          className="mt-3 flex flex-wrap gap-2"
        >
          {commerceHighlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-sm text-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          Platform coverage
        </p>

        <ul className="mt-3 grid gap-3">
          {service.stack.map((item) => {
            const isPhpPlatform = /magento|woocommerce/i.test(item.name);

            return (
              <li
                key={item.name}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-100"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 text-blue-300">
                  <Check
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    strokeWidth={3}
                  />
                </span>
                <span className="flex-1">{item.name}</span>
                {isPhpPlatform && (
                  <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-300">
                    PHP
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-8">
          <Link
            href={service.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            {service.ctaLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function PhpColumn() {
  const { healthCheck } = phpEngineering;

  return (
    <article
      id="php"
      className="relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[2rem] border border-rose-400/20 bg-slate-950 p-8 text-white shadow-xl shadow-slate-950/10 md:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rose-500/15 blur-3xl"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-400/10 text-rose-300">
          <Wrench aria-hidden="true" className="h-7 w-7" />
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-rose-300">
          {phpEngineering.eyebrow}
        </p>

        <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
          {phpEngineering.title}
        </h3>

        <p className="mt-5 text-base leading-7 text-slate-300">
          {phpEngineering.description}
        </p>

        <ul
          aria-label="PHP engineering capabilities"
          className="mt-6 flex flex-wrap gap-2"
        >
          {phpEngineering.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
            >
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-rose-300">
          {healthCheck.eyebrow}
        </p>

        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {healthCheck.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-400/15 text-rose-300">
                <Check
                  aria-hidden="true"
                  className="h-3 w-3"
                  strokeWidth={3}
                />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-8">
          <Link
            href={healthCheck.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            {healthCheck.ctaLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>

          <Link
            href={phpEngineering.learnMoreHref}
            className="inline-flex items-center gap-2 font-bold text-rose-300 transition-colors hover:text-rose-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            {phpEngineering.learnMoreLabel}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

// Every OperationIcon key must have a theme; TypeScript errors if one is missing.
const operationThemes = {
  truck: {
    Icon: Truck,
    card: "border-amber-400/20 hover:border-amber-400/40",
    iconBox: "bg-amber-400/10 text-amber-300",
    eyebrow: "text-amber-300",
    link: "text-amber-300 hover:text-amber-200 focus-visible:ring-amber-300",
  },
  billing: {
    Icon: HeartPulse,
    card: "border-teal-400/20 hover:border-teal-400/40",
    iconBox: "bg-teal-400/10 text-teal-300",
    eyebrow: "text-teal-300",
    link: "text-teal-300 hover:text-teal-200 focus-visible:ring-teal-300",
  },
  dataEntry: {
    Icon: FileSpreadsheet,
    card: "border-sky-400/20 hover:border-sky-400/40",
    iconBox: "bg-sky-400/10 text-sky-300",
    eyebrow: "text-sky-300",
    link: "text-sky-300 hover:text-sky-200 focus-visible:ring-sky-300",
  },
  insurance: {
    Icon: ShieldCheck,
    card: "border-violet-400/20 hover:border-violet-400/40",
    iconBox: "bg-violet-400/10 text-violet-300",
    eyebrow: "text-violet-300",
    link: "text-violet-300 hover:text-violet-200 focus-visible:ring-violet-300",
  },
  school: {
    Icon: GraduationCap,
    card: "border-emerald-400/20 hover:border-emerald-400/40",
    iconBox: "bg-emerald-400/10 text-emerald-300",
    eyebrow: "text-emerald-300",
    link: "text-emerald-300 hover:text-emerald-200 focus-visible:ring-emerald-300",
  },
} as const satisfies Record<OperationIcon, unknown>;

export function SpecializedOperations() {
  const itemCount = specializedOperations.items.length;

  return (
    <section
      id="specialized-services"
      className="scroll-mt-24 bg-slate-950 py-24 text-white"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              {specializedOperations.badge}
            </span>

            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              {specializedOperations.heading}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            {specializedOperations.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {specializedOperations.items.map((service, index) => {
            const theme = operationThemes[service.icon];
            const { Icon } = theme;

            // With an odd number of cards, the last one spans the full row.
            const isLastOddCard =
              itemCount % 2 === 1 && index === itemCount - 1;

            return (
              <article
                key={service.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-1 hover:bg-slate-900 md:p-10 ${theme.card} ${
                  isLastOddCard ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBox}`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <p
                  className={`mt-8 text-sm font-bold uppercase tracking-[0.16em] ${theme.eyebrow}`}
                >
                  {service.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  {service.description}
                </p>

                <ul
                  aria-label={`${service.title} capabilities`}
                  className="mt-7 flex flex-wrap gap-2"
                >
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {(() => {
                  const linkClassName = `mt-auto inline-flex items-center gap-2 pt-9 font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${theme.link}`;

                  const linkContent = (
                    <>
                      {service.ctaLabel}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  );

                  return service.href.startsWith("/") ? (
                    <Link
                      href={service.href}
                      className={linkClassName}
                    >
                      {linkContent}
                    </Link>
                  ) : (
                    <a
                      href={service.href}
                      className={linkClassName}
                    >
                      {linkContent}
                    </a>
                  );
                })()}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
