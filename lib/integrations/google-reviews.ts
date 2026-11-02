import type { Lang } from "@/lib/routes";

/**
 * Google recenzije preko Places API (New).
 * Potrebne env promenljive (samo na serveru, nikad NEXT_PUBLIC_):
 *   GOOGLE_PLACES_API_KEY — ključ sa uključenim "Places API (New)"
 *   GOOGLE_PLACE_ID       — Place ID hotela (Place ID Finder na developers.google.com)
 * Bez njih funkcija vraća null i prikazuje se placeholder.
 * Google vraća najviše 5 recenzija; podaci se keširaju 1h (ISR).
 */
export type GoogleReview = {
  author: string;
  authorUrl?: string;
  rating: number;
  text: string;
  when: string;
};

export type GoogleReviewsData = {
  rating: number;
  count: number;
  mapsUrl: string;
  reviews: GoogleReview[];
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: { displayName?: string; uri?: string };
  }[];
};

export const googleReviewsConfigured = () =>
  Boolean(process.env.GOOGLE_PLACES_API_KEY && process.env.GOOGLE_PLACE_ID);

export async function getGoogleReviews(lang: Lang): Promise<GoogleReviewsData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=${lang}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: 3600, tags: ["google-reviews"] },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as PlacesResponse;
    if (typeof data.rating !== "number") return null;
    return {
      rating: data.rating,
      count: data.userRatingCount ?? 0,
      mapsUrl: data.googleMapsUri ?? "",
      reviews: (data.reviews ?? [])
        .filter((r) => (r.text?.text || r.originalText?.text) && r.rating)
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? "Google",
          authorUrl: r.authorAttribution?.uri,
          rating: r.rating ?? 5,
          text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
          when: r.relativePublishTimeDescription ?? "",
        })),
    };
  } catch {
    return null;
  }
}
