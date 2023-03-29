import { useRouter } from "next/router";
import ServiceCardMini from "../ServiceCardMini/ServiceCardMini";
import bed from "../../public/svg/bed.svg";
import restaurant from "../../public/svg/restaurant.svg";
import wedding from "../../public/svg/wedding.svg";
import marina from "../../public/svg/marina.svg";
import glass from "../../public/svg/glass.svg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const ListServiceCardMini = ({ currentService = "" }) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const services = [
    {
      name: "rooms",
      image: bed,
      label: t.common.roomsBooking,
      path: "/usluge/sobe",
    },
    {
      name: "restaurant",
      image: restaurant,
      label: t.common.restaurant,
      path: "/usluge/restoran",
    },
    {
      name: "wedding",
      image: wedding,
      label: t.common.celebrations,
      path: "/usluge/proslave",
    },
    {
      name: "marina",
      image: marina,
      label: t.common.shipMarina,
      path: "/usluge/brodska-marina",
    },
    {
      name: "wine-cellar",
      image: glass,
      label: t.common.wineCellar,
      path: "/usluge/vinski-podrum",
    },
  ];

  return (
    <section className="listservicecardmini">
      <h4>{t.common.checkOutOtherServices}</h4>
      <div className="listservicecardmini__content">
        {services
          .filter((e) => e.name !== currentService)
          .map((e) => (
            <ServiceCardMini
              key={e.name}
              serviceCardMiniImageUrl={e.image}
              serviceCardMiniLabel={e.label}
              serviceCardMiniPath={e.path}
            />
          ))}
      </div>
    </section>
  );
};

export default ListServiceCardMini;
