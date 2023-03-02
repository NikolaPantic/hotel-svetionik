import Image from "next/image";
import { useRouter } from "next/router";
import NavigationButton from "../NavigationButton/NavigationButton";
import en from "../../locales/en";
import sr from "../../locales/sr";

const GalleryAlbumCard = ({
  imageSrc = "",
  albumDescription = "Album description",
  albumCardNavigation = "/",
}) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <div className="galleryalbumcard">
      <div className="galleryalbumcard__image">
        <Image
          src={imageSrc}
          alt={`Hotel Svetionik ${albumDescription.toLowerCase()}`}
        />
      </div>

      <span className="galleryalbumcard__description">{albumDescription}</span>
      <NavigationButton
        navigationButtonLabel={t.buttons.checkOutGallery}
        navigationButtonLink={albumCardNavigation}
      />
    </div>
  );
};

export default GalleryAlbumCard;
