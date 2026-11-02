import Link from "next/link";
import { getDict } from "@/content";
import { awards, offers } from "@/content/offers";
import { img } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { Framed, SectionHead, stagger } from "./blocks";

/** Paketi ponuda — ne renderuje ništa dok content/offers.ts nije popunjen. */
export function Offers({ lang }: { lang: Lang }) {
  if (offers.length === 0) return null;
  const t = getDict(lang);
  return (
    <section className="section" aria-labelledby="offers-title">
      <div className="container">
        <SectionHead eyebrow={t.offers.eyebrow} title={t.offers.title} id="offers-title" />
        <div className="offers">
          {offers.map((o, i) => (
            <article className="offer" key={o.title.sr}>
              <Framed lang={lang} pic={img[o.image]} sizes="(max-width: 860px) 100vw, 33vw" variant={i % 2 ? "deep" : "wine"} />
              <h3 className="reveal">{o.title[lang]}</h3>
              <p className="muted reveal" style={stagger(1)}>{o.text[lang]}</p>
              {o.price && <p className="offer__price reveal" style={stagger(2)}>{o.price[lang]}</p>}
              <Link className="link-more" href={href(o.link, lang)}>{t.ui.details}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Priznanja — ne renderuje ništa dok content/offers.ts (awards) nije popunjen. */
export function Awards({ lang }: { lang: Lang }) {
  if (awards.length === 0) return null;
  const t = getDict(lang);
  return (
    <section className="section section--deep" aria-labelledby="awards-title">
      <div className="container awards">
        <div className="stack">
          <p className="eyebrow">{t.awards.eyebrow}</p>
          <h2 className="title" id="awards-title">{t.awards.title}</h2>
        </div>
        <ul>
          {awards.map((a, i) => (
            <li className="reveal" style={stagger(i)} key={a.title.sr}>
              {a.title[lang]}
              <span>{a.source}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
