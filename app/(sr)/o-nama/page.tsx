import View, { aboutMetadata as meta } from "@/views/AboutPage";

const L = "sr";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
