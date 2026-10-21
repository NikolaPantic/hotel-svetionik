import View, { bookingMetadata as meta } from "@/views/BookingPage";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
