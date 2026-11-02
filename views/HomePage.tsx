import Image from "next/image";
import Link from "next/link";
import { Faq, Feature, SectionHead, Tiles, stagger } from "@/components/blocks";
import { CountUp } from "@/components/CountUp";
import { Instagram } from "@/components/Instagram";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { Awards, Offers } from "@/components/OffersAwards";
import { QuickBooking } from "@/components/QuickBooking";
import { Reviews } from "@/components/Reviews";
import { getDict } from "@/content";
import { img } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { faqSchema, graph, pageMetadata, restaurantSchema } from "@/lib/seo";
import { ROOM_VALUES, address, email, phones } from "@/lib/site";

export const homeMetadata = (lang: Lang) => pageMetadata(lang, "home", getDict(lang).home);

const roomKeys = ["standardRoom", "extraBedRoom", "superiorSuite"] as const;

export default function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const h = t.home;

  return (
    <>
      {/* ---------- Hero ---------- */}
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
          <nav aria-label={t.nav.services}>
            <ul className="hero__words">
              <li><Link href={href("rooms", lang)}>{lang === "sr" ? "Boravak" : "Stay"}</Link></li>
              <li><Link href={href("celebrations", lang)}>{lang === "sr" ? "Proslave" : "Celebrate"}</Link></li>
              <li><Link href={href("restaurant", lang)}>{lang === "sr" ? "Trpeza" : "Dine"}</Link></li>
            </ul>
          </nav>
        </div>
        <span className="hero__scroll" aria-hidden="true" />
      </section>

      <QuickBooking
        action={href("booking", lang)}
        t={h.quick}
        rooms={ROOM_VALUES.map((value, i) => ({ value, label: t[roomKeys[i]].name }))}
      />

      {/* ---------- Uvod ---------- */}
      <section className="section intro" aria-labelledby="intro-title">
        <div className="container">
          <h2 className="eyebrow reveal" id="intro-title">{h.intro.eyebrow}</h2>
          <p className="lead reveal" style={stagger(1)} dangerouslySetInnerHTML={{ __html: h.intro.lead }} />
          <span className="rule" />
          <p className="muted intro__body reveal" style={stagger(2)}>{h.intro.body}</p>
        </div>
      </section>

      {/* ---------- Smeštaj (lista linkova + uokvirena slika) ---------- */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="stay-title">
        <div className="container">
          <Feature lang={lang} reverse pic={img.superiorWide} eyebrow={h.rooms.eyebrow} title={h.rooms.title} id="stay-title">
            <p className="muted">{h.rooms.text}</p>
            <ul className="link-list">
              {roomKeys.map((k) => (
                <li key={k}><Link href={href(k, lang)}>{t[k].name}</Link></li>
              ))}
              <li><Link href={href("stay", lang)}>{t.nav.stay}</Link></li>
            </ul>
            <Link className="btn btn--solid" href={href("rooms", lang)}>{t.ui.viewAll}</Link>
          </Feature>
        </div>
      </section>

      {/* ---------- Brojevi ---------- */}
      <section className="section--deep" aria-label={lang === "sr" ? "Hotel u brojevima" : "The hotel in numbers"}>
        <div className="container">
          <ul className="stats">
            {h.stats.map(([n, l], i) => (
              <li className="stat reveal" style={stagger(i % 3)} key={l}>
                <CountUp value={n} />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Iskustva ---------- */}
      <section className="section" aria-labelledby="exp-title">
        <div className="container">
          <SectionHead eyebrow={h.experiences.eyebrow} title={h.experiences.title} text={h.experiences.text} id="exp-title" />
          <Tiles
            lang={lang}
            items={[
              { route: "weddings", title: h.experiences.weddingTitle, text: h.experiences.items.celebrations, pic: img.wedding },
              { route: "wineCellar", title: t.nav.wineCellar, text: h.experiences.items.wineCellar, pic: img.cellar3 },
              { route: "marina", title: t.nav.marina, text: h.experiences.items.marina, pic: img.marina },
            ]}
          />
        </div>
      </section>

      {/* ---------- Proslave ---------- */}
      <section className="section section--alt" aria-labelledby="events-title">
        <div className="container">
          <Feature lang={lang} reverse pic={img.banquetBg} eyebrow={h.events.eyebrow} title={h.events.title} id="events-title">
            <p>{h.events.text}</p>
            <ul className="link-list">
              <li><Link href={href("weddings", lang)}>{t.nav.weddings}</Link></li>
              <li><Link href={href("privateParties", lang)}>{t.nav.privateParties}</Link></li>
              <li><Link href={href("celebrations", lang)}>{t.nav.celebrations}</Link></li>
            </ul>
            <a className="btn btn--solid" href={phones.info.href}>{t.ui.call} · {phones.info.label}</a>
          </Feature>
        </div>
      </section>

      {/* ---------- Restoran ---------- */}
      <section className="section" aria-labelledby="restaurant-title">
        <div className="container">
          <Feature lang={lang} pic={img.restInside12} eyebrow={h.restaurant.eyebrow} title={h.restaurant.title} id="restaurant-title" arch>
            <p>{h.restaurant.text}</p>
            <ul className="link-list">
              <li><Link href={href("menu", lang)}>{t.nav.menu}</Link></li>
              <li><Link href={href("restaurant", lang)}>{t.nav.restaurant}</Link></li>
              <li><Link href={href("wineCellar", lang)}>{t.nav.wineCellar}</Link></li>
            </ul>
            <a className="btn btn--solid" href={phones.restaurant.href}>{t.restaurant.cta} · {phones.restaurant.label}</a>
          </Feature>
        </div>
      </section>

      <Offers lang={lang} />

      {/* ---------- Citat ---------- */}
      <section className="section section--wine">
        <figure className="container quote">
          <blockquote className="reveal"><p>{h.quote.text}</p></blockquote>
          <figcaption className="reveal" style={stagger(1)}>— {h.quote.cite}</figcaption>
        </figure>
      </section>

      <Awards lang={lang} />
      <Reviews lang={lang} />
      <Instagram lang={lang} />

      {/* ---------- Lokacija ---------- */}
      <section className="section section--alt" aria-labelledby="location-title">
        <div className="container split">
          <div className="reveal-left">
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

      {/* ---------- FAQ ---------- */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container">
          <SectionHead eyebrow="FAQ" title={h.faqTitle} id="faq-title" />
          <Faq items={h.faq} />
        </div>
      </section>

      <JsonLd data={graph(restaurantSchema(lang), faqSchema(h.faq))} />
    </>
  );
}
