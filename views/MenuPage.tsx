import Link from "next/link";
import { OtherServices, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { getDict } from "@/content";
import { drinks, menu } from "@/content/menu";
import { img } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { graph, menuSchema, pageMetadata } from "@/lib/seo";
import { phones } from "@/lib/site";

export const menuMetadata = (lang: Lang) => pageMetadata(lang, "menu", getDict(lang).menuPage);

export default function MenuPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const m = t.menuPage;
  const en = lang === "en";
  return (
    <>
      <PageHero lang={lang} route="menu" pic={img.specialty} {...m.hero} />

      <nav className="album-nav" aria-label={m.hero.title}>
        <ul className="container">
          {menu.map((s) => (
            <li key={s.id}><a href={`#${s.id}`}>{en ? s.en : s.sr}</a></li>
          ))}
          <li><a href="#pica">{m.drinksTitle}</a></li>
        </ul>
      </nav>

      <section className="section">
        <div className="container container--narrow">
          <div className="center reveal" style={{ marginBottom: "clamp(40px, 6vw, 72px)" }}>
            <p className="muted" style={{ margin: "0 0 24px" }}>{m.intro}</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a className="btn btn--solid" href={phones.restaurant.href}>{t.restaurant.cta} · {phones.restaurant.label}</a>
              <a className="btn btn--ghost" href="/assets/hotel-svetionik-jelovnik.pdf" target="_blank" rel="noopener">{m.pdf}</a>
            </div>
          </div>

          {menu.map((s) => (
            <section className="menu-section" id={s.id} key={s.id} aria-labelledby={`${s.id}-t`}>
              <h2 className="title title--sm" id={`${s.id}-t`}>{en ? s.en : s.sr}</h2>
              {(en ? s.noteEn : s.noteSr) && <p className="menu-section__note">{en ? s.noteEn : s.noteSr}</p>}
              <ul className="menu-list">
                {s.items.map((it) => {
                  const note = en ? it.noteEn : it.noteSr;
                  const amount = en ? it.amountEn ?? it.amount : it.amount;
                  return (
                    <li key={it.sr}>
                      <div className="menu-list__row">
                        <span className="menu-list__name">{en ? it.en : it.sr}</span>
                        <span className="menu-list__dots" aria-hidden="true" />
                        {amount && <span className="menu-list__amount">{amount}</span>}
                        {it.price && <span className="menu-list__price">{it.price} RSD</span>}
                      </div>
                      {note && <p className="menu-list__note">{note}</p>}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <section className="menu-section" id="pica" aria-labelledby="pica-t">
            <h2 className="title title--sm" id="pica-t">{m.drinksTitle}</h2>
            <dl className="menu-drinks">
              {drinks[lang].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="center" style={{ marginTop: 40 }}>
              <Link className="btn btn--ghost" href={href("wineCellar", lang)}>{t.nav.wineCellar}</Link>
            </p>
          </section>
        </div>
      </section>

      <OtherServices lang={lang} current="restaurant" />
      <JsonLd data={graph(menuSchema(lang))} />
    </>
  );
}
