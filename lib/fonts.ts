import { Cormorant_Garamond, Lexend_Exa, Source_Serif_4 } from "next/font/google";

/** Naslovi — klasični serif (Google zamena za Portrait sa gagehotel.com). */
export const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-serif",
});

/** Kurziv za citate i podnaslove — bez preload-a da ne usporava LCP. */
export const serifItalic = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
  style: ["italic"],
  display: "swap",
  preload: false,
  variable: "--font-serif-italic",
});

/** Tekst — serif pravljen za čitanje na ekranu, sa optičkim veličinama. */
export const body = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-body",
});

/** Natpisi, meni i dugmad — široki sans (isti kao na gagehotel.com). */
export const sans = Lexend_Exa({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
  // Mali natpisi — zamena fonta je jedva primetna, a štedi se preload za LCP.
  preload: false,
  variable: "--font-sans",
});
