import { useRouter } from "next/router";

import wedding from "../../public/svg/wedding.svg";
import restaurant from "../../public/svg/restaurant.svg";
import marina from "../../public/svg/marina.svg";
import glass from "../../public/svg/glass.svg";
import ServiceCard from "../ServiceCard/ServiceCard";
import NavigationLink from "../NavigationLink/NavigationLink";
import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionServices = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <section className="section sectionservices">
      <h2 className="heading-secondary">
        {t.sections.additionalServices.heading}
      </h2>
      <p>{t.sections.additionalServices.text}</p>

      <div className="sectionservices__services">
        <ServiceCard
          path="/usluge/proslave"
          logo={wedding}
          heading={t.common.celebrations}
          description={t.sections.additionalServices.card1Text}
        />
        <ServiceCard
          path="/usluge/restoran"
          logo={restaurant}
          heading={t.common.restaurant}
          description={t.sections.additionalServices.card2Text}
        />
        <ServiceCard
          path="/usluge/brodska-marina"
          logo={marina}
          heading={t.common.shipMarina}
          description={t.sections.additionalServices.card3Text}
        />
        <ServiceCard
          path="/usluge/vinski-podrum"
          logo={glass}
          heading={t.common.wineCellar}
          description={t.sections.additionalServices.card4Text}
        />
      </div>
      <NavigationLink
        navigationLinkLabel={t.buttons.checkOutAll}
        path="/usluge"
      />
    </section>
  );
};

export default SectionServices;
