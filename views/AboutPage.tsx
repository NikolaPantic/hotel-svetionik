import Image from "next/image";
import Link from "next/link";
import { Feature, OtherServices, PageHero } from "@/components/blocks";
import { MapEmbed } from "@/components/MapEmbed";
import { getDict } from "@/content";
import { img } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const aboutMetadata = (lang: Lang) => pageMetadata(lang, "about", getDict(lang).about, img.hotelFront.src);

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const a = t.about;
  return (
    <>
      <PageHero lang={lang} route="about" pic={img.hotelFront} {...a.hero} />

      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.hotelSide} inset={img.hotelTower} eyebrow={a.story.eyebrow} title={a.story.title}>
            <div className="prose">{a.story.p.map((p) => <p key={p}>{p}</p>)}</div>
          </Feature>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Feature lang={lang} reverse pic={img.restTerrace} inset={img.breakfast} eyebrow={a.content.eyebrow} title={a.content.title}>
            <div className="prose">{a.content.p.map((p) => <p key={p}>{p}</p>)}</div>
            <p style={{ marginTop: 30 }}>
              <Link className="btn btn--ghost" href={href("services", lang)}>{t.nav.services}</Link>
            </p>
          </Feature>
        </div>
      </section>

      <section className="section" aria-labelledby="directions-title">
        <div className="container">
          <header className="section-head center">
            <p className="eyebrow">{a.directions.eyebrow}</p>
            <h2 className="title" id="directions-title">{a.directions.title}</h2>
            <span className="rule" />
            <p className="muted">{a.directions.distance}</p>
          </header>
          <div className="duo">
            {([["car", img.driving], ["bus", img.bus]] as const).map(([k, pic]) => (
              <figure className="reveal" key={k}>
                <Image src={pic.src} alt={pic.alt[lang]} sizes="(max-width: 860px) 100vw, 50vw" placeholder="blur" />
                <h3>{a.directions[k].title}</h3>
                <p className="muted">{a.directions[k].text}</p>
              </figure>
            ))}
          </div>
          <div style={{ marginTop: "clamp(48px, 6vw, 80px)" }}>
            <MapEmbed labels={{ show: t.ui.showMap, note: t.ui.mapNote, title: t.ui.mapTitle, open: t.ui.openMap }} />
          </div>
        </div>
      </section>

      <OtherServices lang={lang} current="about" />
    </>
  );
}
