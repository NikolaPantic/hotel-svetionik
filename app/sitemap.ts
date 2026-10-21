import type { MetadataRoute } from "next";
import { galleryAlbums, img, roomGalleries } from "@/lib/images";
import { routes, type RouteKey } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

const priority: Partial<Record<RouteKey, number>> = {
  home: 1,
  rooms: 0.9,
  celebrations: 0.9,
  restaurant: 0.9,
  booking: 0.8,
  contact: 0.8,
};

const images: Partial<Record<RouteKey, string[]>> = {
  home: [img.hotelExterior.src.src, img.restTerrace.src.src, img.superiorWide.src.src],
  standardRoom: roomGalleries.standardRoom.slice(0, 4).map((i) => i.src),
  extraBedRoom: roomGalleries.extraBedRoom.slice(0, 4).map((i) => i.src),
  superiorSuite: roomGalleries.superiorSuite.slice(0, 4).map((i) => i.src),
  celebrations: galleryAlbums.celebrations.slice(0, 4).map((i) => i.src),
  restaurant: galleryAlbums.restaurant.slice(0, 4).map((i) => i.src),
  wineCellar: galleryAlbums.wineCellar.slice(0, 4).map((i) => i.src),
  marina: [img.marina.src.src, img.marina4.src.src],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const abs = (p: string) => `${SITE_URL}${p}`;
  return (Object.keys(routes) as RouteKey[]).flatMap((key) =>
    (["sr", "en"] as const).map((lang) => ({
      url: abs(routes[key][lang]),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: (priority[key] ?? 0.7) * (lang === "en" ? 0.9 : 1),
      alternates: { languages: { sr: abs(routes[key].sr), en: abs(routes[key].en), "x-default": abs(routes[key].sr) } },
      images: images[key]?.map(abs),
    })),
  );
}
