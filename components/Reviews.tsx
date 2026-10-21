import { getDict } from "@/content";
import { googleReviews } from "@/content/reviews";
import type { Lang } from "@/lib/routes";
import { StarIcon } from "./icons";

function Stars({ value, label }: { value: number; label: string }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled={i < Math.round(value)} />)}
    </span>
  );
}

/**
 * Google recenzije. Dok nisu upisane u content/reviews.ts, prikazuje se
 * placeholder sa linkovima ka Google profilu (bez izmišljenih recenzija).
 */
export function Reviews({ lang }: { lang: Lang }) {
  const t = getDict(lang).reviews;
  const { rating, count, items, readUrl, writeUrl } = googleReviews;
  const hasRating = rating !== null && count !== null;

  return (
    <section className="section" aria-labelledby="reviews-title">
      <div className="container">
        <header className="section-head center">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="title" id="reviews-title">{t.title}</h2>
          <span className="rule" />
          {hasRating && (
            <p className="reviews-score">
              <strong>{rating!.toFixed(1)}</strong>
              <Stars value={rating!} label={`${rating} / 5`} />
              <span className="muted">{t.basedOn} {count} {t.reviewsWord} · Google</span>
            </p>
          )}
        </header>

        {items.length > 0 ? (
          <div className="reviews">
            {items.map((r) => (
              <figure className="review reveal" key={r.author + r.date}>
                <Stars value={r.rating} label={`${r.rating} / 5`} />
                <blockquote><p>{r.text}</p></blockquote>
                <figcaption>{r.author} · {r.date}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="reviews-placeholder reveal">
            <Stars value={0} label="Google" />
            <p className="muted">{t.placeholder}</p>
          </div>
        )}

        <div className="btn-row" style={{ justifyContent: "center", marginTop: 36 }}>
          <a className="btn btn--ghost" href={readUrl} target="_blank" rel="noopener">{t.read}</a>
          <a className="btn btn--solid" href={writeUrl} target="_blank" rel="noopener">{t.write}</a>
        </div>
      </div>
    </section>
  );
}
