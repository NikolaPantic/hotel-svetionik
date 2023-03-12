import Head from "next/head";
import { useRouter } from "next/router";
import SingleRoomLayout from "../../../layout/singleRoomLayout/SingleRoomLayout";

import sr from "../../../locales/sr";
import en from "../../../locales/en";

const StandardRoom = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <>
      <Head>
        <title>{t.metadata.standardRoom.title}</title>
        <meta name="title" content={t.metadata.standardRoom.title} />
        <meta
          name="description"
          content={t.metadata.standardRoom.description}
        />
        <meta name="keywords" content="standardna soba, soba za 2 osobe" />
        <meta property="og:title" content={t.metadata.standardRoom.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.standardRoom.description}
        />
      </Head>
      <SingleRoomLayout singleRoom={"singleRoom"} />
    </>
  );
};

export default StandardRoom;
