import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { refundPolicy } from "@/data/refunds";
import { site } from "@/data/site";

const pageUrl = `${site.url.replace(/\/$/, "")}/refunds`;

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "When you can get your money back for a YourForce software subscription, and how.",
  alternates: { canonical: pageUrl },
  openGraph: { type: "website", url: pageUrl, title: "Refund Policy | YourForce", description: "When you can get your money back for a YourForce software subscription, and how.", images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce Refund Policy" }] },
};

export default function Page() {
  return <LegalPage doc={refundPolicy} navLabel="Refund Policy sections" />;
}
