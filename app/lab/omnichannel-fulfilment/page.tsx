import { MapPinned } from "lucide-react";

import OmnichannelFulfilmentDemo from "@/components/lab/omnichannel-fulfilment/OmnichannelFulfilmentDemo";
import LabDetailLayout, { labMetadata } from "@/components/lab/LabDetailLayout";

import { omnichannelFulfilment } from "@/data/omnichannel-fulfilment";

export const metadata = labMetadata(omnichannelFulfilment, "/lab/omnichannel-fulfilment", "YourForce Omnichannel Fulfilment Engineering Lab");

export default function Page() {
  return (
    <LabDetailLayout
      data={omnichannelFulfilment}
      icon={MapPinned}
      aside={{ label: "Fulfilment features", items: ["Store discovery", "Store-level inventory", "Preferred store", "Pickup selection"] }}
      demo={{ label: "Interactive experience", heading: "Explore store pickup", hint: "Choose a product, search locations, inspect inventory, set a preferred store and select pickup in store." }}
      cta={{ label: "Omnichannel engineering", heading: "Connect digital commerce with physical stores.", description: "YourForce engineers store pickup, inventory, fulfilment, OMS integrations and omnichannel customer experiences." }}
    >
      <OmnichannelFulfilmentDemo />
    </LabDetailLayout>
  );
}
