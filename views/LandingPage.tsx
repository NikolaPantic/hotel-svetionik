import Link from "next/link";
import { CtaBand, Faq, Feature, OtherServices, PageHero, RoomCards, SectionHead } from "@/components/blocks";
import { ChatLinks } from "@/components/ChatLinks";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { getDict } from "@/content";
import { galleryAlbums, img, lite, type Pic } from "@/lib/images";
import { href, type Lang, type RouteKey } from "@/lib/routes";
import { faqSchema, graph, pageMetadata } from "@/lib/seo";
import { phones } from "@/lib/site";

export type LandingKey = "weddings" | "privateParties" | "stay";

const cel = galleryAlbums.celebrations;

/** Slike i prateće veze za svaku SEO stranicu. */
const config: Record<
  LandingKey,
  {
    hero: Pic;
    feature: Pic;
    inset: Pic;
    gallery: Pic[];
    phone: (typeof phones)[keyof typeof phones];
    links: RouteKey[];
    current: RouteKey;
  }
> = {
  weddings: {
    hero: img.wedding,
    feature: img.banquetBg,
    inset: img.celebrationTable,
    gallery: [cel[2], cel[19], cel[3], cel[20], cel[0], cel[13], cel[9], cel[1], cel[14], cel[4]],
    phone: phones.info,
    links: ["celebrations", "superiorSuite", "restaurant"],
    current: "celebrations",
  },
  privateParties: {
    hero: img.banquet13,
    feature: img.clubHall,
    inset: img.cellarParty2,
    gallery: [cel[11], cel[12], cel[10], cel[25], cel[24], cel[21], cel[22], cel[13], cel[26], cel[6]],
    phone: phones.info,
    links: ["celebrations", "wineCellar", "menu"],
    current: "celebrations",
  },
  stay: {
    hero: img.hotelSide,
    feature: img.superiorWide,
    inset: img.singleCard,
    gallery: [...galleryAlbums.rooms],
    phone: phones.booking,
    links: ["rooms", "restaurant", "about"],
    current: "rooms",
  },
};

export const landingMetadata = (lang: Lang, key: LandingKey) => pageMetadata(lang, key, getDict(lang).landings[key]);

export default function LandingPage({ lang, page }: { lang: Lang; page: LandingKey }) {
  const t = getDict(lang);
  const l = t.landings[page];
  const c = config[page];
  const labels = { close: t.ui.closeGallery, prev: t.ui.prev, next: t.ui.next, photo: t.ui.photo, of: t.ui.of };

  return (
    <>
      <PageHero lang={lang} route={page} pic={c.hero} {...l.hero} />

      <section className="section">
        <div className="container">
          <div className="container--narrow center reveal" style={{ margin: "0 auto clamp(56px, 7vw, 100px)" }}>
            <p className="lead" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>{l.lead}</p>
          </div>
          <Feature lang={lang} pic={c.feature} inset={c.inset} eyebrow={l.hero.eyebrow} title={l.highlightsTitle}>
            <div className="prose">{l.p.map((p) => <p key={p}>{p}</p>)}</div>
            <ul className="checklist" style={{ margin: "30px 0 34px" }}>
              {l.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <div className="btn-row">
              <a className="btn btn--solid" href={c.phone.href}>{t.ui.call} · {c.phone.label}</a>
              <Link className="btn btn--ghost" href={href("booking", lang)}>{t.ui.enquire}</Link>
            </div>
            <ChatLinks lang={lang} />
          </Feature>
        </div>
      </section>

      {page === "stay" ? (
        <section className="section section--alt" aria-labelledby="landing-rooms">
          <div className="container">
            <SectionHead eyebrow={t.nav.rooms} title={t.rooms.hero.title} id="landing-rooms" />
            <RoomCards lang={lang} />
          </div>
        </section>
      ) : (
        <section className="section section--alt" aria-labelledby="landing-gallery">
          <div className="container">
            <SectionHead eyebrow={t.nav.gallery} title={l.hero.title} id="landing-gallery" />
            <Gallery images={lite(c.gallery, lang)} alt={l.hero.title} mosaic labels={labels} />
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="landing-faq">
        <div className="container">
          <SectionHead eyebrow="FAQ" title={t.home.faqTitle} id="landing-faq" />
          <Faq items={l.faq} />
          <p className="center" style={{ marginTop: 40, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {c.links.map((k) => (
              <Link key={k} className="link-more" href={href(k, lang)}>{t.nav[k as keyof typeof t.nav]}</Link>
            ))}
          </p>
        </div>
      </section>

      <CtaBand lang={lang} title={l.hero.title} text={l.hero.sub} phone={c.phone} />
      <OtherServices lang={lang} current={c.current} />
      <JsonLd data={graph(faqSchema(l.faq))} />
    </>
  );
}
