import { Jost, Playfair_Display } from "next/font/google";

export const serif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-serif",
});

/** Kurziv se koristi samo za podnaslove i citate — bez preload-a da ne usporava LCP. */
export const serifItalic = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
  preload: false,
  variable: "--font-serif-italic",
});

export const sans = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans",
});
