import View, { contactMetadata as meta } from "@/views/ContactPage";

const L = "sr";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
