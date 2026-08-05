import type { Metadata } from "next";

import Container from "@/components/layout/Container";

import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactNextSteps from "@/components/contact/ContactNextSteps";
import FAQ from "@/components/contact/FAQ";

import { contact } from "@/data/contact";
import { site } from "@/data/site";

type ContactPageProps = {
  searchParams: Promise<{
    service?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact YourForce to discuss commerce platform engineering, headless storefronts, modernization, integrations, and enterprise software.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    url: "/contact",
    siteName: site.name,
    title: `Contact | ${site.name}`,

    description:
      "Tell YourForce about your commerce or software project and receive a response within one business day.",

    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
        alt: `Contact ${site.name}`,
      },
    ],
  },
};

function resolveInitialService(
  service?: string | string[],
): string {
  const requestedService = Array.isArray(service)
    ? service[0]
    : service;

  if (!requestedService) {
    return "";
  }

  const serviceField = contact.form.fields.find(
    (field) => field.name === "service",
  );

  const selectedOption = serviceField?.options?.find(
    (option) => option.slug === requestedService,
  );

  return selectedOption?.value ?? "";
}

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;

  const initialService = resolveInitialService(
    params.service,
  );

  return (
    <main className="bg-slate-950">
      {/* Contact hero */}
      <ContactHero />

      {/* Form and contact information */}
      <section
        className="
          relative
          overflow-hidden
          bg-slate-950
          py-12
          lg:py-16
        "
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="absolute -right-48 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

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
          <div
            className="
              relative
              grid
              items-start
              gap-10
              lg:grid-cols-[1.12fr_0.88fr]
              lg:gap-12
            "
          >
            <ContactForm initialService={initialService} />

            <ContactInfo />
          </div>
        </Container>
      </section>

      {/* Enquiry process */}
      <ContactNextSteps />

      {/* Frequently asked questions */}
      <FAQ />
    </main>
  );
}
