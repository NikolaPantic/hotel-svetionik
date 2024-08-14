import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mainBackground from "../../public/images/hotel/hotel-svetionik-1.jpg";
import room from "../../public/images/rooms/superior/superior-room-2.jpg";
import banquetHallImage from "../../public/images/celebrations/banquet-hall-background.jpg";
import food from "../../public/images/food/food-fish-4.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";
import Image from "next/image";

const HeroSection = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const [background, setBackground] = useState("");

  const navigationItems = [
    {
      name: t.common.rooms,
      id: "accomodation",
      url: "/usluge/sobe",
      imageSrc: room.src,
    },
    {
      name: t.common.celebrations,
      id: "wedding",
      url: "/usluge/proslave",
      imageSrc: banquetHallImage.src,
    },
    {
      name: t.common.restaurant,
      id: "restaurant",
      url: "/usluge/restoran",
      imageSrc: food.src,
    },
  ];

  const renderNavigationItems = () => {
    return navigationItems.map((item) => (
      <li className="hero-section__navigation-items__item" key={item.id}>
        <a
          href={item.url}
          id={item.id}
          key={item.id}
          onMouseEnter={() => {
            setBackground(item.id);
          }}
          onMouseLeave={() => setBackground("")}
        >
          {item.name}
        </a>
      </li>
    ));
  };

  return (
    // <Carousel
    //   showStatus={false}
    //   showThumbs={false}
    //   showArrows={false}
    //   infiniteLoop={true}
    //   autoPlay={true}
    //   interval={6000}
    //   stopOnHover={false}
    //   useKeyboardArrows={true}
    // >
    //   <div className="carousel__item carousel__item--1">
    //     <div className="carousel__item--text">
    //       <div className="carousel__item--heading">
    //         <h1 className="heading-primary">Hotel Svetionik Obrenovac</h1>
    //         <span className="sub-heading">{t.carousel.slide1Subheading}</span>
    //       </div>
    //       <ReservationLink labelText={t.buttons.moreAboutUs} path="/o-nama" />
    //     </div>
    //   </div>
    //   <div className="carousel__item carousel__item--2">
    //     <div className="carousel__item--text">
    //       <div className="carousel__item--heading">
    //         <h2 className="heading-primary">{t.carousel.slide2Heading}</h2>
    //         <span className="sub-heading">{t.carousel.slide2Subheading}</span>
    //       </div>
    //       <ReservationLink
    //         labelText={t.buttons.weddingHalls}
    //         path="/usluge/proslave"
    //       />
    //     </div>
    //   </div>
    //   <div className="carousel__item carousel__item--3">
    //     <div className="carousel__item--text">
    //       <div className="carousel__item--heading">
    //         <h2 className="heading-primary">{t.carousel.slide3Heading}</h2>
    //         <span className="sub-heading">{t.carousel.slide3Subheading}</span>
    //       </div>
    //       <ReservationLink
    //         labelText={t.buttons.findOutMore}
    //         path="/usluge/restoran"
    //       />
    //     </div>
    //   </div>
    //   <div className="carousel__item carousel__item--4">
    //     <div className="carousel__item--text">
    //       <div className="carousel__item--heading">
    //         <h2 className="heading-primary">{t.carousel.slide4Heading}</h2>
    //         <span className="sub-heading">{t.carousel.slide4Subheading}</span>
    //       </div>
    //       <ReservationLink
    //         labelText={t.buttons.checkOutRooms}
    //         path="/usluge/sobe"
    //       />
    //     </div>
    //   </div>
    // </Carousel>

    <div className="hero-section">
      <div className="background-image-container">
        <Image src={mainBackground.src} alt="Hotel Svetionik" fill priority />
      </div>

      <div className="hero-section__title-and-navigation">
        <h1 className="hero-section__title">Hotel Svetionik Obrenovac</h1>

        <nav className="hero-section__navigation">
          <ul className="hero-section__navigation-items">
            {renderNavigationItems()}
          </ul>
        </nav>
      </div>

      <div className="alternative-background-images">
        {navigationItems.map((image) => (
          <Image
            key={image.id}
            src={image.imageSrc}
            alt={`Hotel Svetionik ${image.name}`}
            className={background === image.id ? "active" : ""}
            fill
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
