import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { getDict } from "@/content";
import { img } from "./images";
import { href, parents, routes, type Lang, type RouteKey } from "./routes";
import {
  SITE_NAME, SITE_URL, address, checkIn, checkOut, companyName, email, geo,
  mapLink, openingHours, phones, social, taxId,
} from "./site";

const abs = (path: string) => new URL(path, SITE_URL).toString();

type PageMeta = { title: string; description: string };

export function pageMetadata(
  lang: Lang,
  key: RouteKey,
  { title, description }: PageMeta,
  image: StaticImageData = img.hotelExterior.src,
): Metadata {
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
      images: [{ url: image.src, width: image.width, height: image.height, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.src] },
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
    starRating: { "@type": "Rating", ratingValue: 2 },
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
    hasMenu: abs("/assets/hotel-svetionik-jelovnik.pdf"),
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
