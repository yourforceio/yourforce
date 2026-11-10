import { ListFilter } from "lucide-react";

import AgenticGuidedShoppingDemo from "@/components/lab/agentic-guided-shopping/AgenticGuidedShoppingDemo";
import LabDetailLayout, { labMetadata } from "@/components/lab/LabDetailLayout";

import { agenticGuidedShopping } from "@/data/agentic-guided-shopping";

export const metadata = labMetadata(agenticGuidedShopping, "/lab/agentic-guided-shopping", "YourForce Conversational Product Finder Lab");

export default function Page() {
  return (
    <LabDetailLayout
      data={agenticGuidedShopping}
      icon={ListFilter}
      aside={{ label: "Prototype capabilities", items: ["Visible request signals", "Deterministic catalog matching", "Match explanations", "Simulated pickup context"] }}
      demo={{ label: "Interactive prototype", heading: "Try the product-finding flow", hint: "Describe what you need, inspect the detected signals and matching rules, then check simulated availability." }}
      cta={{ label: "Conversational commerce", heading: "Turn product discovery into a conversation.", description: "YourForce helps businesses connect commerce platforms, search, inventory and fulfilment with responsible decision-support experiences." }}
    >
      <AgenticGuidedShoppingDemo />
    </LabDetailLayout>
  );
}
