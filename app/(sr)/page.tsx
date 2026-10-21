import View, { homeMetadata as meta } from "@/views/HomePage";

const L = "sr";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
