import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import svetionik from "../../public/images/restaurant/restaurant-inside-12-medium.jpg";
import svetionik1 from "../../public/images/food/food-fish-4-medium.jpg";
import svetionik2 from "../../public/images/celebrations/banquet-hall-16-medium.jpg";
import svetionik3 from "../../public/images/rooms/common/hotel-svetionik-room-medium.jpg";
import svetionik4 from "../../public/images/celebrations/banquet-hall-15-medium.jpg";
import svetionik5 from "../../public/images/wine-cellar/wine-cellar-1-medium.jpg";
import svetionik6 from "../../public/images/celebrations/banquet-hall-black-medium.jpg";
import svetionik7 from "../../public/images/restaurant/restaurant-outside-17-medium.jpg";
import testLogo from "../../public/svg/glass.svg";
import en from "../../locales/en";
import sr from "../../locales/sr";
import { Carousel } from "react-responsive-carousel";

const SectionAboutUs = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <section className="section section-about-us  container" id="o-nama">
      <div className="section-about-us__intro">
        <p className="section-about-us__intro-image">
          {t.common.introTextHeading}
        </p>
        <p className="section-about-us__intro-text">{t.common.introText1}</p>
        <p className="section-about-us__intro-text">{t.common.introText2} </p>
      </div>

      <Carousel
        className="section-about-us__carousel"
        centerMode
        centerSlidePercentage={50}
        showArrows
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={1500}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
      >
        <Image
          className="carousel-item"
          src={svetionik6}
          alt="Hotel Svetionik"
        />
        <Image
          className="carousel-item"
          src={svetionik}
          alt="Hotel Svetionik"
        />
        <Image
          className="carousel-item"
          src={svetionik7}
          alt="Hotel Svetionik"
        />
        <Image
          className="carousel-item"
          src={svetionik4}
          alt="Hotel Svetionik"
        />
        <Image
          className="carousel-item"
          src={svetionik2}
          alt="Hotel Svetionik"
        />
        <Image
          className="carousel-item"
          src={svetionik3}
          alt="Hotel Svetionik"
        />
      </Carousel>
    </section>
  );
};

export default SectionAboutUs;
