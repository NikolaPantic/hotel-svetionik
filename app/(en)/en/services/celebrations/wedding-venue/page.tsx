import View, { landingMetadata as meta } from "@/views/LandingPage";

const L = "en";

export const metadata = meta(L, "weddings");

export default function Page() {
  return <View lang={L} page="weddings" />;
}
