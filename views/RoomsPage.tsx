import { CtaBand, OtherServices, PageHero, RoomCards } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { getDict } from "@/content";
import { img, roomGalleries } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import { graph, pageMetadata, roomSchema } from "@/lib/seo";
import { phones } from "@/lib/site";

export const roomsMetadata = (lang: Lang) => pageMetadata(lang, "rooms", getDict(lang).rooms, img.superiorWide.src);

export default function RoomsPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const r = t.rooms;
  return (
    <>
      <PageHero lang={lang} route="rooms" pic={img.superiorWide} {...r.hero} />
      <section className="section">
        <div className="container">
          <div className="container--narrow center prose reveal" style={{ margin: "0 auto clamp(56px, 7vw, 96px)" }}>
            <p className="lead" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>{r.intro[0]}</p>
            <span className="rule" />
            <p className="muted">{r.intro[1]}</p>
          </div>
          <RoomCards lang={lang} headingLevel={2} />
          <h2 className="visually-hidden">{r.amenitiesTitle}</h2>
          <ul className="amenities-line">{r.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
      </section>
      <CtaBand lang={lang} title={t.room.callForPrice} text={t.bookingPage.hero.sub} phone={phones.booking} />
      <OtherServices lang={lang} current="rooms" />
      <JsonLd
        data={graph(
          roomSchema(lang, "standardRoom", [...roomGalleries.standardRoom]),
          roomSchema(lang, "extraBedRoom", [...roomGalleries.extraBedRoom]),
          roomSchema(lang, "superiorSuite", [...roomGalleries.superiorSuite]),
        )}
      />
    </>
  );
}
