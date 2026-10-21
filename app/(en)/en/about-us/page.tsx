import View, { aboutMetadata as meta } from "@/views/AboutPage";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
