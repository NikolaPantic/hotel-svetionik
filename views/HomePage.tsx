import Link from "next/link";
import { Faq, SectionHead, Tiles, stagger } from "@/components/blocks";
import { CountUp } from "@/components/CountUp";
import { HeroSwap } from "@/components/HeroSwap";
import { Split } from "@/components/Split";
import { HoverFeature } from "@/components/HoverFeature";
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
const roomPic = { standardRoom: img.singleCard, extraBedRoom: img.doubleCard, superiorSuite: img.superiorCard };

export default function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const h = t.home;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <HeroSwap
        image={img.hotelExterior.src}
        alt={img.hotelExterior.alt[lang]}
        navLabel={t.nav.services}
        words={[
          { href: href("rooms", lang), label: lang === "sr" ? "Boravak" : "Stay", image: img.superiorWide.src, alt: img.superiorWide.alt[lang] },
          { href: href("celebrations", lang), label: lang === "sr" ? "Proslave" : "Celebrate", image: img.banquetBg.src, alt: img.banquetBg.alt[lang] },
          { href: href("restaurant", lang), label: lang === "sr" ? "Trpeza" : "Dine", image: img.restTerrace.src, alt: img.restTerrace.alt[lang] },
        ]}
      >
        <p className="eyebrow">{h.hero.eyebrow}</p>
        <h1 id="hero-title">
          <span className="split-intro"><Split text={h.hero.title} /></span>
          <span className="hero__sub">{h.hero.sub}</span>
        </h1>
      </HeroSwap>

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
          <p className="reveal" style={{ ...stagger(3), marginTop: 30 }}>
            <Link className="btn btn--ghost" href={href("about", lang)}>{t.ui.moreAbout}</Link>
          </p>
        </div>
      </section>

      {/* ---------- Smeštaj (lista linkova + uokvirena slika) ---------- */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="stay-title">
        <div className="container">
          <HoverFeature
            reverse
            image={img.superiorWide.src}
            alt={img.superiorWide.alt[lang]}
            items={[
              ...roomKeys.map((k) => ({ href: href(k, lang), label: t[k].name, image: roomPic[k].src, alt: roomPic[k].alt[lang] })),
              { href: href("stay", lang), label: t.nav.stay, image: img.hotelSide.src, alt: img.hotelSide.alt[lang] },
            ]}
            intro={
              <>
                <p className="eyebrow">{h.rooms.eyebrow}</p>
                <h2 className="title split-title" id="stay-title"><Split text={h.rooms.title} /></h2>
                <span className="rule" />
                <p className="muted">{h.rooms.text}</p>
              </>
            }
            footer={<Link className="btn btn--solid" href={href("rooms", lang)}>{t.ui.viewAll}</Link>}
          />
        </div>
      </section>

      {/* ---------- Brojevi ---------- */}
      <section className="section--deep stats-band" aria-label={lang === "sr" ? "Hotel u brojevima" : "The hotel in numbers"}>
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
          <HoverFeature
            reverse
            image={img.banquetBg.src}
            alt={img.banquetBg.alt[lang]}
            items={[
              { href: href("weddings", lang), label: t.nav.weddings, image: img.wedding.src, alt: img.wedding.alt[lang] },
              { href: href("privateParties", lang), label: t.nav.privateParties, image: img.banquet13.src, alt: img.banquet13.alt[lang] },
              { href: href("celebrations", lang), label: t.nav.celebrations, image: img.banquetBlack.src, alt: img.banquetBlack.alt[lang] },
              { href: href("wineCellar", lang), label: t.nav.wineCellar, image: img.cellarParty2.src, alt: img.cellarParty2.alt[lang] },
            ]}
            intro={
              <>
                <p className="eyebrow">{h.events.eyebrow}</p>
                <h2 className="title split-title" id="events-title"><Split text={h.events.title} /></h2>
                <span className="rule" />
                <p>{h.events.text}</p>
              </>
            }
            footer={<a className="btn btn--solid" href={phones.info.href}>{t.ui.call} · {phones.info.label}</a>}
          />
        </div>
      </section>

      {/* ---------- Restoran ---------- */}
      <section className="section" aria-labelledby="restaurant-title">
        <div className="container">
          <HoverFeature
            arch
            image={img.restInside12.src}
            alt={img.restInside12.alt[lang]}
            items={[
              { href: href("menu", lang), label: t.nav.menu, image: img.specialty.src, alt: img.specialty.alt[lang] },
              { href: href("restaurant", lang), label: t.nav.restaurant, image: img.restTerrace.src, alt: img.restTerrace.alt[lang] },
              { href: href("wineCellar", lang), label: t.nav.wineCellar, image: img.cellar3.src, alt: img.cellar3.alt[lang] },
              { href: href("marina", lang), label: t.nav.marina, image: img.marina.src, alt: img.marina.alt[lang] },
            ]}
            intro={
              <>
                <p className="eyebrow">{h.restaurant.eyebrow}</p>
                <h2 className="title split-title" id="restaurant-title"><Split text={h.restaurant.title} /></h2>
                <span className="rule" />
                <p>{h.restaurant.text}</p>
              </>
            }
            footer={<a className="btn btn--solid" href={phones.restaurant.href}>{t.restaurant.cta} · {phones.restaurant.label}</a>}
          />
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
          <div className="stack">
            <p className="eyebrow">{h.location.eyebrow}</p>
            <h2 className="title split-title" id="location-title"><Split text={h.location.title} /></h2>
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
