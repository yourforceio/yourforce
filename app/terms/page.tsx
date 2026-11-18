import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { termsOfService } from "@/data/terms";
import { site } from "@/data/site";

const pageUrl = `${site.url.replace(/\/$/, "")}/terms`;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for YourForce software subscriptions: trials, plans and payment, your data, cancelling and liability.",
  alternates: { canonical: pageUrl },
  openGraph: { type: "website", url: pageUrl, title: "Terms of Service | YourForce", description: "The terms for YourForce software subscriptions: trials, plans and payment, your data, cancelling and liability.", images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce Terms of Service" }] },
};

export default function Page() {
  return <LegalPage doc={termsOfService} navLabel="Terms of Service sections" />;
}
