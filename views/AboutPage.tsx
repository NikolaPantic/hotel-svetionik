import Link from "next/link";
import { Feature, Framed, OtherServices, PageHero, SectionHead, stagger } from "@/components/blocks";
import { MapEmbed } from "@/components/MapEmbed";
import { getDict } from "@/content";
import { galleryAlbums, img } from "@/lib/images";
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

      <section className="section section--deep" aria-labelledby="values-title">
        <div className="container">
          <SectionHead eyebrow={a.values.eyebrow} title={a.values.title} id="values-title" />
          <ol className="values">
            {a.values.items.map(([title, text], i) => (
              <li className="reveal" style={stagger(i)} key={title}>
                <span className="values__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </li>
            ))}
          </ol>
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
          <div className="duo duo--3">
            {([["car", img.hotelSide], ["bus", img.hotelFront], ["river", img.marina4]] as const).map(([k, pic], i) => (
              <figure key={k}>
                <Framed lang={lang} pic={pic} sizes="(max-width: 860px) 100vw, 33vw" variant={i === 1 ? "deep" : "wine"} />
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

      <section className="section section--alt" aria-labelledby="area-title">
        <div className="container">
          <Feature lang={lang} pic={galleryAlbums.hotel[10]} eyebrow={a.area.eyebrow} title={a.area.title} id="area-title" arch>
            <div className="prose">{a.area.p.map((p) => <p key={p}>{p}</p>)}</div>
          </Feature>
        </div>
      </section>

      <OtherServices lang={lang} current="about" />
    </>
  );
}
