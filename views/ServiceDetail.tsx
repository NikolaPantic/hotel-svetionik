import Link from "next/link";
import { CtaBand, Facts, Feature, OtherServices, PageHero, SectionHead, Tiles, stagger } from "@/components/blocks";
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
  pageMetadata(lang, "celebrations", getDict(lang).celebrations);

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
          <Feature lang={lang} pic={img.banquetBlack} eyebrow={c.banquet.eyebrow} title={c.banquet.title}>
            <div className="prose">{c.banquet.p.map((p) => <p key={p}>{p}</p>)}</div>
          </Feature>
          <Feature lang={lang} reverse pic={img.clubHall} eyebrow={c.club.eyebrow} title={c.club.title}>
            <div className="prose">{c.club.p.map((p) => <p key={p}>{p}</p>)}</div>
            <Facts items={c.facts} />
            <div className="btn-row">
              <Link className="btn btn--ghost" href={href("wineCellar", lang)}>{t.nav.wineCellar}</Link>
              <Link className="btn btn--ghost" href={href("restaurant", lang)}>{t.nav.restaurant}</Link>
            </div>
          </Feature>
        </div>
      </section>
      <section className="section" aria-labelledby="cel-steps">
        <div className="container">
          <SectionHead eyebrow={c.steps.eyebrow} title={c.steps.title} id="cel-steps" />
          <ol className="values values--steps">
            {c.steps.items.map(([title, text], i) => (
              <li className="reveal" style={stagger(i)} key={title}>
                <span className="values__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--wine" aria-labelledby="cel-types">
        <div className="container">
          <SectionHead eyebrow={c.hero.eyebrow} title={t.nav.celebrations} id="cel-types" />
          <Tiles
            lang={lang}
            items={[
              { route: "weddings", title: t.nav.weddings, text: t.landings.weddings.hero.sub, pic: img.wedding },
              { route: "privateParties", title: t.nav.privateParties, text: t.landings.privateParties.hero.sub, pic: img.banquet13 },
              { route: "wineCellar", title: t.nav.wineCellar, text: t.home.experiences.items.wineCellar, pic: img.cellarHall1 },
            ]}
          />
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="cel-gallery">
        <div className="container">
          <SectionHead eyebrow={t.nav.gallery} title={t.galleryPage.albums.celebrations} id="cel-gallery" />
          <Gallery images={lite(galleryAlbums.celebrations, lang)} limit={12} alt={t.galleryPage.albums.celebrations} mosaic labels={labels(lang)} />
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
  pageMetadata(lang, "restaurant", getDict(lang).restaurant);

export function RestaurantPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const r = t.restaurant;
  return (
    <>
      <PageHero lang={lang} route="restaurant" pic={img.restTerrace} {...r.hero} />
      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.restInside12} eyebrow={r.ambience.eyebrow} title={r.ambience.title}>
            <div className="prose">{r.ambience.p.map((p) => <p key={p}>{p}</p>)}</div>
            <Facts items={r.facts} />
          </Feature>
          <Feature lang={lang} reverse pic={img.fish5} eyebrow={r.menu.eyebrow} title={r.menu.title}>
            <div className="prose">{r.menu.p.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <a className="btn btn--solid" href={phones.restaurant.href}>{r.cta} · {phones.restaurant.label}</a>
              <Link className="btn btn--ghost" href={href("menu", lang)}>{r.menu.pdf}</Link>
            </div>
          </Feature>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="rest-groups">
        <div className="container">
          <Feature lang={lang} reverse pic={galleryAlbums.restaurant[13]} eyebrow={r.groups.eyebrow} title={r.groups.title} id="rest-groups">
            <div className="prose">{r.groups.p.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <a className="btn btn--solid" href={phones.restaurant.href}>{r.cta} · {phones.restaurant.label}</a>
              <Link className="btn btn--ghost" href={href("privateParties", lang)}>{t.nav.privateParties}</Link>
            </div>
          </Feature>
        </div>
      </section>

      <section className="section" aria-labelledby="food-gallery">
        <div className="container">
          <SectionHead eyebrow={t.nav.gallery} title={t.galleryPage.albums.food} id="food-gallery" />
          <Gallery images={lite(galleryAlbums.food, lang)} limit={12} alt={t.galleryPage.albums.food} mosaic labels={labels(lang)} />
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
  pageMetadata(lang, "wineCellar", getDict(lang).wineCellar);

export function WineCellarPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const w = t.wineCellar;
  return (
    <>
      <PageHero lang={lang} route="wineCellar" pic={img.cellar3} {...w.hero} />
      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.cellarHall1} eyebrow={t.nav.wineCellar} title={w.hero.title}>
            <div className="prose">{[...w.p, w.visit].map((p) => <p key={p}>{p}</p>)}</div>
            <Facts items={w.facts} />
          </Feature>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="cellar-gallery">
        <div className="container">
          <SectionHead eyebrow={w.events.eyebrow} title={w.events.title} text={w.events.text} id="cellar-gallery" />
          <Gallery images={lite(galleryAlbums.wineCellar, lang)} alt={t.nav.wineCellar} mosaic labels={labels(lang)} />
        </div>
      </section>
      <CtaBand lang={lang} title={w.events.title} text={w.events.text} phone={phones.info} />
      <OtherServices lang={lang} current="wineCellar" />
    </>
  );
}

/* ---------------------------------------------------------------- Marina */
export const marinaMetadata = (lang: Lang) =>
  pageMetadata(lang, "marina", getDict(lang).marina);

export function MarinaPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const m = t.marina;
  return (
    <>
      <PageHero lang={lang} route="marina" pic={img.marina} {...m.hero} />
      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.marina4} eyebrow={t.nav.marina} title={m.hero.title}>
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
