import HotelContentCard from "../HotelContentCard/HotelContentCard";
import playground from "../../public/images/hotel/hotel-svetionik-playground.jpg";
import celebration from "../../public/images/celebrations/celebration-view.jpg";
import restaurant from "../../public/images/restaurant/restaurant-inside-13.jpg";
import jacuzzi from "../../public/svg/jacuzzi.svg";
import celebration1 from "../../public/svg/celebration.svg";
import restaurant1 from "../../public/svg/restaurant-red.svg";
import wine from "../../public/svg/wine.svg";
import marina from "../../public/svg/marina-red.svg";
import parking from "../../public/svg/parking.svg";
import playground1 from "../../public/svg/playground.svg";
import wedding from "../../public/svg/wedding-marry.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import sr from "../../locales/sr";
import en from "../../locales/en";
import Link from "next/link";

const SectionHotelContent = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <article className="section-hotel-content container">
      <h2 className="section-hotel-content__services-heading">
        {t.common.hotelContentHeading}
      </h2>
      <div className="section-hotel-content__main-content">
        <div className="section-hotel-content__services">
          <ul className="section-hotel-content__service-list">
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService1Heading}
                cardDescription={t.common.hotelService1Description}
                cardIcon={celebration1}
              />
            </li>
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService2Heading}
                cardDescription={t.common.hotelService2Description}
                cardIcon={restaurant1}
              />
            </li>
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService3Heading}
                cardDescription={t.common.hotelService3Description}
                cardIcon={jacuzzi}
              />
            </li>
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService4Heading}
                cardDescription={t.common.hotelService4Description}
                cardIcon={wine}
              />
            </li>
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService5Heading}
                cardDescription={t.common.hotelService5Description}
                cardIcon={marina}
              />
            </li>
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService6Heading}
                cardDescription={t.common.hotelService6Description}
                cardIcon={parking}
              />
            </li>
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService7Heading}
                cardDescription={t.common.hotelService7Description}
                cardIcon={playground1}
              />
            </li>
            <li>
              <HotelContentCard
                cardHeading={t.common.hotelService8Heading}
                cardDescription={t.common.hotelService8Description}
                cardIcon={wedding}
              />
            </li>
          </ul>

          <Link className="backlink" href="/usluge">
            {t.common.viewAllServices}
          </Link>
        </div>
        <div className="section-hotel-content__images">
          <Image
            src={restaurant}
            alt="Hotel Svetionik igraliste"
            className="section-hotel-content__image section-hotel-content__image--1"
          />
          <Image
            src={playground}
            alt="Hotel Svetionik"
            className="section-hotel-content__image section-hotel-content__image--2"
          />
          <Image
            src={celebration}
            alt="Hotel Svetionik"
            className="section-hotel-content__image section-hotel-content__image--3"
          />
        </div>
      </div>
    </article>
  );
};

export default SectionHotelContent;
