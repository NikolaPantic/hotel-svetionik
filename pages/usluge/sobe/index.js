import Head from "next/head";
import { useRouter } from "next/router";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import RoomCard from "../../../components/RoomCard/RoomCard";
import singleRoom from "../../../public/images/rooms/single/single-room-card.jpg";
import doubleRoom from "../../../public/images/rooms/double/double-room-card.jpg";
import superiorRoom from "../../../public/images/rooms/superior/superior-room-card.jpg";
import roomDecoration from "../../../public/images/rooms/common/room-decoration-2.jpg";
import en from "../../../locales/en";
import sr from "../../../locales/sr";
import PageLayout from "../../../layout/PageLayout/PageLayout";

const Rooms = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Head>
        <title>{t.metadata.rooms.title}</title>
        <meta name="title" content={t.metadata.rooms.title} />
        <meta name="description" content={t.metadata.rooms.description} />
        <meta name="keywords" content="sobe, nocenje, apartman" />
        <meta property="og:title" content={t.metadata.rooms.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.rooms.description}
        />
      </Head>
      <article className="pagerooms">
        <PageLayout
          heading={t.common.rooms}
          pageLayoutSummary={t.common.spaciousAndComfortable}
          backgroundImageUrl={roomDecoration}
        >
          <ServiceLayout
            currentService="rooms"
            serviceLayoutHeading="Odabir soba"
            serviceLayoutText={[
              t.pages.rooms.subheading1,
              t.pages.rooms.subheading2,
            ]}
          >
            <div className="pagerooms__roomcards container">
              <RoomCard
                reversed={true}
                roomCardLink={{
                  pathname: "/usluge/sobe/[singleRoom]",
                  query: { singleRoom: "standardna-soba" },
                }}
                roomCardHeading={t.common.standardRoom}
                roomCardImage={singleRoom}
                roomCardText={t.pages.rooms.text1}
              />
              <RoomCard
                roomCardLink={{
                  pathname: "/usluge/sobe/[singleRoom]",
                  query: { singleRoom: "soba-sa-dodatnim-lezajem" },
                }}
                roomCardHeading={t.common.roomWithExtraBed}
                roomCardImage={doubleRoom}
                roomCardText={t.pages.rooms.text2}
              />
              <RoomCard
                reversed={true}
                roomCardLink={{
                  pathname: "/usluge/sobe/[singleRoom]",
                  query: { singleRoom: "superior-apartman-sa-djakuzijem" },
                }}
                roomCardHeading={t.common.superiorApartment}
                roomCardImage={superiorRoom}
                roomCardText={t.pages.rooms.text3}
              />
            </div>
          </ServiceLayout>
        </PageLayout>
      </article>
    </>
  );
};

export default Rooms;
