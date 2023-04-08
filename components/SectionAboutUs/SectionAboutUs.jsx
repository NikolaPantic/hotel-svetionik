import Image from "next/image";
import { useRouter } from "next/router";
import svetionik from "../../public/images/hotel/hotel-svetionik-medium.jpg";
import svetionik2 from "../../public/images/restaurant/restaurant-outside-menu-medium.jpg";
import svetionik3 from "../../public/images/wine-cellar/wine-cellar-wine-bottle-medium.jpg";
import NavigationButton from "../NavigationButton/NavigationButton";
import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionAboutUs = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <section className="section sectionaboutus" id="o-nama">
      <h2 className="heading-secondary">{t.sections.aboutUs.heading}</h2>

      <div className="sectionaboutus__content">
        <div className="sectionaboutus__content--text-and-button">
          <div className="sectionaboutus__content--text">
            <p>{t.sections.aboutUs.text1}</p>
            <p>{t.sections.aboutUs.text2}</p>
            <p>{t.sections.aboutUs.text3}</p>
            <p>{t.sections.aboutUs.text4}</p>
          </div>
          <NavigationButton
            navigationButtonLabel={t.buttons.details}
            darkMode={true}
            navigationButtonLink="/o-nama"
          />
        </div>
        <div className="sectionaboutus__content--images">
          <Image
            src={svetionik3}
            style={{ height: "auto" }}
            alt="Hotel Svetionik"
            className="sectionaboutus__content--image sectionaboutus__content--image--1"
          />
          <Image
            src={svetionik}
            style={{ height: "auto" }}
            alt="Hotel Svetionik"
            className="sectionaboutus__content--image sectionaboutus__content--image--2"
          />
          <Image
            src={svetionik2}
            style={{ height: "auto" }}
            alt="Hotel Svetionik"
            className="sectionaboutus__content--image sectionaboutus__content--image--3"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
