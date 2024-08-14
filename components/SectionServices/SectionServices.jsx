import { useRouter } from "next/router";

import wedding from "../../public/images/celebrations/banquet-hall-black-2.jpg";
import restaurant from "../../public/images/food/food-fish-5.jpg";
import marina from "../../public/images/boat-marina/boat-marina-4.jpg";
import wineCellar from "../../public/images/wine-cellar/wine-cellar-7.jpg";
import ServiceCard from "../ServiceCard/ServiceCard";
import NavigationLink from "../NavigationLink/NavigationLink";
import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionServices = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <section className="section sectionservices container">
      <h2 className="heading-secondary">
        {t.sections.additionalServices.heading}
      </h2>
      <p className="sectionservices__description">
        {t.sections.additionalServices.text}
      </p>

      <div className="sectionservices__services">
        <ServiceCard
          path="/usluge/proslave"
          serviceImage={wedding}
          heading={t.common.celebrations}
          description={t.sections.additionalServices.card1Text}
        />
        <ServiceCard
          path="/usluge/restoran"
          serviceImage={restaurant}
          heading={t.common.restaurant}
          description={t.sections.additionalServices.card2Text}
        />
        <ServiceCard
          path="/usluge/brodska-marina"
          serviceImage={marina}
          heading={t.common.shipMarina}
          description={t.sections.additionalServices.card3Text}
        />
        <ServiceCard
          path="/usluge/vinski-podrum"
          serviceImage={wineCellar}
          heading={t.common.wineCellar}
          description={t.sections.additionalServices.card4Text}
        />
      </div>
    </section>
  );
};

export default SectionServices;
