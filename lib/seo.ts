import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { getDict } from "@/content";
import { drinks, menu } from "@/content/menu";
import { img } from "./images";
import { href, parents, routes, type Lang, type RouteKey } from "./routes";
import {
  SITE_NAME, SITE_URL, address, checkIn, checkOut, companyName, email, geo,
  mapLink, openingHours, phones, roomPricesEur, social, taxId,
} from "./site";

const abs = (path: string) => new URL(path, SITE_URL).toString();

type PageMeta = { title: string; description: string };

/** OG slike 1200×630 generiše `npm run og` u public/og/<ruta>.jpg (vidi scripts/generate-og.mjs). */
const ogImage = (key: RouteKey) => ({ url: `/og/${key}.jpg`, width: 1200, height: 630 });

export function pageMetadata(lang: Lang, key: RouteKey, { title, description }: PageMeta): Metadata {
  const image = ogImage(key);
  const url = href(key, lang);
  const d = getDict(lang);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        sr: routes[key].sr,
        en: routes[key].en,
        "x-default": routes[key].sr,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: d.meta.siteName,
      locale: d.meta.locale,
      alternateLocale: lang === "sr" ? "en_US" : "sr_RS",
      title,
      description,
      images: [{ ...image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

// ---------------------------------------------------------------------------
// Schema.org
// ---------------------------------------------------------------------------
const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: address.street,
  addressLocality: address.city,
  postalCode: address.postalCode,
  addressRegion: address.region,
  addressCountry: address.country,
};

const hours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: openingHours.opens,
  closes: openingHours.closes,
};

export const hotelId = `${SITE_URL}/#hotel`;
export const restaurantId = `${SITE_URL}/#restaurant`;

const prices = Object.values(roomPricesEur).filter((p): p is number => p !== null);
const priceRange = () =>
  prices.length ? { priceRange: `€${Math.min(...prices)}–€${Math.max(...prices)}` } : {};

export function hotelSchema(lang: Lang) {
  const d = getDict(lang);
  const amen = (name: string) => ({ "@type": "LocationFeatureSpecification", name, value: true });
  const rooms = (["standardRoom", "extraBedRoom", "superiorSuite"] as const).map((k) => ({
    "@type": "HotelRoom",
    "@id": `${abs(routes[k][lang])}#room`,
    name: d[k].name,
    url: abs(routes[k][lang]),
    occupancy: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: Number(d[k].persons.split("–")[1]),
    },
  }));
  return {
    "@type": ["Hotel", "EventVenue"],
    "@id": hotelId,
    name: SITE_NAME,
    alternateName: "Svetionik Obrenovac na Savi",
    legalName: companyName,
    taxID: taxId,
    url: abs(routes.home[lang]),
    logo: abs("/svg/hotel-svetionik-logo.png"),
    image: [abs(img.hotelExterior.src.src), abs(img.superiorWide.src.src), abs(img.banquetBg.src.src), abs(img.restTerrace.src.src)],
    description: d.home.description,
    telephone: phones.info.e164,
    email,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
    hasMap: mapLink,
    ...priceRange(),
    checkinTime: checkIn,
    checkoutTime: checkOut,
    numberOfRooms: 15,
    maximumAttendeeCapacity: 400,
    petsAllowed: false,
    smokingAllowed: false,
    currenciesAccepted: "RSD, EUR",
    availableLanguage: ["sr", "en"],
    foundingDate: "2015",
    openingHoursSpecification: hours,
    amenityFeature: [
      d.nav.restaurant, d.nav.celebrations, d.nav.wineCellar, d.nav.marina,
      d.room.jacuzzi, "Parking", "Wi-Fi", d.rooms.amenities[2], "Mini-bar",
    ].map(amen),
    containsPlace: rooms,
    sameAs: [social.facebook, social.instagram],
    contactPoint: [
      { "@type": "ContactPoint", telephone: phones.booking.e164, contactType: "reservations", availableLanguage: ["sr", "en"] },
      { "@type": "ContactPoint", telephone: phones.info.e164, contactType: "customer service", availableLanguage: ["sr", "en"] },
    ],
  };
}

export function restaurantSchema(lang: Lang) {
  const d = getDict(lang);
  return {
    "@type": "Restaurant",
    "@id": restaurantId,
    name: lang === "sr" ? "Restoran Svetionik" : "Svetionik Restaurant",
    url: abs(routes.restaurant[lang]),
    description: d.restaurant.description,
    image: [abs(img.restTerrace.src.src), abs(img.restInside12.src.src), abs(img.fish4.src.src)],
    telephone: phones.restaurant.e164,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
    servesCuisine: lang === "sr" ? ["Srpska", "Riblji specijaliteti", "Roštilj"] : ["Serbian", "Fish", "Grill"],
    hasMenu: abs(routes.menu[lang]),
    acceptsReservations: "True",
    seatingCapacity: 200,
    openingHoursSpecification: hours,
    containedInPlace: { "@id": hotelId },
  };
}

export function roomSchema(lang: Lang, key: "standardRoom" | "extraBedRoom" | "superiorSuite", images: StaticImageData[]) {
  const d = getDict(lang);
  const r = d[key];
  const max = Number(r.persons.split("–")[1]);
  return {
    "@type": "HotelRoom",
    "@id": `${abs(routes[key][lang])}#room`,
    name: r.name,
    description: r.short,
    url: abs(routes[key][lang]),
    image: images.slice(0, 4).map((i) => abs(i.src)),
    occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: max },
    bed: { "@type": "BedDetails", typeOfBed: r.bed, numberOfBeds: key === "superiorSuite" ? 2 : 1 },
    amenityFeature: r.features.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    smokingAllowed: false,
    containedInPlace: { "@id": hotelId },
    ...(roomPricesEur[key] !== null && {
      offers: {
        "@type": "Offer",
        price: roomPricesEur[key],
        priceCurrency: "EUR",
        unitText: lang === "sr" ? "noć" : "night",
        url: abs(routes.booking[lang]),
      },
    }),
  };
}

export function menuSchema(lang: Lang) {
  const en = lang === "en";
  return {
    "@type": "Menu",
    "@id": `${abs(routes.menu[lang])}#menu`,
    name: en ? "Svetionik Restaurant Menu" : "Jelovnik restorana Svetionik",
    url: abs(routes.menu[lang]),
    inLanguage: lang,
    hasMenuSection: [
      ...menu.map((s) => ({
        "@type": "MenuSection",
        name: en ? s.en : s.sr,
        hasMenuItem: s.items.map((it) => ({
          "@type": "MenuItem",
          name: en ? it.en : it.sr,
          ...((en ? it.noteEn : it.noteSr) && { description: en ? it.noteEn : it.noteSr }),
          ...(it.price && { offers: { "@type": "Offer", price: it.price, priceCurrency: "RSD" } }),
        })),
      })),
      { "@type": "MenuSection", name: en ? "Drinks" : "Pića", description: drinks[lang].map(([k, v]) => `${k}: ${v}`).join(". ") },
    ],
  };
}

export function breadcrumbSchema(lang: Lang, key: RouteKey) {
  const d = getDict(lang);
  const chain = [...(parents[key] ?? []), key];
  const label = (k: RouteKey) => (k === "home" ? d.ui.home : d.nav[k as keyof typeof d.nav]);
  return {
    "@type": "BreadcrumbList",
    itemListElement: chain.map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: label(k),
      item: abs(routes[k][lang]),
    })),
  };
}

export function faqSchema(items: string[][]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function websiteSchema(lang: Lang) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: abs(routes.home[lang]),
    name: SITE_NAME,
    inLanguage: lang,
    publisher: { "@id": hotelId },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
