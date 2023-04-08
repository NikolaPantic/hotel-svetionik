import { useContext } from "react";
import { useRouter } from "next/router";
import NavigationLink from "../NavigationLink/NavigationLink";
import RoomMiniCard from "../RoomMiniCard/RoomMiniCard";
import singleRoom from "../../public/images/rooms/single/single-room-1-medium.jpg";
import doubleRoom from "../../public/images/rooms/double/double-room-1-medium.jpg";
import superiorRoom from "../../public/images/rooms/superior/superior-room-1-medium.jpg";
import { FormContext } from "../../pages/_app";
import en from "../../locales/en";
import sr from "../../locales/sr";
import { bookingPhoneNumber } from "../../data/hotelData";

const SectionRooms = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  const openForm = useContext(FormContext);

  return (
    <section className="section sectionrooms">
      <h2 className="heading-secondary">{t.common.rooms}</h2>
      <div className="sectionrooms__text">
        <p>{t.sections.rooms.text1}</p>
        <p>
          {t.sections.rooms.text2}{" "}
          <button className="backlink" href="/" onClick={openForm}>
            {t.sections.rooms.text3}
          </button>
          , {t.sections.rooms.text4}{" "}
          <a className="backlink" href={`tel:${bookingPhoneNumber}`}>
            {t.sections.rooms.text5}
          </a>
          .
        </p>
      </div>
      <div className="sectionrooms__rooms">
        <RoomMiniCard
          roomDescription={t.common.standardRoom}
          roomMiniCardImage={singleRoom}
          roomMiniCardLink={{
            pathname: "/usluge/sobe/[singleRoom]",
            query: { singleRoom: "standardna-soba" },
          }}
        />
        <RoomMiniCard
          roomDescription={t.common.roomWithExtraBed}
          roomMiniCardImage={doubleRoom}
          roomMiniCardLink={{
            pathname: "/usluge/sobe/[singleRoom]",
            query: { singleRoom: "soba-sa-dodatnim-lezajem" },
          }}
        />
        <RoomMiniCard
          roomDescription={t.common.superiorApartment}
          roomMiniCardImage={superiorRoom}
          roomMiniCardLink={{
            pathname: "/usluge/sobe/[singleRoom]",
            query: { singleRoom: "superior-apartman-sa-djakuzijem" },
          }}
        />
      </div>
      <NavigationLink
        navigationLinkLabel={t.buttons.checkOutAll}
        path="/usluge/sobe"
      />
    </section>
  );
};

export default SectionRooms;
