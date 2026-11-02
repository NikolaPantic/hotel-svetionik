import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { getDict } from "@/content";
import type { Pic } from "@/lib/images";
import { img } from "@/lib/images";
import { href, parents, type Lang, type RouteKey } from "@/lib/routes";
import { breadcrumbSchema, graph } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** Redosled za postepeno pojavljivanje (koristi se u CSS-u kao --i). */
export const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/* ---------- Uokvirena slika ---------- */
export function Framed({
  lang, pic, sizes, variant = "wine", side = "right", arch, preload, className = "",
}: {
  lang: Lang; pic: Pic; sizes: string; variant?: "wine" | "deep"; side?: "left" | "right";
  arch?: boolean; preload?: boolean; className?: string;
}) {
  const cls = ["frame", variant === "deep" && "frame--deep", side === "left" && "frame--left", arch && "frame--arch", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <div className="frame__img">
        <Image src={pic.src} alt={pic.alt[lang]} fill sizes={sizes} placeholder="blur" preload={preload} />
      </div>
    </div>
  );
}

/* ---------- Hero za podstranice + breadcrumbs ---------- */
export function PageHero({
  lang, route, pic, eyebrow, title, sub,
}: { lang: Lang; route: RouteKey; pic: Pic; eyebrow: string; title: string; sub: string }) {
  return (
    <>
      <section className="hero hero--page" aria-labelledby="page-title">
        <div className="hero__media">
          <Image src={pic.src} alt={pic.alt[lang]} fill preload sizes="100vw" quality={60} placeholder="blur" />
        </div>
        <div className="container hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-title">{title}</h1>
          <p className="hero__sub">{sub}</p>
        </div>
      </section>
      <Breadcrumbs lang={lang} route={route} />
    </>
  );
}

export function Breadcrumbs({ lang, route }: { lang: Lang; route: RouteKey }) {
  const t = getDict(lang);
  const chain = [...(parents[route] ?? []), route];
  const label = (k: RouteKey) => (k === "home" ? t.ui.home : t.nav[k as keyof typeof t.nav]);
  return (
    <nav className="breadcrumbs" aria-label={t.ui.breadcrumbs}>
      <ol className="container">
        {chain.map((k, i) =>
          i === chain.length - 1 ? (
            <li key={k}><span aria-current="page">{label(k)}</span></li>
          ) : (
            <li key={k}><Link href={href(k, lang)}>{label(k)}</Link></li>
          ),
        )}
      </ol>
      <JsonLd data={graph(breadcrumbSchema(lang, route))} />
    </nav>
  );
}

/* ---------- Naslov sekcije ---------- */
export function SectionHead({ eyebrow, title, text, id }: { eyebrow: string; title: string; text?: string; id?: string }) {
  return (
    <header className="section-head center">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h2 className="title reveal" style={stagger(1)} id={id}>{title}</h2>
      <span className="rule" />
      {text && <p className="muted reveal" style={stagger(2)}>{text}</p>}
    </header>
  );
}

/* ---------- Činjenice ---------- */
export function Facts({ items }: { items: string[][] }) {
  return (
    <dl className="facts">
      {items.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Split sekcija (uokvirena slika + tekst) ---------- */
export function Feature({
  lang, pic, reverse, eyebrow, title, children, headingLevel = 2, id, arch,
}: {
  lang: Lang; pic: Pic; reverse?: boolean; eyebrow: string; title: string;
  children: ReactNode; headingLevel?: 2 | 3; id?: string; arch?: boolean;
}) {
  const H = `h${headingLevel}` as const;
  return (
    <div className={`feature${reverse ? " feature--reverse" : ""}`}>
      <div className="feature__media">
        <Framed
          lang={lang}
          pic={pic}
          sizes="(max-width: 860px) 100vw, 50vw"
          variant={reverse ? "deep" : "wine"}
          side={reverse ? "left" : "right"}
          arch={arch}
        />
      </div>
      <div className={`feature__text ${reverse ? "reveal-left" : "reveal-right"}`}>
        <p className="eyebrow">{eyebrow}</p>
        <H className="title" id={id}>{title}</H>
        <span className="rule" />
        {children}
      </div>
    </div>
  );
}

/* ---------- Kartice soba ---------- */
const roomPics = { standardRoom: img.singleCard, extraBedRoom: img.doubleCard, superiorSuite: img.superiorCard };
const roomKeys = ["standardRoom", "extraBedRoom", "superiorSuite"] as const;

export function RoomCards({ lang, exclude, headingLevel = 3 }: { lang: Lang; exclude?: RouteKey; headingLevel?: 2 | 3 }) {
  const t = getDict(lang);
  const H = `h${headingLevel}` as const;
  const keys = roomKeys.filter((k) => k !== exclude);
  return (
    <div className="cards" style={keys.length === 2 ? { gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" } : undefined}>
      {keys.map((k, i) => {
        const r = t[k];
        return (
          <article className="card" key={k}>
            <Framed lang={lang} pic={roomPics[k]} sizes="(max-width: 860px) 100vw, 33vw" variant={i % 2 ? "deep" : "wine"} />
            {k === "superiorSuite" && <span className="card__tag">{t.room.jacuzzi}</span>}
            <div className="card__body reveal" style={stagger(i)}>
              <H><Link href={href(k, lang)}>{r.name}</Link></H>
              <ul className="specs">
                <li>{r.persons} {lang === "sr" ? "osobe" : "guests"}</li>
                <li>{r.bed}</li>
                <li>{t.rooms.count[k]}</li>
              </ul>
              <p className="muted">{r.short}</p>
              <span className="link-more">{t.ui.details}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* ---------- Pločice (slika + naslov + dugme, kao na Gage-u) ---------- */
export type TileItem = { route: RouteKey; title: string; text: string; pic: Pic };

export function Tiles({ lang, items }: { lang: Lang; items: TileItem[] }) {
  const t = getDict(lang);
  return (
    <div className="tiles">
      {items.map((it, i) => (
        <Link className="tile reveal" style={stagger(i)} href={href(it.route, lang)} key={it.route + it.title}>
          <Image src={it.pic.src} alt="" fill sizes="(max-width: 860px) 100vw, 33vw" />
          <div className="tile__body">
            <h3>{it.title}</h3>
            <p>{it.text}</p>
            <span className="btn" aria-hidden="true">{t.ui.learnMore}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ---------- Ostale usluge (interno linkovanje) ---------- */
const serviceTiles = (lang: Lang): TileItem[] => {
  const t = getDict(lang);
  return [
    { route: "rooms", title: t.nav.rooms, text: t.services.taglines.rooms, pic: img.superiorWide },
    { route: "celebrations", title: t.nav.celebrations, text: t.services.taglines.celebrations, pic: img.banquetBlack },
    { route: "restaurant", title: t.nav.restaurant, text: t.services.taglines.restaurant, pic: img.restTerrace },
    { route: "wineCellar", title: t.nav.wineCellar, text: t.services.taglines.wineCellar, pic: img.cellar3 },
    { route: "marina", title: t.nav.marina, text: t.services.taglines.marina, pic: img.marina },
  ];
};

export function OtherServices({ lang, current }: { lang: Lang; current: RouteKey }) {
  const t = getDict(lang);
  const items = serviceTiles(lang).filter((s) => s.route !== current).slice(0, 3);
  return (
    <section className="section section--alt" aria-labelledby="other-services">
      <div className="container">
        <SectionHead eyebrow={t.nav.services} title={t.ui.otherServices} id="other-services" />
        <Tiles lang={lang} items={items} />
      </div>
    </section>
  );
}

export { serviceTiles };

/* ---------- CTA traka ---------- */
export function CtaBand({ lang, title, text, phone }: { lang: Lang; title: string; text: string; phone: { href: string; label: string } }) {
  const t = getDict(lang);
  return (
    <section className="section section--wine section--tight">
      <div className="container center">
        <h2 className="title title--sm reveal">{title}</h2>
        <span className="rule" />
        <p className="muted reveal" style={{ ...stagger(1), maxWidth: 640, margin: "0 auto 32px" }}>{text}</p>
        <div className="btn-row reveal" style={{ ...stagger(2), justifyContent: "center" }}>
          <a className="btn btn--light" href={phone.href}>{phone.label}</a>
          <Link className="btn btn--light" href={href("booking", lang)}>{t.ui.enquire}</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq({ items }: { items: string[][] }) {
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <details key={q} className="reveal" style={stagger(Math.min(i, 3))}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
