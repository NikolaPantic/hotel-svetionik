import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavigationButton from "../NavigationButton/NavigationButton";
import { FormContext } from "../../pages/_app";
import en from "../../locales/en";
import sr from "../../locales/sr";

const RoomCard = ({
  reversed = false,
  roomCardLink = "/",
  roomCardImage,
  roomCardHeading = "Room card Heading",
  roomCardText = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
}) => {
  const openForm = useContext(FormContext);
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <div
      className="roomcard"
      style={{ flexDirection: reversed ? "row-reverse" : "row" }}
    >
      <div className="roomcard__content">
        <h4 className="heading-small">{roomCardHeading}</h4>
        <p className="roomcard__content--text">{roomCardText}</p>
        <div className="roomcard__content--navigation">
          <button
            className="navigationbutton navigationbutton__dark"
            onClick={openForm}
          >
            {t.buttons.bookARoom}
          </button>
          <NavigationButton
            navigationButtonLabel={t.buttons.details}
            navigationButtonLink={roomCardLink}
          />
        </div>
      </div>
      <div className="roomcard__image">
        <Image
          src={roomCardImage}
          alt={`Hotel Svetionik ${roomCardHeading.toLowerCase()}`}
        />
        <NavigationButton
          navigationButtonLabel={t.buttons.checkOutGallery}
          navigationButtonLink="/galerija"
        />
      </div>
    </div>
  );
};

export default RoomCard;
