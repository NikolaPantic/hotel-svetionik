import View, { bookingMetadata as meta } from "@/views/BookingPage";

const L = "sr";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
