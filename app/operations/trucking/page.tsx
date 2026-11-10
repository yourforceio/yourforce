import OpsPage, { opsMetadata } from "@/components/operations/OpsPage";
import { trucking } from "@/data/operations";

export const metadata = opsMetadata(trucking);

export default function Page() {
  return <OpsPage d={trucking} />;
}
