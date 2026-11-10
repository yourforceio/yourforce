import { Search } from "lucide-react";

import ProductDiscoveryDemo from "@/components/lab/product-discovery/ProductDiscoveryDemo";
import LabDetailLayout, { labMetadata } from "@/components/lab/LabDetailLayout";

import { productDiscovery } from "@/data/product-discovery";

export const metadata = labMetadata(productDiscovery, "/lab/product-discovery", "YourForce Product Discovery Engineering Lab");

export default function Page() {
  return (
    <LabDetailLayout
      data={productDiscovery}
      icon={Search}
      aside={{ label: "Discovery features", items: ["Instant search", "Multi-select facets", "Relevance sorting", "Zero-result recovery"] }}
      demo={{ label: "Interactive experience", heading: "Explore product discovery", hint: "Search, combine facets, change sorting, trigger zero results and inspect product relevance." }}
      cta={{ label: "Search and discovery engineering", heading: "Improve how customers find products.", description: "YourForce engineers search, merchandising and product discovery designed around real customer journeys." }}
    >
      <ProductDiscoveryDemo />
    </LabDetailLayout>
  );
}
