import type { Lang, RouteKey } from "@/lib/routes";

/**
 * Paketi / posebne ponude i priznanja.
 * Sekcije na naslovnoj se prikazuju TEK kada se ovde upiše bar jedna stavka
 * (tekst i cene mora da potvrdi hotel — ništa nije izmišljeno).
 */
export type Offer = {
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  /** npr. { sr: "od 120 € za dvoje", en: "from €120 for two" } */
  price?: Record<Lang, string>;
  /** ključ fotografije iz lib/images.ts → img */
  image: "superiorWide" | "banquetBg" | "restTerrace" | "cellar3" | "wedding" | "fish4" | "marina";
  link: RouteKey;
};

export type Award = {
  title: Record<Lang, string>;
  /** npr. "Booking.com, 2025" */
  source: string;
};

export const offers: Offer[] = [
  // Primer (otkomentarisati i prilagoditi):
  // {
  //   title: { sr: "Romantični vikend", en: "Romantic weekend" },
  //   text: { sr: "Superior apartman sa đakuzijem, večera uz Savu i flaša šampanjca.", en: "…" },
  //   price: { sr: "od … € za dvoje", en: "from €… for two" },
  //   image: "superiorWide",
  //   link: "superiorSuite",
  // },
];

export const awards: Award[] = [
  // { title: { sr: "…", en: "…" }, source: "…, 2025" },
];
