import { WineCellarPage as View, wineCellarMetadata as meta } from "@/views/ServiceDetail";

const L = "sr";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
