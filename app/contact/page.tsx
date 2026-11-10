import type { Metadata } from "next";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

import ContactForm from "@/components/contact/ContactForm";

import { contact } from "@/data/contact";
import { site } from "@/data/site";

type ContactPageProps = {
  searchParams: Promise<{
    service?: string | string[];
  }>;
};

const description =
  "Contact YourForce about commerce engineering, our ready-made business software or US back-office support. A real person replies within one working day.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: site.name,
    title: `Contact | ${site.name}`,
    description,
    images: [{ url: site.image, width: 1200, height: 630, alt: `Contact ${site.name}` }],
  },
};

// The three ways in. Each pre-selects the closest option in the form and jumps to it.
const routes = [
  { who: "For commerce brands", title: "Commerce engineering", description: "Builds, upgrades, headless storefronts and integrations.", href: "?service=commerce-platform-engineering#form" },
  { who: "For growing businesses", title: "Ready-made software", description: "A demo of one of our ten products, with your own data.", href: "#form" },
  { who: "For US teams", title: "Operations support", description: "Trucking dispatch, medical billing, data entry or insurance paperwork.", href: "#form" },
];

function resolveInitialService(service?: string | string[]): string {
  const requestedService = Array.isArray(service) ? service[0] : service;
  if (!requestedService) return "";
  const serviceField = contact.form.fields.find((field) => field.name === "service");
  const selectedOption = serviceField?.options?.find((option) => option.slug === requestedService);
  return selectedOption?.value ?? "";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialService = resolveInitialService(params.service);
  const { info, faq, hero } = contact;

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <div className="bg-ink text-paper">
        <section className="mx-auto max-w-[1240px] px-6 pb-14 pt-16">
          <p className="yf-label text-mist">{hero.badge}</p>
          <h1 className="mt-5 font-display text-[clamp(40px,5.4vw,76px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {hero.title} {hero.highlight}
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[680px] text-[19px] leading-relaxed text-mist">{hero.description}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {hero.highlights.map((h) => (
              <li key={h} className="rounded-full border border-ink-line px-3.5 py-2 text-sm font-bold text-[#C9CED4]">{h}</li>
            ))}
          </ul>
        </section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 px-6 pb-16 md:grid-cols-3">
          {routes.map((r) => (
            <Link key={r.title} href={r.href} className="group flex flex-col gap-3 rounded-3xl border border-ink-line bg-ink-2 p-6 hover:border-[#4A525B]">
              <span className="yf-label normal-case tracking-normal text-mist">{r.who}</span>
              <span className="font-display text-[26px] font-extrabold leading-tight tracking-[-0.02em]">{r.title}</span>
              <span className="text-[15px] text-[#C9CED4]">{r.description}</span>
              <span className="mt-1 inline-flex self-start border-b-2 border-[#4A525B] font-bold group-hover:border-paper">Start here →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Form + details */}
      <section id="form" className="mx-auto grid max-w-[1240px] scroll-mt-24 items-start gap-6 px-6 py-[88px] lg:grid-cols-[1.25fr_0.75fr]">
        <ContactForm initialService={initialService} />

        <aside className="flex flex-col gap-4">
          <div className="rounded-[28px] bg-ink p-7 text-paper">
            <p className="yf-label text-mist">{info.nextSteps.eyebrow}</p>
            <ol className="mt-5 flex flex-col">
              {info.nextSteps.items.map((s) => (
                <li key={s.number} className="flex gap-4 border-t border-ink-line py-4 first:border-0 first:pt-0">
                  <span className="shrink-0 font-display text-[15px] font-extrabold text-gold">{s.number}</span>
                  <span>
                    <span className="block font-bold">{s.title}</span>
                    <span className="mt-1 block text-[15px] text-mist">{s.description}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[28px] border border-line bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{info.primaryContact.title}</p>
            <a href={info.primaryContact.href} className="mt-2 block break-all font-display text-2xl font-extrabold hover:underline">{info.primaryContact.value}</a>
            <p className="mt-2 text-[15px] text-muted">{info.primaryContact.description}</p>
            <dl className="mt-5 flex flex-col border-t border-line-soft">
              {info.details.map((d) => (
                <div key={d.title} className="border-b border-line-soft py-3.5 last:border-0">
                  <dt className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{d.title}</dt>
                  <dd className="mt-1 font-bold">{d.value}</dd>
                  <dd className="mt-0.5 text-sm text-muted">{d.description}</dd>
                </div>
              ))}
            </dl>
            <a href="https://www.linkedin.com/company/yourforce-io/" className="mt-3 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-4 py-2.5 text-sm font-bold hover:bg-ink hover:text-paper">
              <FaLinkedinIn aria-hidden className="h-3.5 w-3.5" /> YourForce on LinkedIn
            </a>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-[88px] lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-[clamp(30px,3.6vw,46px)] font-extrabold leading-none tracking-[-0.03em]">{faq.title}</h2>
            <p className="mt-3 text-muted">{faq.description}</p>
          </div>
          <div>
            {faq.items.map((q) => (
              <details key={q.question} className="group border-b border-line py-5 first:pt-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                  {q.question}
                  <span aria-hidden className="mt-1 text-2xl leading-none text-subtle transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[640px] text-base text-muted">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
