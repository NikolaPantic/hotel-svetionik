import View, { roomsMetadata as meta } from "@/views/RoomsPage";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
