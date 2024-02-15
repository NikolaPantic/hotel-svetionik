import Image from "next/image";
import { useRouter } from "next/router";
import svetionik from "../../public/images/celebrations/banquet-hall-14.jpg";
import svetionik2 from "../../public/images/food/food-rakija-3.jpg";
import svetionik3 from "../../public/images/wine-cellar/wine-cellar-wine-bottle-medium.jpg";
import NavigationButton from "../NavigationButton/NavigationButton";
import en from "../../locales/en";
import sr from "../../locales/sr";

const sectionAboutUs = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <section className="section section-about-us  container" id="o-nama">
      <h2 className="heading-secondary">Dobrodošli u naš hotel</h2>

      <div className="section-about-us__box">
        <div className="section-about-us__content">
        </div>
        <div className="section-about-us__images">
          <div className="section-about-us__inner-images">
          <Image
            src={svetionik2}
            style={{ height: "auto", width:"100%" }}
            alt="Hotel Svetionik"
          />
           <Image
            src={svetionik3}
            style={{ height: "auto", width:"100%" }}
            alt="Hotel Svetionik"
          />
          </div>
          <div className="section-about-us__outer-image">
          <Image
            src={svetionik}
            style={{ height: "auto", width:"100%" }}
            alt="Hotel Svetionik"
          />
          </div>
        </div>
      </div>
      <div className="section-about-us__box flex-row-reverse">
        <div className="section-about-us__content">
          <div>
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
        <div className="section-about-us__images flex-row-reverse">
          <div className="section-about-us__inner-images">
          <Image
            src={svetionik2}
            style={{ height: "auto", width:"100%" }}
            alt="Hotel Svetionik"
          />
           <Image
            src={svetionik3}
            style={{ height: "auto", width:"100%" }}
            alt="Hotel Svetionik"
          />
          </div>
          <div className="section-about-us__outer-image">
          <Image
            src={svetionik}
            style={{ height: "auto", width:"100%" }}
            alt="Hotel Svetionik"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectionAboutUs;
