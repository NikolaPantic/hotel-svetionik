/**
 * Instagram objave preko Instagram API (Instagram Login, poslovni/creator nalog).
 * Potrebna env promenljiva (samo na serveru):
 *   INSTAGRAM_ACCESS_TOKEN — dugotrajni token (važi 60 dana; obnavlja se pozivom
 *   GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=…)
 * Bez tokena funkcija vraća null i prikazuje se placeholder. Keš: 1h (ISR).
 */
export type InstagramPost = {
  id: string;
  image: string;
  caption: string;
  permalink: string;
};

type MediaResponse = {
  data?: {
    id: string;
    caption?: string;
    media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_url?: string;
    thumbnail_url?: string;
    permalink?: string;
  }[];
};

export const instagramConfigured = () => Boolean(process.env.INSTAGRAM_ACCESS_TOKEN);

export async function getInstagramPosts(limit = 6): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  try {
    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit * 2}&access_token=${encodeURIComponent(token)}`,
      { next: { revalidate: 3600, tags: ["instagram"] } },
    );
    if (!res.ok) return null;
    const json = (await res.json()) as MediaResponse;
    return (json.data ?? [])
      .map((m) => ({
        id: m.id,
        image: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
        caption: (m.caption ?? "").split("\n")[0].slice(0, 140),
        permalink: m.permalink ?? "",
      }))
      .filter((p) => p.image && p.permalink)
      .slice(0, limit);
  } catch {
    return null;
  }
}
