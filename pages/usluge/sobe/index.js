import Head from "next/head";
import { useRouter } from "next/router";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import RoomCard from "../../../components/RoomCard/RoomCard";
import singleRoom from "../../../public/images/rooms/single/single-room-card.jpg";
import doubleRoom from "../../../public/images/rooms/double/double-room-card.jpg";
import superiorRoom from "../../../public/images/rooms/superior/superior-room-card.jpg";
import en from "../../../locales/en";
import sr from "../../../locales/sr";

const Rooms = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Head>
        <title>Sobe | Hotel Svetionik Obrenovac</title>
        <meta name="title" content="Sobe | Hotel Svetionik Obrenovac" />
        <meta
          name="description"
          content="Raspolažemo sa ukupnim smeštajnim kapacitetom od 15 soba: 6 standardnih, 7 soba sa pomoćnim ležajem i 2 superior apartmana sa đakuzijem. Sobe su udobne i svetle, sa novim nameštajem u njima."
        />
        <meta
          name="keywords"
          content="soba obrenovac, nocenje cena, hotel nocenje, soba cena"
        />
        <meta property="og:title" content="Sobe " />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content="Raspolažemo sa ukupnim smeštajnim kapacitetom od 15 soba: 6 standardnih, 7 soba sa pomoćnim ležajem i 2 superior apartmana sa đakuzijem. Sobe su udobne i svetle, sa novim nameštajem u njima."
        />
      </Head>
      <article className="pagerooms">
        <ServiceLayout
          currentService="rooms"
          serviceLayoutHeading={t.common.rooms}
          serviceLayoutText={[
            t.pages.rooms.subheading1,
            t.pages.rooms.subheading2,
          ]}
        >
          <div className="pagerooms__roomcards">
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
      </article>
    </>
  );
};

export default Rooms;
