import Image from "next/image";
import { useRouter } from "next/router";
import svetionik from "../../public/images/hotel/hotel-svetionik-5.jpg";
import svetionik2 from "../../public/images/hotel/hotel-svetionik-medium.jpg";
import svetionik3 from "../../public/images/food/food-rakija-3.jpg";
import NavigationButton from "../NavigationButton/NavigationButton";
import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionAboutHotel = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <section className="section section-about-hotel">
      <h2 className="heading-secondary">{t.sections.aboutUs.heading}</h2>

      <div className="section-about-hotel__content">
        <div className="section-about-hotel__content--text-and-button">
          <div className="section-about-hotel__content--text">
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
        <div className="section-about-hotel__content--images">
          <div className="section-about-hotel__horizontal-images-wrapper">
            <Image
              src={svetionik2}
              style={{ height: "auto" }}
              alt="Hotel Svetionik"
            />
            <Image
              src={svetionik3}
              style={{ height: "auto" }}
              alt="Hotel Svetionik"
            />
          </div>

          <Image
            src={svetionik}
            style={{ height: "auto" }}
            alt="Hotel Svetionik"
            className="section-about-hotel__vertical-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionAboutHotel;
