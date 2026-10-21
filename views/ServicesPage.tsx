import Link from "next/link";
import { CtaBand, Feature, PageHero } from "@/components/blocks";
import { getDict } from "@/content";
import { img, type Pic } from "@/lib/images";
import { href, type Lang, type RouteKey } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { phones } from "@/lib/site";

export const servicesMetadata = (lang: Lang) => pageMetadata(lang, "services", getDict(lang).services);

const rows: { key: "rooms" | "celebrations" | "restaurant" | "wineCellar" | "marina"; pic: Pic; inset: Pic }[] = [
  { key: "rooms", pic: img.superiorWide, inset: img.singleCard },
  { key: "celebrations", pic: img.banquetBg, inset: img.wedding },
  { key: "restaurant", pic: img.restTerrace, inset: img.starter },
  { key: "wineCellar", pic: img.cellar3, inset: img.cellar7 },
  { key: "marina", pic: img.marina, inset: img.marina4 },
];

export default function ServicesPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const s = t.services;
  return (
    <>
      <PageHero lang={lang} route="services" pic={img.banquetBlack} {...s.hero} />
      <section className="section">
        <div className="container">
          {rows.map(({ key, pic, inset }, i) => (
            <div className="service-row" key={key}>
              <Feature lang={lang} reverse={i % 2 === 1} pic={pic} inset={inset} eyebrow={s.taglines[key]} title={t.nav[key]}>
                <p>{s.items[key]}</p>
                <p style={{ marginTop: 30 }}>
                  <Link className="btn btn--ghost" href={href(key as RouteKey, lang)}>{t.ui.learnMore}</Link>
                </p>
              </Feature>
            </div>
          ))}
        </div>
      </section>
      <CtaBand lang={lang} title={t.nav.booking} text={t.bookingPage.hero.sub} phone={phones.booking} />
    </>
  );
}
