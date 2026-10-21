import View, { galleryMetadata as meta } from "@/views/GalleryPage";

const L = "en";

export const metadata = meta(L);

export default function Page() {
  return <View lang={L} />;
}
