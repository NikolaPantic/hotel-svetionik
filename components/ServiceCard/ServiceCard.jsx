import Image from "next/image";
import NavigationLink from "../NavigationLink/NavigationLink";
import serviceImage from "../../public/images/food/food-fish-5.jpg";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";
import TranslatedLink from "../TranslatedLink/TranslatedLink";

const ServiceCard = ({ serviceImage, heading, description, path = "#" }) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <div className="service-card">
      <a className="service-card__image" href={path}>
        <Image src={serviceImage} alt="Usluga" />
      </a>
      <div className="service-card__text">
        <h4 className="service-card__heading">{heading}</h4>
        <p className="service-card__description">{description}</p>
        <TranslatedLink href={path} className="backlink">
          {t.buttons.details}
        </TranslatedLink>
      </div>
    </div>
  );
};

export default ServiceCard;
