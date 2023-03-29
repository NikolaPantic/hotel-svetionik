import GalleryAlbumCard from "../GalleryAlbumCard/GalleryAlbumCard";
import NavigationLink from "../NavigationLink/NavigationLink";
import wineCellar from "../../public/images/wine-cellar/wine-cellar-hall-1.jpg";
import restaurant from "../../public/images/restaurant/restaurant-inside-4.jpg";
import food from "../../public/images/food/food-cake.jpg";
import weddingHall from "../../public//images/celebrations/banquet-hall-3.jpg";
import certificate from "../../public/images/certificate.jpg";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionGallery = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <section className="section sectiongallery">
      <h2 className="heading-secondary">{t.common.gallery}</h2>

      <div className="sectiongallery__albums">
        <GalleryAlbumCard
          imageSrc={weddingHall}
          albumDescription={t.common.weddingCelebrations}
          albumCardNavigation="/galerija#proslave"
        />
        <GalleryAlbumCard
          imageSrc={restaurant}
          albumDescription={t.common.restaurant}
          albumCardNavigation="/galerija#vinski-podrum"
        />
        <GalleryAlbumCard
          imageSrc={food}
          albumDescription={t.common.food}
          albumCardNavigation={`/galerija#hrana`}
        />
        <GalleryAlbumCard
          imageSrc={wineCellar}
          albumDescription={t.common.wineCellar}
          albumCardNavigation="/galerija#restoran"
        />
        {/* <GalleryAlbumCard
          imageSrc={certificate}
          albumDescription={t.common.awards}
          albumCardNavigation="/galerija#nagrade"
        /> */}
      </div>

      <NavigationLink
        navigationLinkLabel={t.buttons.checkOutAll}
        path="/galerija"
      />
    </section>
  );
};

export default SectionGallery;
