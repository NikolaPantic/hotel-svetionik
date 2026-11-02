import Link from "next/link";
import { Feature, Framed, OtherServices, PageHero, SectionHead, stagger } from "@/components/blocks";
import { MapEmbed } from "@/components/MapEmbed";
import { getDict } from "@/content";
import { img } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const aboutMetadata = (lang: Lang) => pageMetadata(lang, "about", getDict(lang).about);

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const a = t.about;
  return (
    <>
      <PageHero lang={lang} route="about" pic={img.hotelFront} {...a.hero} />

      <section className="section">
        <div className="container">
          <Feature lang={lang} pic={img.hotelSide} eyebrow={a.story.eyebrow} title={a.story.title}>
            <div className="prose">{a.story.p.map((p) => <p key={p}>{p}</p>)}</div>
          </Feature>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Feature lang={lang} reverse pic={img.restTerrace} eyebrow={a.content.eyebrow} title={a.content.title}>
            <div className="prose">{a.content.p.map((p) => <p key={p}>{p}</p>)}</div>
            <p style={{ marginTop: 30 }}>
              <Link className="btn btn--ghost" href={href("services", lang)}>{t.nav.services}</Link>
            </p>
          </Feature>
        </div>
      </section>

      <section className="section" aria-labelledby="directions-title">
        <div className="container">
          <SectionHead eyebrow={a.directions.eyebrow} title={a.directions.title} text={a.directions.distance} id="directions-title" />
          <div className="duo">
            {([["car", img.driving], ["bus", img.bus]] as const).map(([k, pic]) => (
              <figure key={k}>
                <Framed lang={lang} pic={pic} sizes="(max-width: 860px) 100vw, 50vw" variant={k === "bus" ? "deep" : "wine"} />
                <h3 className="reveal">{a.directions[k].title}</h3>
                <p className="muted reveal" style={stagger(1)}>{a.directions[k].text}</p>
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
