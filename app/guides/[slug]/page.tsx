import type { Metadata } from "next";
import { notFound } from "next/navigation";

import GuidePage from "@/components/guides/GuidePage";
import { guides } from "@/data/guides";
import { site } from "@/data/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  if (!g) return {};
  const url = `${site.url}/guides/${g.slug}`;
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: g.title, description: g.description, images: [{ url: site.image, width: 1200, height: 630, alt: g.title }] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  if (!g) notFound();
  return <GuidePage guide={g} />;
}
