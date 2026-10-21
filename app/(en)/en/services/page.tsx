import View, { servicesMetadata as meta } from "@/views/ServicesPage";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
