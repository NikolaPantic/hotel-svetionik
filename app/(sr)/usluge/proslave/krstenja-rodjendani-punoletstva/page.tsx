import View, { landingMetadata as meta } from "@/views/LandingPage";

const L = "sr";

export const metadata = meta(L, "privateParties");

export default function Page() {
  return <View lang={L} page="privateParties" />;
}
