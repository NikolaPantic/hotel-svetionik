/**
 * Google recenzije — trenutno placeholder.
 * Kada se poveže Google Business profil, upisati ocenu, broj recenzija i nekoliko
 * izabranih recenzija (doslovno, sa imenom autora i datumom). Sekcija na naslovnoj
 * i Schema.org aggregateRating se automatski uključuju kada `rating` i `count` nisu null.
 */
export type Review = { author: string; rating: number; date: string; text: string };

export const googleReviews: {
  rating: number | null;
  count: number | null;
  /** Link ka recenzijama na Google Maps profilu. */
  readUrl: string;
  /** Link "Ostavite recenziju" (https://search.google.com/local/writereview?placeid=…). */
  writeUrl: string;
  items: Review[];
} = {
  rating: null,
  count: null,
  readUrl: "https://www.google.com/maps/search/?api=1&query=Hotel%20Svetionik%20Obrenovac",
  writeUrl: "https://www.google.com/maps/search/?api=1&query=Hotel%20Svetionik%20Obrenovac",
  items: [],
};
