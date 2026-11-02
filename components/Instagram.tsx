import Image from "next/image";
import { getDict } from "@/content";
import { galleryAlbums } from "@/lib/images";
import { getInstagramPosts } from "@/lib/integrations/instagram";
import type { Lang } from "@/lib/routes";
import { social } from "@/lib/site";
import { stagger } from "./blocks";
import { InstagramIcon } from "./icons";

const HANDLE = "@svetionik_obrenovac_na_savi";

/** Placeholder: sopstvene fotografije hotela koje vode na Instagram profil. */
const fallback = [
  galleryAlbums.food[0], galleryAlbums.restaurant[0], galleryAlbums.celebrations[2],
  galleryAlbums.wineCellar[0], galleryAlbums.hotel[6], galleryAlbums.food[19],
];

/** Instagram objave (Instagram API). Bez tokena prikazuje se placeholder. */
export async function Instagram({ lang }: { lang: Lang }) {
  const t = getDict(lang).instagram;
  const posts = await getInstagramPosts(6);

  return (
    <section className="section" aria-labelledby="insta-title">
      <div className="container">
        <div className="insta-head">
          <div>
            <p className="eyebrow reveal">{t.eyebrow}</p>
            <h2 className="title reveal" style={stagger(1)} id="insta-title">{HANDLE}</h2>
          </div>
          <a className="btn btn--ghost reveal" style={stagger(2)} href={social.instagram} target="_blank" rel="noopener">
            {t.follow}
          </a>
        </div>

        <div className="insta">
          {posts && posts.length > 0
            ? posts.map((p, i) => (
                <a className="insta__item reveal" style={stagger(i % 3)} key={p.id} href={p.permalink} target="_blank" rel="noopener">
                  <Image src={p.image} alt={p.caption || `Instagram ${HANDLE}`} fill sizes="(max-width: 560px) 50vw, (max-width: 1100px) 33vw, 17vw" unoptimized />
                  <span className="insta__badge" aria-hidden="true"><InstagramIcon /></span>
                </a>
              ))
            : fallback.map((pic, i) => (
                <a className="insta__item reveal" style={stagger(i % 3)} key={pic.src.src} href={social.instagram} target="_blank" rel="noopener">
                  <Image src={pic.src} alt={pic.alt[lang]} fill sizes="(max-width: 560px) 50vw, (max-width: 1100px) 33vw, 17vw" quality={60} />
                  <span className="insta__badge" aria-hidden="true"><InstagramIcon /></span>
                </a>
              ))}
        </div>
        {!posts && <p className="placeholder-note muted reveal">{t.placeholder}</p>}
      </div>
    </section>
  );
}
