import { Braces } from "lucide-react";

import HeadlessCommerceDemo from "@/components/lab/headless-commerce/HeadlessCommerceDemo";
import LabDetailLayout, { labMetadata } from "@/components/lab/LabDetailLayout";

import { headlessCommerce } from "@/data/headless-commerce";

export const metadata = labMetadata(headlessCommerce, "/lab/headless-commerce", "YourForce Headless Commerce Engineering Lab");

export default function Page() {
  return (
    <LabDetailLayout
      data={headlessCommerce}
      icon={Braces}
      aside={{ label: "Lab environment", items: ["Simulated product data", "Interactive storefront", "No live payment processing", "No client implementation"] }}
      demo={{ label: "Interactive experience", heading: "Try the storefront", hint: "Browse products, open a product, select a variant, add items to the cart and change quantities." }}
      cta={{ label: "From prototype to production", heading: "Building a similar commerce experience?", description: "YourForce designs and engineers storefronts, integrations, platform modernisation and digital commerce experiences." }}
    >
      <HeadlessCommerceDemo />
    </LabDetailLayout>
  );
}
