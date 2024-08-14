import Image from "next/image";
import singleRoom from "../../public/images/rooms/single/single-room-card.jpg";
import doubleRoom from "../../public/images/rooms/double/double-room-card.jpg";
import superiorRoom from "../../public/images/rooms/superior/superior-room-1.jpg";
import celebration from "../../public/images/celebrations/banquet-hall-black-medium.jpg";
import restaurant from "../../public/images/restaurant/restaurant-outside-17-medium.jpg";
import boatMarina from "../../public/images/boat-marina/boat-marina-medium.jpg";
import wineCellar from "../../public/images/wine-cellar/wine-cellar-3-medium.jpg";
import TranslatedLink from "../TranslatedLink/TranslatedLink";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const ServicesSubmenu = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <div className="services-submenu">
      <div className="services-submenu__rooms">
        <h2 className="services-submenu__rooms-heading">
          {t.common.roomBooking}
        </h2>
        <div className="services-submenu__room-cards">
          <TranslatedLink
            className="services-submenu__room-card"
            href={"/usluge/sobe/standardna-soba"}
          >
            <div className="services-submenu__room-image">
              <Image src={singleRoom} alt="Image 1" />
            </div>
            <h3 className="services-submenu__card-heading">
              {t.common.standardRoom}
            </h3>
          </TranslatedLink>
          <TranslatedLink
            className="services-submenu__room-card"
            href={"/usluge/sobe/soba-sa-dodatnim-lezajem"}
          >
            <div className="services-submenu__room-image">
              <Image src={doubleRoom} alt="Image 2" />
            </div>
            <h3 className="services-submenu__card-heading">
              {t.common.roomWithExtraBed}
            </h3>
          </TranslatedLink>
          <TranslatedLink
            className="services-submenu__room-card"
            href={"/usluge/sobe/superior-apartman-sa-djakuzijem"}
          >
            <div className="services-submenu__room-image">
              <Image src={superiorRoom} alt="Image 3" />
            </div>
            <h3 className="services-submenu__card-heading">
              {t.common.superiorApartment}
            </h3>
          </TranslatedLink>
        </div>
      </div>

      <div className="services-submenu__other-services">
        <h2>{t.sections.additionalServices.heading}</h2>
        <div className="services-submenu__service-cards">
          <TranslatedLink
            className="services-submenu__service-card"
            href="/usluge/proslave"
          >
            <Image src={celebration} alt="Hotel Svetionik banket sala" />
            <div className="services-submenu__service-description">
              <h3 className="services-submenu__card-heading">
                {t.common.celebrations}
              </h3>
              <p>{t.common.submenuCelebrationsDescription}</p>
            </div>
          </TranslatedLink>
          <TranslatedLink
            className="services-submenu__service-card"
            href="/usluge/restoran"
          >
            <Image src={restaurant} alt="Hotel Svetionik restoran" />
            <div className="services-submenu__service-description">
              <h3 className="services-submenu__card-heading">
                {t.common.restaurant}
              </h3>
              <p>{t.common.submenuRestaurantDescription}</p>
            </div>
          </TranslatedLink>
          <TranslatedLink
            className="services-submenu__service-card"
            href="/usluge/brodska-marina"
          >
            <Image
              src={boatMarina}
              alt="Hotel Svetionik pristanište za brodove"
            />
            <div className="services-submenu__service-description">
              <h3 className="services-submenu__card-heading">
                {t.common.shipMarina}
              </h3>
              <p>{t.common.submenuMarinaDescription}</p>
            </div>
          </TranslatedLink>
          <TranslatedLink
            className="services-submenu__service-card"
            href="/usluge/vinski-podrum"
          >
            <Image src={wineCellar} alt="Hotel Svetionik vinski podrum" />
            <div className="services-submenu__service-description">
              <h3 className="services-submenu__card-heading">
                {t.common.wineCellar}
              </h3>
              <p>{t.common.submenuWineCellarDescription}</p>
            </div>
          </TranslatedLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesSubmenu;
