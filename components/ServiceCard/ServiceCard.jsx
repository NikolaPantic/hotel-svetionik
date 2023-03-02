import Image from "next/image";
import NavigationLink from "../NavigationLink/NavigationLink";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const ServiceCard = ({ logo, heading, description, path = "#" }) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <div className="servicecard">
      <a className="servicecard__image" href={path}>
        <Image src={logo} alt="Usluga" style={{ height: "auto" }} />
      </a>
      <div className="servicecard__text">
        <h4 className="servicecard__text--heading">{heading}</h4>
        <p className="servicecard__text--description">{description}</p>
        <NavigationLink path={path} navigationLinkLabel={t.buttons.details} />
      </div>
    </div>
  );
};

export default ServiceCard;
