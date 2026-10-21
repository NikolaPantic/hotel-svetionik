import View, { menuMetadata as meta } from "@/views/MenuPage";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
