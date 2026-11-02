import Link from "next/link";
import { PageHero, RoomCards, SectionHead } from "@/components/blocks";
import { ChatLinks } from "@/components/ChatLinks";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { getDict } from "@/content";
import { img, roomGalleries, type Pic, lite } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import { graph, pageMetadata, roomSchema } from "@/lib/seo";
import { ROOM_VALUES, phones, roomPricesEur } from "@/lib/site";

export type RoomKey = "standardRoom" | "extraBedRoom" | "superiorSuite";

const heroPic: Record<RoomKey, Pic> = {
  standardRoom: img.singleCard,
  extraBedRoom: img.doubleCard,
  superiorSuite: img.superiorWide,
};
const formValue: Record<RoomKey, string> = {
  standardRoom: ROOM_VALUES[0],
  extraBedRoom: ROOM_VALUES[1],
  superiorSuite: ROOM_VALUES[2],
};

export const roomMetadata = (lang: Lang, key: RoomKey) =>
  pageMetadata(lang, key, getDict(lang)[key]);

export default function RoomPage({ lang, room }: { lang: Lang; room: RoomKey }) {
  const t = getDict(lang);
  const r = t[room];
  const images = roomGalleries[room];
  const bookHref = `${href("booking", lang)}?room=${encodeURIComponent(formValue[room])}#forma`;

  return (
    <>
      <PageHero lang={lang} route={room} pic={heroPic[room]} eyebrow={t.nav.rooms} title={r.name} sub={r.short} />

      <section className="section">
        <div className="container room-detail">
          <div>
            <div className="prose reveal">
              {r.p.map((p) => <p key={p}>{p}</p>)}
            </div>
            {"gift" in r && <p className="gift reveal">{r.gift}</p>}
            <h2 className="title title--sm" style={{ margin: "clamp(40px, 5vw, 64px) 0 28px" }}>{t.room.inRoom}</h2>
            <ul className="checklist">{r.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>

          <aside className="room-aside" aria-label={t.room.basicInfo}>
            <p className="eyebrow">{t.room.basicInfo}</p>
            {roomPricesEur[room] !== null && (
              <p className="room-price">
                <span>{t.price.from}</span> <strong>€{roomPricesEur[room]}</strong> <span>/ {t.price.perNight}</span>
              </p>
            )}
            <dl className="facts">
              <div><dt>{t.room.persons}</dt><dd>{r.persons}</dd></div>
              <div><dt>{t.room.bed}</dt><dd>{r.bed}</dd></div>
              <div><dt>{t.room.extraBed}</dt><dd>{r.extraBed}</dd></div>
              <div><dt>{t.room.jacuzzi}</dt><dd>{r.jacuzzi}</dd></div>
              <div><dt>{t.room.riverView}</dt><dd>{r.riverView}</dd></div>
              <div><dt>{t.nav.rooms}</dt><dd>{t.rooms.count[room]}</dd></div>
            </dl>
            <Link className="btn btn--solid" href={bookHref}>{t.room.bookThis}</Link>
            <p className="room-aside__note">
              {t.room.checkInOut}
              <br />
              {t.room.callForPrice}: <a href={phones.booking.href}>{phones.booking.label}</a>
            </p>
            <ChatLinks lang={lang} className="chat-links--center" />
          </aside>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="room-gallery">
        <div className="container">
          <SectionHead eyebrow={t.nav.gallery} title={r.name} id="room-gallery" />
          <Gallery
            images={lite(images)}
            alt={r.name}
            mosaic
            labels={{ close: t.ui.closeGallery, prev: t.ui.prev, next: t.ui.next, photo: t.ui.photo, of: t.ui.of }}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="other-rooms">
        <div className="container">
          <SectionHead eyebrow={t.nav.rooms} title={t.ui.otherRooms} id="other-rooms" />
          <RoomCards lang={lang} exclude={room} />
        </div>
      </section>

      <JsonLd data={graph(roomSchema(lang, room, [...images]))} />
    </>
  );
}
