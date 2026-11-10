import type { Metadata } from "next";
import { CalendarClock, Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
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
  const { faq, hero } = contact;

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-6 pb-12 pt-14">
          <p className="yf-label text-mist">{hero.badge}</p>
          <h1 className="mt-5 font-display text-[clamp(38px,5vw,68px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {hero.title} {hero.highlight}
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-5 max-w-[640px] text-[18px] leading-relaxed text-mist">
            Book a 30-minute call, message us on WhatsApp, or send a message below. A real person reads every message and replies within one working day.
          </p>
        </div>
      </section>

      {/* Form + ways to reach us */}
      <section id="form" className="mx-auto grid max-w-[1240px] scroll-mt-24 items-start gap-6 px-6 pb-[88px] pt-10 lg:grid-cols-[1.3fr_0.7fr]">
        <ContactForm initialService={initialService} />

        <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
          <div className="rounded-[28px] bg-ink p-7 text-paper">
            <CalendarClock aria-hidden className="h-7 w-7 text-gold" strokeWidth={1.9} />
            <h2 className="mt-4 font-display text-[26px] font-extrabold leading-tight">Prefer to talk?</h2>
            <p className="mt-2 text-[15px] text-mist">Book 30 minutes with the founder, at a time that suits you in your own time zone. Best for commerce engineering and operations support.</p>
            <a href={site.bookCall} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-gold px-6 py-[14px] font-bold text-ink hover:bg-[#f7c561]">
              Book a call
            </a>
          </div>

          <div className="rounded-[28px] border border-line bg-white p-7">
            <ul className="flex flex-col gap-4 text-[15px]">
              <li className="flex items-start gap-3">
                <Mail aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
                <span>
                  <a href="mailto:hello@yourforce.io" className="font-bold hover:underline">hello@yourforce.io</a>
                  <span className="block text-muted">We reply within one working day.</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
                <span>
                  <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">WhatsApp {site.whatsapp.display}</a>
                  <span className="block text-muted">Quickest for questions about our products.</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
                <span>
                  <span className="font-bold">Lahore, Pakistan</span>
                  <span className="block text-muted">Remote-first: we work with teams wherever they are.</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
                <span>
                  <span className="font-bold">In your time zone</span>
                  <span className="block text-muted">Calls and replies are planned around your working day.</span>
                </span>
              </li>
            </ul>
            <a href="https://www.linkedin.com/company/yourforce-io/" className="mt-6 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-4 py-2.5 text-sm font-bold hover:bg-ink hover:text-paper">
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
