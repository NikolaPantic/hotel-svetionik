import Link from "next/link";
import { CtaBand, Facts, Feature, OtherServices, PageHero, SectionHead } from "@/components/blocks";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { getDict } from "@/content";
import { galleryAlbums, img, lite } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { graph, hotelId, pageMetadata, restaurantSchema } from "@/lib/seo";
import { SITE_URL, phones } from "@/lib/site";

const labels = (lang: Lang) => {
  const t = getDict(lang);
  return { close: t.ui.closeGallery, prev: t.ui.prev, next: t.ui.next, photo: t.ui.photo, of: t.ui.of };
};

/* ---------------------------------------------------------------- Proslave */
export const celebrationsMetadata = (lang: Lang) =>
  pageMetadata(lang, "celebrations", getDict(lang).celebrations, img.banquetBg.src);

export function CelebrationsPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.celebrations;
  return (
    <>
      <PageHero lang={lang} route="celebrations" pic={img.banquetBg} {...c.hero} />
      <section className="section">
        <div className="container">
          <div className="container--narrow center prose reveal" style={{ margin: "0 auto clamp(56px, 7vw, 100px)" }}>
            <p className="lead" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>{c.intro[0]}</p>
            <span className="rule" />
            <p className="muted">{c.intro[1]}</p>
          </div>
          <Feature lang={lang} pic={img.banquetBlack} inset={img.banquet15} eyebrow={c.banquet.eyebrow} title={c.banquet.title}>
            <div className="prose">{c.banquet.p.map((p) => <p key={p}>{p}</p>)}</div>
          </Feature>
          <Feature lang={lang} reverse pic={img.clubHall} inset={img.wedding} eyebrow={c.club.eyebrow} title={c.club.title}>
            <div className="prose">{c.club.p.map((p) => <p key={p}>{p}</p>)}</div>
            <Facts items={c.facts} />
            <div className="btn-row">
              <Link className="btn btn--ghost" href={href("wineCellar", lang)}>{t.nav.wineCellar}</Link>
              <Link className="btn btn--ghost" href={href("restaurant", lang)}>{t.nav.restaurant}</Link>
            </div>
          </Feature>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="cel-gallery">
        <div className="container">
          <SectionHead eyebrow={t.nav.gallery} title={t.galleryPage.albums.celebrations} id="cel-gallery" />
          <Gallery images={lite(galleryAlbums.celebrations)} limit={12} alt={t.galleryPage.albums.celebrations} mosaic labels={labels(lang)} />
          <p className="center" style={{ marginTop: 40 }}>
            <Link className="btn btn--ghost" href={`${href("gallery", lang)}#proslave`}>{t.ui.viewGallery}</Link>
          </p>
        </div>
      </section>
      <CtaBand lang={lang} title={c.hero.title} text={`${c.cta} ${phones.info.label}.`} phone={phones.info} />
      <OtherServices lang={lang} current="celebrations" />
      <JsonLd
        data={graph({
          "@type": "EventVenue",
          "@id": `${SITE_URL}${href("celebrations", lang)}#venue`,
          name: lang === "sr" ? "Sale za proslave — Hotel Svetionik" : "Event halls — Hotel Svetionik",
          description: c.description,
          url: `${SITE_URL}${href("celebrations", lang)}`,
          maximumAttendeeCapacity: 400,
          telephone: phones.info.e164,
          containedInPlace: { "@id": hotelId },
        })}
      />
    </>
  );
}

/* ---------------------------------------------------------------- Restoran */
export const restaurantMetadata = (lang: Lang) =>
  pageMetadata(lang, "restaurant", getDict(lang).restaurant, img.restTerrace.src);

export function RestaurantPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const r = t.restaurant;
  return (
    <>
      <PageHero lang={lang} route="restaurant" pic={img.restTerrace} {...r.hero} />
      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.restInside12} inset={img.waiter} eyebrow={r.ambience.eyebrow} title={r.ambience.title}>
            <div className="prose">{r.ambience.p.map((p) => <p key={p}>{p}</p>)}</div>
            <Facts items={r.facts} />
          </Feature>
          <Feature lang={lang} reverse pic={img.fish5} inset={img.starter} eyebrow={r.menu.eyebrow} title={r.menu.title}>
            <div className="prose">{r.menu.p.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <a className="btn btn--solid" href={phones.restaurant.href}>{r.cta} · {phones.restaurant.label}</a>
              <a className="btn btn--ghost" href="/assets/hotel-svetionik-jelovnik.pdf" target="_blank" rel="noopener">{r.menu.pdf}</a>
            </div>
          </Feature>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="food-gallery">
        <div className="container">
          <SectionHead eyebrow={t.nav.gallery} title={t.galleryPage.albums.food} id="food-gallery" />
          <Gallery images={lite(galleryAlbums.food)} limit={12} alt={t.galleryPage.albums.food} mosaic labels={labels(lang)} />
          <p className="center" style={{ marginTop: 40 }}>
            <Link className="btn btn--ghost" href={`${href("gallery", lang)}#hrana`}>{t.ui.viewGallery}</Link>
          </p>
        </div>
      </section>
      <OtherServices lang={lang} current="restaurant" />
      <JsonLd data={graph(restaurantSchema(lang))} />
    </>
  );
}

/* ---------------------------------------------------------------- Vinski podrum */
export const wineCellarMetadata = (lang: Lang) =>
  pageMetadata(lang, "wineCellar", getDict(lang).wineCellar, img.cellar3.src);

export function WineCellarPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const w = t.wineCellar;
  return (
    <>
      <PageHero lang={lang} route="wineCellar" pic={img.cellar3} {...w.hero} />
      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.cellarHall1} inset={img.cellar7} eyebrow={t.nav.wineCellar} title={w.hero.title}>
            <div className="prose">{w.p.map((p) => <p key={p}>{p}</p>)}</div>
            <Facts items={w.facts} />
          </Feature>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="cellar-gallery">
        <div className="container">
          <SectionHead eyebrow={w.events.eyebrow} title={w.events.title} text={w.events.text} id="cellar-gallery" />
          <Gallery images={lite(galleryAlbums.wineCellar)} alt={t.nav.wineCellar} mosaic labels={labels(lang)} />
        </div>
      </section>
      <CtaBand lang={lang} title={w.events.title} text={w.events.text} phone={phones.info} />
      <OtherServices lang={lang} current="wineCellar" />
    </>
  );
}

/* ---------------------------------------------------------------- Marina */
export const marinaMetadata = (lang: Lang) =>
  pageMetadata(lang, "marina", getDict(lang).marina, img.marina.src);

export function MarinaPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const m = t.marina;
  return (
    <>
      <PageHero lang={lang} route="marina" pic={img.marina} {...m.hero} />
      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.marina4} inset={img.marina2} eyebrow={t.nav.marina} title={m.hero.title}>
            <div className="prose">{m.p.map((p) => <p key={p}>{p}</p>)}</div>
            <Facts items={m.facts} />
            <a className="btn btn--solid" href={phones.info.href}>{t.ui.call} · {phones.info.label}</a>
          </Feature>
        </div>
      </section>
      <OtherServices lang={lang} current="marina" />
      <JsonLd
        data={graph({
          "@type": "Place",
          "@id": `${SITE_URL}${href("marina", lang)}#marina`,
          name: lang === "sr" ? "Brodska marina — Hotel Svetionik" : "Boat marina — Hotel Svetionik",
          description: m.description,
          url: `${SITE_URL}${href("marina", lang)}`,
          telephone: phones.info.e164,
          containedInPlace: { "@id": hotelId },
        })}
      />
    </>
  );
}
