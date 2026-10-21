import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hotel Svetionik Obrenovac",
    short_name: "Svetionik",
    description: "Hotel, restoran i sale za proslave na obali Save u Obrenovcu.",
    start_url: "/",
    display: "browser",
    background_color: "#faf7f2",
    theme_color: "#5e1828",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
