import { getDict } from "@/content";
import { getGoogleReviews } from "@/lib/integrations/google-reviews";
import type { Lang } from "@/lib/routes";
import { stagger } from "./blocks";
import { StarIcon } from "./icons";

const SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=Hotel%20Svetionik%20Obrenovac";

function Stars({ value, label }: { value: number; label: string }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled={i < Math.round(value)} />)}
    </span>
  );
}

/**
 * Google recenzije (Places API). Dok API ključ nije podešen, prikazuje se
 * placeholder — bez izmišljenih recenzija.
 */
export async function Reviews({ lang }: { lang: Lang }) {
  const t = getDict(lang).reviews;
  const data = await getGoogleReviews(lang);
  const mapsUrl = data?.mapsUrl || SEARCH_URL;

  return (
    <section className="section section--deep" aria-labelledby="reviews-title">
      <div className="container">
        <header className="section-head center">
          <p className="eyebrow reveal">{t.eyebrow}</p>
          <h2 className="title reveal" style={stagger(1)} id="reviews-title">{t.title}</h2>
          <span className="rule" />
          {data && (
            <p className="reviews-score reveal" style={stagger(2)}>
              <strong>{data.rating.toFixed(1)}</strong>
              <Stars value={data.rating} label={`${data.rating.toFixed(1)} / 5`} />
              <span className="muted">{t.basedOn} {data.count} {t.reviewsWord} · Google</span>
            </p>
          )}
        </header>

        <div className="reviews">
          {data && data.reviews.length > 0
            ? data.reviews.slice(0, 3).map((r, i) => (
                <figure className="review reveal" style={stagger(i)} key={r.author + r.when}>
                  <Stars value={r.rating} label={`${r.rating} / 5`} />
                  <blockquote><p>{r.text.length > 320 ? `${r.text.slice(0, 317)}…` : r.text}</p></blockquote>
                  <figcaption>
                    {r.authorUrl ? <a href={r.authorUrl} target="_blank" rel="noopener nofollow">{r.author}</a> : r.author}
                    {r.when && ` · ${r.when}`} · Google
                  </figcaption>
                </figure>
              ))
            : [0, 1, 2].map((i) => (
                <div className="review review--placeholder reveal" style={stagger(i)} key={i} aria-hidden="true">
                  <Stars value={0} label="" />
                  <div style={{ margin: "22px 0 26px", flex: 1 }}>
                    <span className="review__line" />
                    <span className="review__line" />
                    <span className="review__line" />
                  </div>
                  <span className="review__line" style={{ width: "40%", marginBottom: 0 }} />
                </div>
              ))}
        </div>

        {!data && <p className="placeholder-note muted reveal">{t.placeholder}</p>}

        <div className="btn-row reveal" style={{ justifyContent: "center", marginTop: 40 }}>
          <a className="btn btn--light" href={mapsUrl} target="_blank" rel="noopener">{t.read}</a>
          <a className="btn btn--solid" href={mapsUrl} target="_blank" rel="noopener">{t.write}</a>
        </div>
      </div>
    </section>
  );
}
