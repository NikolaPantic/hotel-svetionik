import { MarinaPage as View, marinaMetadata as meta } from "@/views/ServiceDetail";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
