import type { NextConfig } from "next";

/** Stari engleski URL-ovi sa srpskim slugovima → novi engleski URL-ovi. */
const legacyEnglish: [string, string][] = [
  ["/en/o-nama", "/en/about-us"],
  ["/en/usluge", "/en/services"],
  ["/en/usluge/sobe", "/en/services/rooms"],
  ["/en/usluge/sobe/standardna-soba", "/en/services/rooms/standard-room"],
  ["/en/usluge/sobe/soba-sa-dodatnim-lezajem", "/en/services/rooms/room-with-extra-bed"],
  ["/en/usluge/sobe/superior-apartman-sa-djakuzijem", "/en/services/rooms/superior-apartment-with-jacuzzi"],
  ["/en/usluge/proslave", "/en/services/celebrations"],
  ["/en/usluge/restoran", "/en/services/restaurant"],
  ["/en/usluge/vinski-podrum", "/en/services/wine-cellar"],
  ["/en/usluge/brodska-marina", "/en/services/boat-marina"],
  ["/en/galerija", "/en/gallery"],
  ["/en/kontakt", "/en/contact"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    globalNotFound: true,
  },
  images: {
    // Samo WebP: brže prvo kodiranje i upola manje transformacija na Vercelu.
    formats: ["image/webp"],
    qualities: [60, 75],
    deviceSizes: [640, 828, 1080, 1440, 1920, 2560],
    imageSizes: [96, 256, 384],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [
      ...legacyEnglish.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Stranica "Vesti" nije imala sadržaj — trajno preusmeravamo na početnu.
      { source: "/vesti", destination: "/", permanent: true },
      { source: "/en/vesti", destination: "/en", permanent: true },
      { source: "/en/news", destination: "/en", permanent: true },
      // Stari Next i18n je posluživao i /sr prefiks.
      { source: "/sr", destination: "/", permanent: true },
      { source: "/sr/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
