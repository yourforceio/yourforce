import type { Metadata } from "next";

import StructuredData from "@/components/seo/StructuredData";
import HomeHero from "@/components/landing/HomeHero";
import {
  ContactBlock,
  Engineering,
  Founder,
  HealthCheck,
  Labs,
  Operations,
  Products,
  WhyBand,
} from "@/components/landing/HomeSections";

import { site } from "@/data/site";

const ogAlt = `${site.name}: commerce engineering for Salesforce, Shopify and Magento brands`;

export const metadata: Metadata = {
  title: {
    absolute: site.title,
  },

  description: site.description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.image, width: 1200, height: 630, alt: ogAlt }],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: site.image, alt: ogAlt }],
  },
};

/** Homepage (2026 redesign). Content lives in data/home.ts. */
export default function Home() {
  return (
    <>
      <StructuredData />

      <main className="bg-paper text-ink">
        <HomeHero />
        <Engineering />
        <HealthCheck />
        <WhyBand />
        <Labs />
        <Founder />
        <Products />
        <Operations />
        <ContactBlock />
      </main>
    </>
  );
}
