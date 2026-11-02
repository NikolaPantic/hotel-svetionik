import { Cormorant_Garamond, Lexend_Exa } from "next/font/google";

/** Naslovi i tekst — klasični serif (Google zamena za Portrait sa gagehotel.com). */
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

/** Natpisi, meni i dugmad — široki sans (isti kao na gagehotel.com). */
export const sans = Lexend_Exa({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans",
});
