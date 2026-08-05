import type { Metadata } from "next";

import StructuredData from "@/components/seo/StructuredData";

import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";

import { site } from "@/data/site";

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
    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
        alt: `${site.name} — Enterprise Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.image,
        alt: `${site.name} — Enterprise Software Development`,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />

      <main>
        <Hero />

        <Portfolio />

        <Services />

        <About />

        <WhyChoose />

        <Process />

        <CTA />
      </main>
    </>
  );
}
