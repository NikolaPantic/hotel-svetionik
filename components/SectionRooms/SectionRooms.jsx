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
import { Carousel } from "react-responsive-carousel";
// import "react-gallery-carousel/dist/index.css";

const SectionRooms = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  const openForm = useContext(FormContext);

  return (
    <section className="section section-rooms container">
      <div className="section-rooms__heading-and-text">
        <h2>{t.common.rooms}</h2>
        <div className="section-rooms__text">
          <p>{t.sections.rooms.text1}</p>
          <p>{t.sections.rooms.text6}</p>
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
      </div>
      <div className="section-rooms__rooms">
        <Carousel
          centerMode
          centerSlidePercentage={100}
          showArrows
          infiniteLoop
          autoPlay
          interval={6000}
          transitionTime={1500}
          showStatus={false}
          showThumbs={false}
        >
          <RoomMiniCard
            roomType="singleRoom"
            roomDescription={t.common.standardRoom}
            roomMiniCardImage={singleRoom}
            roomMiniCardLink={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "standardna-soba" },
            }}
          />
          <RoomMiniCard
            roomType="doubleRoom"
            roomDescription={t.common.roomWithExtraBed}
            roomMiniCardImage={doubleRoom}
            roomMiniCardLink={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "soba-sa-dodatnim-lezajem" },
            }}
          />
          <RoomMiniCard
            roomType="superiorRoom"
            roomDescription={t.common.superiorApartment}
            roomMiniCardImage={superiorRoom}
            roomMiniCardLink={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "superior-apartman-sa-djakuzijem" },
            }}
          />
        </Carousel>
      </div>
      {/* <Carousel
        style={{ maxWidth: "800px" }}
        hasThumbnails={false}
        hasMediaButton={false}
        hasSizeButton={false}
        hasDotButtons="bottomLeft"
        hasIndexBoard="bottomRight"
        children={[
          
        ]}
      /> */}

      {/* <NavigationLink
        navigationLinkLabel={t.buttons.checkOutAll}
        path="/usluge/sobe"
      /> */}
    </section>
  );
};

export default SectionRooms;
