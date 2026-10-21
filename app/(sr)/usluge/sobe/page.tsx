import View, { roomsMetadata as meta } from "@/views/RoomsPage";

const L = "sr";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
