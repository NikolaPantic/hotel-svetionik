import View, { roomMetadata as meta } from "@/views/RoomPage";

const L = "en";

export const metadata = meta(L, "extraBedRoom");

export default function Page() {
  return <View lang={L} room="extraBedRoom" />;
}
