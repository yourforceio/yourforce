import OpsPage, { opsMetadata } from "@/components/operations/OpsPage";
import { dataEntry } from "@/data/operations";

export const metadata = opsMetadata(dataEntry);

export default function Page() {
  return <OpsPage d={dataEntry} />;
}
