import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { dataSafety } from "@/data/security";
import { site } from "@/data/site";

const pageUrl = `${site.url.replace(/\/$/, "")}/security`;
const description = "How YourForce keeps the data in its software products safe: where it lives, how each business is kept separate, passwords, files, no tracking, and what we don't claim.";

export const metadata: Metadata = {
  title: "Data Safety",
  description,
  alternates: { canonical: pageUrl },
  openGraph: { type: "website", url: pageUrl, title: "Your data is safe with us | YourForce", description, images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce data safety" }] },
};

export default function SecurityPage() {
  return <LegalPage doc={dataSafety} navLabel="Data safety sections" />;
}
