export type Lang = "sr" | "en";
export const langs: Lang[] = ["sr", "en"];

/**
 * Jedan izvor istine za sve URL-ove sajta.
 * Srpski URL-ovi su identični starom sajtu; engleski prate stare
 * "lepe" adrese (/en/about-us, /en/services/...).
 */
export const routes = {
  home: { sr: "/", en: "/en" },
  about: { sr: "/o-nama", en: "/en/about-us" },
  services: { sr: "/usluge", en: "/en/services" },
  rooms: { sr: "/usluge/sobe", en: "/en/services/rooms" },
  standardRoom: { sr: "/usluge/sobe/standardna-soba", en: "/en/services/rooms/standard-room" },
  extraBedRoom: {
    sr: "/usluge/sobe/soba-sa-dodatnim-lezajem",
    en: "/en/services/rooms/room-with-extra-bed",
  },
  superiorSuite: {
    sr: "/usluge/sobe/superior-apartman-sa-djakuzijem",
    en: "/en/services/rooms/superior-apartment-with-jacuzzi",
  },
  celebrations: { sr: "/usluge/proslave", en: "/en/services/celebrations" },
  restaurant: { sr: "/usluge/restoran", en: "/en/services/restaurant" },
  wineCellar: { sr: "/usluge/vinski-podrum", en: "/en/services/wine-cellar" },
  marina: { sr: "/usluge/brodska-marina", en: "/en/services/boat-marina" },
  gallery: { sr: "/galerija", en: "/en/gallery" },
  contact: { sr: "/kontakt", en: "/en/contact" },
  booking: { sr: "/rezervacija", en: "/en/booking" },
  menu: { sr: "/usluge/restoran/jelovnik", en: "/en/services/restaurant/menu" },
  weddings: { sr: "/usluge/proslave/svadbeni-salon", en: "/en/services/celebrations/wedding-venue" },
  privateParties: {
    sr: "/usluge/proslave/krstenja-rodjendani-punoletstva",
    en: "/en/services/celebrations/christenings-birthdays",
  },
  stay: { sr: "/smestaj-obrenovac", en: "/en/accommodation-near-belgrade" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

export const href = (key: RouteKey, lang: Lang) => routes[key][lang];

/** Pronalazi rutu po putanji (za prebacivanje jezika u headeru). */
export function routeKeyFromPath(pathname: string): RouteKey | undefined {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return (Object.keys(routes) as RouteKey[]).find(
    (k) => routes[k].sr === clean || routes[k].en === clean,
  );
}

/** Roditeljske rute za breadcrumbs. */
export const parents: Partial<Record<RouteKey, RouteKey[]>> = {
  about: ["home"],
  services: ["home"],
  rooms: ["home", "services"],
  standardRoom: ["home", "services", "rooms"],
  extraBedRoom: ["home", "services", "rooms"],
  superiorSuite: ["home", "services", "rooms"],
  celebrations: ["home", "services"],
  restaurant: ["home", "services"],
  wineCellar: ["home", "services"],
  marina: ["home", "services"],
  gallery: ["home"],
  contact: ["home"],
  booking: ["home"],
  menu: ["home", "services", "restaurant"],
  weddings: ["home", "services", "celebrations"],
  privateParties: ["home", "services", "celebrations"],
  stay: ["home", "rooms"],
};
