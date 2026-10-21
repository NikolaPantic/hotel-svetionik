import Image from "next/image";
import Link from "next/link";
import { Facts, Faq, Feature, RoomCards, SectionHead, Tiles } from "@/components/blocks";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { QuickBooking } from "@/components/QuickBooking";
import { Reviews } from "@/components/Reviews";
import { getDict } from "@/content";
import { galleryAlbums, img, lite } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { faqSchema, graph, pageMetadata, restaurantSchema } from "@/lib/seo";
import { ROOM_VALUES, address, email, phones } from "@/lib/site";

export const homeMetadata = (lang: Lang) => pageMetadata(lang, "home", getDict(lang).home);

const highlights = [
  galleryAlbums.hotel[1], galleryAlbums.restaurant[2], galleryAlbums.food[1], galleryAlbums.wineCellar[2],
  galleryAlbums.celebrations[1], galleryAlbums.hotel[9], galleryAlbums.food[19], galleryAlbums.hotel[5],
];

export default function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const h = t.home;

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <Image src={img.hotelExterior.src} alt={img.hotelExterior.alt[lang]} fill preload sizes="100vw" quality={60} placeholder="blur" />
        </div>
        <div className="container hero__content">
          <p className="eyebrow">{h.hero.eyebrow}</p>
          <h1 id="hero-title">
            {h.hero.title}
            <span className="hero__sub">{h.hero.sub}</span>
          </h1>
        </div>
        <span className="hero__scroll" aria-hidden="true" />
      </section>

      <QuickBooking
        action={href("booking", lang)}
        t={h.quick}
        rooms={ROOM_VALUES.map((value, i) => ({ value, label: t[(["standardRoom", "extraBedRoom", "superiorSuite"] as const)[i]].name }))}
      />

      <section className="section intro" aria-labelledby="intro-title">
        <div className="container">
          <h2 className="eyebrow reveal" id="intro-title">{h.intro.eyebrow}</h2>
          <p className="lead reveal" dangerouslySetInnerHTML={{ __html: h.intro.lead }} />
          <span className="rule" style={{ marginInline: "auto" }} />
          <p className="muted intro__body reveal">{h.intro.body}</p>
          <div className="intro__media">
            <figure className="reveal">
              <Image src={img.restTerrace.src} alt={img.restTerrace.alt[lang]} sizes="(max-width: 860px) 100vw, 60vw" placeholder="blur" />
              <figcaption>{h.intro.fig1}</figcaption>
            </figure>
            <figure className="reveal">
              <Image src={img.superiorWide.src} alt={img.superiorWide.alt[lang]} sizes="(max-width: 860px) 100vw, 40vw" placeholder="blur" />
              <figcaption>{h.intro.fig2}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="container">
        <ul className="stats">
          {h.stats.map(([n, l]) => (
            <li className="stat" key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className="section" aria-labelledby="rooms-title">
        <div className="container">
          <SectionHead eyebrow={h.rooms.eyebrow} title={h.rooms.title} text={h.rooms.text} id="rooms-title" />
          <RoomCards lang={lang} />
          <ul className="amenities-line">
            {t.rooms.amenities.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p className="center" style={{ marginTop: 40 }}>
            <Link className="btn btn--ghost" href={href("rooms", lang)}>{t.ui.viewAll}</Link>
          </p>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="events-title">
        <div className="container">
          <Feature lang={lang} pic={img.banquetBg} inset={img.banquet15} eyebrow={h.events.eyebrow} title={h.events.title} id="events-title">
            <p>{h.events.text}</p>
            <Facts items={h.events.facts} />
            <Link className="btn btn--ghost" href={href("celebrations", lang)}>{t.ui.learnMore}</Link>
          </Feature>
        </div>
      </section>

      <section className="section" aria-labelledby="restaurant-title">
        <div className="container">
          <Feature lang={lang} reverse pic={img.restInside12} inset={img.fish4} eyebrow={h.restaurant.eyebrow} title={h.restaurant.title} id="restaurant-title">
            <p>{h.restaurant.text}</p>
            <Facts items={t.restaurant.facts} />
            <div className="btn-row">
              <Link className="btn btn--ghost" href={href("restaurant", lang)}>{t.ui.learnMore}</Link>
              <a className="btn btn--solid" href={phones.restaurant.href}>{t.restaurant.cta}</a>
            </div>
          </Feature>
        </div>
      </section>

      <section className="section section--wine" aria-labelledby="exp-title">
        <div className="container">
          <SectionHead eyebrow={h.experiences.eyebrow} title={h.experiences.title} text={h.experiences.text} id="exp-title" />
          <Tiles
            lang={lang}
            items={[
              { route: "wineCellar", title: t.nav.wineCellar, text: h.experiences.items.wineCellar, pic: img.cellar3 },
              { route: "marina", title: t.nav.marina, text: h.experiences.items.marina, pic: img.marina },
              { route: "celebrations", title: h.experiences.weddingTitle, text: h.experiences.items.celebrations, pic: img.wedding },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <figure className="container quote reveal">
          <blockquote><p>{h.quote.text}</p></blockquote>
          <figcaption>— {h.quote.cite}</figcaption>
        </figure>
      </section>

      <section className="section section--alt" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHead eyebrow={h.gallery.eyebrow} title={h.gallery.title} id="gallery-title" />
          <Gallery
            images={lite(highlights, lang)}
            alt="Hotel Svetionik"
            mosaic
            labels={{ close: t.ui.closeGallery, prev: t.ui.prev, next: t.ui.next, photo: t.ui.photo, of: t.ui.of }}
          />
          <p className="center" style={{ marginTop: 40 }}>
            <Link className="btn btn--ghost" href={href("gallery", lang)}>{t.ui.viewGallery}</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="location-title">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">{h.location.eyebrow}</p>
            <h2 className="title" id="location-title">{h.location.title}</h2>
            <span className="rule" />
            <p className="muted">{h.location.text}</p>
            <ul className="contact-list">
              <li><span className="label">{t.phones.address}</span><strong>{address.street}, {address.postalCode} {address.city}</strong></li>
              <li><span className="label">{t.phones.booking}</span><a href={phones.booking.href}>{phones.booking.label}</a></li>
              <li><span className="label">{t.phones.restaurant}</span><a href={phones.restaurant.href}>{phones.restaurant.label}</a></li>
              <li><span className="label">{t.phones.info}</span><a href={phones.info.href}>{phones.info.label}</a></li>
              <li><span className="label">{t.phones.email}</span><a href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>
          <MapEmbed labels={{ show: t.ui.showMap, note: t.ui.mapNote, title: t.ui.mapTitle, open: t.ui.openMap }} />
        </div>
      </section>

      <Reviews lang={lang} />

      <section className="section section--alt" aria-labelledby="faq-title">
        <div className="container">
          <SectionHead eyebrow="FAQ" title={h.faqTitle} id="faq-title" />
          <Faq items={h.faq} />
        </div>
      </section>

      <JsonLd data={graph(restaurantSchema(lang), faqSchema(h.faq))} />
    </>
  );
}
