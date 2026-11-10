import OpsPage, { opsMetadata } from "@/components/operations/OpsPage";
import { billing } from "@/data/operations";

export const metadata = opsMetadata(billing);

export default function Page() {
  return <OpsPage d={billing} />;
}
