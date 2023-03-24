import React from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReservationLink from "../ReservationLink/ReservationLink";
import en from "../../locales/en";
import sr from "../../locales/sr";

const CarouselComponent = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={6000}
      stopOnHover={false}
      useKeyboardArrows={true}
    >
      <div className="carousel__item carousel__item--1">
        <div className="carousel__item--text">
          <div className="carousel__item--heading">
            <h1 className="heading-primary">Hotel Svetionik Obrenovac</h1>
            <span className="sub-heading">{t.carousel.slide1Subheading}</span>
          </div>
          <ReservationLink labelText={t.buttons.moreAboutUs} path="/o-nama" />
        </div>
      </div>
      <div className="carousel__item carousel__item--2">
        <div className="carousel__item--text">
          <div className="carousel__item--heading">
            <h2 className="heading-primary">{t.carousel.slide2Heading}</h2>
            <span className="sub-heading">{t.carousel.slide2Subheading}</span>
          </div>
          <ReservationLink
            labelText={t.buttons.weddingHalls}
            path="/usluge/proslave"
          />
        </div>
      </div>
      <div className="carousel__item carousel__item--3">
        <div className="carousel__item--text">
          <div className="carousel__item--heading">
            <h2 className="heading-primary">{t.carousel.slide3Heading}</h2>
            <span className="sub-heading">{t.carousel.slide3Subheading}</span>
          </div>
          <ReservationLink
            labelText={t.buttons.findOutMore}
            path="/usluge/restoran"
          />
        </div>
      </div>
      <div className="carousel__item carousel__item--4">
        <div className="carousel__item--text">
          <div className="carousel__item--heading">
            <h2 className="heading-primary">{t.carousel.slide4Heading}</h2>
            <span className="sub-heading">{t.carousel.slide4Subheading}</span>
          </div>
          <ReservationLink
            labelText={t.buttons.checkOutRooms}
            path="/usluge/sobe"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
