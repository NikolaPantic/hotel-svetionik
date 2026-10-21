import { PageHero } from "@/components/blocks";
import { Gallery } from "@/components/Gallery";
import { getDict } from "@/content";
import { galleryAlbums, img, type AlbumKey, lite } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const galleryMetadata = (lang: Lang) =>
  pageMetadata(lang, "gallery", getDict(lang).galleryPage);

/** Sidra su ista kao na starom sajtu (/galerija#proslave …). */
const albums: { key: AlbumKey; id: string }[] = [
  { key: "celebrations", id: "proslave" },
  { key: "restaurant", id: "restoran" },
  { key: "food", id: "hrana" },
  { key: "wineCellar", id: "vinski-podrum" },
  { key: "rooms", id: "sobe" },
  { key: "hotel", id: "hotel" },
];

export default function GalleryPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const g = t.galleryPage;
  const labels = { close: t.ui.closeGallery, prev: t.ui.prev, next: t.ui.next, photo: t.ui.photo, of: t.ui.of };
  return (
    <>
      <PageHero lang={lang} route="gallery" pic={img.banquetBlack} {...g.hero} />
      <nav className="album-nav" aria-label={t.nav.gallery}>
        <ul className="container">
          {albums.map(({ key, id }) => (
            <li key={id}><a href={`#${id}`}>{g.albums[key]}</a></li>
          ))}
        </ul>
      </nav>
      <div className="section">
        <div className="container">
          {albums.map(({ key, id }) => (
            <section className="album" id={id} key={id} aria-labelledby={`${id}-title`} style={{ scrollMarginTop: "calc(var(--header-h) + 70px)" }}>
              <div className="album__head">
                <h2 className="title title--sm" id={`${id}-title`}>{g.albums[key]}</h2>
                <span>{galleryAlbums[key].length}</span>
              </div>
              <Gallery images={lite(galleryAlbums[key], lang)} alt={`${g.albums[key]} — Hotel Svetionik`} labels={labels} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
