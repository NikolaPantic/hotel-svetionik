import View, { roomMetadata as meta } from "@/views/RoomPage";

const L = "sr";

export const metadata = meta(L, "standardRoom");

export default function Page() {
  return <View lang={L} room="standardRoom" />;
}
