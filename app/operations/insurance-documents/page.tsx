import OpsPage, { opsMetadata } from "@/components/operations/OpsPage";
import { insurance } from "@/data/operations";

export const metadata = opsMetadata(insurance);

export default function Page() {
  return <OpsPage d={insurance} />;
}
