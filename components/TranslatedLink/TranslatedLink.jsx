import { useRouter } from "next/router";
import Link from "next/link";

const pathTranslations = {
  en: {
    "/o-nama": "/about-us",
    "/usluge": "/services",
    "/galerija": "/gallery",
    "/vesti": "/news",
    "/kontakt": "/contact",
    "/usluge/sobe": "/services/rooms",
    "/usluge/proslave": "/services/celebrations",
    "/usluge/brodska-marina": "/services/boat-marina",
    "/usluge/vinski-podrum": "/services/wine-cellar",
    "/usluge/sobe/standardna-soba": "/services/rooms/standard-room",
    "/usluge/sobe/soba-sa-dodatnim-lezajem":
      "/services/rooms/room-with-extra-bed",
    "/usluge/sobe/superior-apartman-sa-djakuzijem":
      "/services/rooms/superior-apartment-with-jacuzzi",
  },
};

const TranslatedLink = ({
  href,
  children,
  className = "",
  onClick = () => {},
}) => {
  const { locale } = useRouter();
  const translatedPath = pathTranslations[locale]?.[href];
  const as = translatedPath ? `/${locale}${translatedPath}` : undefined;

  return (
    <Link href={href} as={as} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default TranslatedLink;
