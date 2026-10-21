import View, { homeMetadata as meta } from "@/views/HomePage";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
