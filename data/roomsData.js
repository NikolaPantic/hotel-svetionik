import wardrobe from "../public/svg/wardrobe.svg";
import airConditioning from "../public/svg/air-conditioning.svg";
import tv from "../public/svg/tv.svg";
import miniBar from "../public/svg/minibar.svg";
import table from "../public/svg/table.svg";
import bathroom from "../public/svg/bathroom.svg";
import hairdryer from "../public/svg/hairdryer.svg";
import cosmetics from "../public/svg/cosmetics.svg";
import chair from "../public/svg/chair.svg";
import jacuzzi from "../public/svg/jacuzzi.svg";
import singleRoomImage1 from "../public/images/rooms/single/single-room.jpg";
import singleRoomImage2 from "../public/images/rooms/single/single-room-1.jpg";
import singleRoomImage3 from "../public/images/rooms/single/single-room-bed.jpg";
import singleRoomImage4 from "../public/images/rooms/single/single-room-bed-1.jpg";
import singleRoomImage5 from "../public/images/rooms/single/single-room-bed-2.jpg";
import singleRoomImage6 from "../public/images/rooms/single/single-room-card.jpg";
import singleRoomImage7 from "../public/images/rooms/single/single-room-bathroom.jpg";

import doubleRoomImage1 from "../public/images/rooms/double/double-room.jpg";
import doubleRoomImage2 from "../public/images/rooms/double/double-room-1.jpg";
import doubleRoomImage3 from "../public/images/rooms/double/double-room-2.jpg";
import doubleRoomImage4 from "../public/images/rooms/double/double-room-3.jpg";
import doubleRoomImage5 from "../public/images/rooms/double/double-room-4.jpg";
import doubleRoomImage6 from "../public/images/rooms/double/double-room-5.jpg";
import doubleRoomImage7 from "../public/images/rooms/double/double-room-bed.jpg";
import doubleRoomImage8 from "../public/images/rooms/double/double-room-bed-1.jpg";
import doubleRoomImage9 from "../public/images/rooms/double/double-room-bed-2.jpg";
import doubleRoomImage10 from "../public/images/rooms/double/double-room-bed-3.jpg";
import doubleRoomImage11 from "../public/images/rooms/double/double-room-bed-4.jpg";
import doubleRoomImage12 from "../public/images/rooms/double/double-room-card.jpg";
import doubleRoomImage13 from "../public/images/rooms/double/double-room-extra-bed.jpg";
import doubleRoomImage14 from "../public/images/rooms/double/double-room-bathroom.jpg";
import doubleRoomImage15 from "../public/images/rooms/double/double-room-bathroom-1.jpg";

import superiorRoomImage1 from "../public/images/rooms/superior/superior-room.jpg";
import superiorRoomImage2 from "../public/images/rooms/superior/superior-room-1.jpg";
import superiorRoomImage3 from "../public/images/rooms/superior/superior-room-2.jpg";
import superiorRoomImage4 from "../public/images/rooms/superior/superior-room-3.jpg";
import superiorRoomImage5 from "../public/images/rooms/superior/superior-room-4.jpg";
import superiorRoomImage6 from "../public/images/rooms/superior/superior-room-5.jpg";
import superiorRoomImage7 from "../public/images/rooms/superior/superior-room-6.jpg";
import superiorRoomImage8 from "../public/images/rooms/superior/superior-room-7.jpg";
import superiorRoomImage9 from "../public/images/rooms/superior/superior-room-8.jpg";
import superiorRoomImage10 from "../public/images/rooms/superior/superior-room-beds.jpg";
import superiorRoomImage11 from "../public/images/rooms/superior/superior-room-card.jpg";
import superiorRoomImage12 from "../public/images/rooms/superior/superior-room-bathroom.jpg";
import superiorRoomImage13 from "../public/images/rooms/superior/superior-room-bathroom-1.jpg";
import superiorRoomImage14 from "../public/images/rooms/superior/superior-room-bathroom-2.jpg";
import superiorRoomImage15 from "../public/images/rooms/superior/superior-room-bathroom-3.jpg";
import superiorRoomImage16 from "../public/images/rooms/superior/superior-room-bathroom-4.jpg";
import superiorRoomImage17 from "../public/images/rooms/superior/superior-room-bathroom-5.jpg";
import superiorRoomImage18 from "../public/images/rooms/superior/superior-room-bathroom-6.jpg";
import superiorRoomImage19 from "../public/images/rooms/superior/superior-room-bathroom-7.jpg";

import { useRouter } from "next/router";
import en from "../locales/en";
import sr from "../locales/sr";

const RoomsData = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return {
    roomsBasicData: {
      singleRoom: {
        heading: t.common.standardRoom,
        description: [
          t.pages.roomInstance.standardRoom.text1,
          t.pages.roomInstance.standardRoom.text2,
          t.pages.roomInstance.standardRoom.text3,
        ],
        basicInfo: {
          numberOfPersons: "1-2",
          typeOfBed: t.pages.roomInstance.roomContent.doubleBed,
          extraBedIncluded: t.common.no,
          riverView: t.common.onRequest,
        },
        roomContent: [
          {
            icon: airConditioning,
            description: t.pages.roomInstance.roomContent.airConditioning,
          },
          { icon: tv, description: "LCD TV" },
          { icon: miniBar, description: "Mini bar" },
          {
            icon: wardrobe,
            description: t.pages.roomInstance.roomContent.wardrobe,
          },
          {
            icon: table,
            description: t.pages.roomInstance.roomContent.nightTable,
          },
          {
            icon: bathroom,
            description: t.pages.roomInstance.roomContent.bathroom,
          },
          {
            icon: hairdryer,
            description: t.pages.roomInstance.roomContent.hairdryer,
          },
          {
            icon: cosmetics,
            description: t.pages.roomInstance.roomContent.cosmetics,
          },
        ],
        images: [
          singleRoomImage1,
          singleRoomImage2,
          singleRoomImage3,
          singleRoomImage4,
          singleRoomImage5,
          singleRoomImage6,
          singleRoomImage7,
        ],
      },
      doubleRoom: {
        heading: t.common.roomWithExtraBed,
        description: [
          t.pages.roomInstance.roomWithExtraBed.text1,
          t.pages.roomInstance.roomWithExtraBed.text2,
          t.pages.roomInstance.roomWithExtraBed.text3,
        ],
        basicInfo: {
          numberOfPersons: "1-4",
          typeOfBed: t.pages.roomInstance.roomContent.doubleBed,
          extraBedIncluded: t.common.yes,
          riverView: t.common.onRequest,
        },
        roomContent: [
          {
            icon: airConditioning,
            description: t.pages.roomInstance.roomContent.airConditioning,
          },
          { icon: tv, description: "LCD TV" },
          { icon: miniBar, description: "Mini bar" },
          { icon: table, description: t.pages.roomInstance.roomContent.desk },
          {
            icon: chair,
            description: t.pages.roomInstance.roomContent.chair + " x2",
          },
          {
            icon: wardrobe,
            description: t.pages.roomInstance.roomContent.wardrobe,
          },
          {
            icon: table,
            description: t.pages.roomInstance.roomContent.nightTable,
          },
          {
            icon: bathroom,
            description: t.pages.roomInstance.roomContent.bathroom,
          },
          {
            icon: hairdryer,
            description: t.pages.roomInstance.roomContent.hairdryer,
          },
          {
            icon: cosmetics,
            description: t.pages.roomInstance.roomContent.cosmetics,
          },
        ],
        images: [
          doubleRoomImage12,
          doubleRoomImage2,
          doubleRoomImage4,
          doubleRoomImage1,
          doubleRoomImage3,
          doubleRoomImage5,
          doubleRoomImage6,
          doubleRoomImage7,
          doubleRoomImage8,
          doubleRoomImage9,
          doubleRoomImage10,
          doubleRoomImage11,
          doubleRoomImage13,
          doubleRoomImage14,
          doubleRoomImage15,
        ],
      },
      superiorRoom: {
        heading: t.common.superiorApartment,
        description: [
          t.pages.roomInstance.superiorApartment.text1,
          t.pages.roomInstance.superiorApartment.text2,
          t.pages.roomInstance.superiorApartment.text3,
        ],
        basicInfo: {
          numberOfPersons: "1-8",
          typeOfBed: t.pages.roomInstance.roomContent.doubleBed + ", x2",
          extraBedIncluded: t.common.yes + ", x2",
          riverView: t.common.no,
        },
        roomContent: [
          {
            icon: airConditioning,
            description: t.pages.roomInstance.roomContent.airConditioning,
          },
          { icon: tv, description: "LCD TV" },
          { icon: miniBar, description: "Mini bar" },
          {
            icon: table,
            description: t.pages.roomInstance.roomContent.desk,
          },
          {
            icon: chair,
            description: t.pages.roomInstance.roomContent.chair + " x2",
          },
          {
            icon: wardrobe,
            description: t.pages.roomInstance.roomContent.wardrobe,
          },
          {
            icon: table,
            description: t.pages.roomInstance.roomContent.nightTable,
          },
          {
            icon: bathroom,
            description: t.pages.roomInstance.roomContent.bathroom,
          },
          {
            icon: hairdryer,
            description: t.pages.roomInstance.roomContent.hairdryer,
          },
          {
            icon: cosmetics,
            description: t.pages.roomInstance.roomContent.cosmetics,
          },
          {
            icon: jacuzzi,
            description: t.pages.roomInstance.roomContent.jacuzzi,
          },
        ],
        images: [
          superiorRoomImage1,
          superiorRoomImage2,
          superiorRoomImage3,
          superiorRoomImage4,
          superiorRoomImage5,
          superiorRoomImage6,
          superiorRoomImage7,
          superiorRoomImage8,
          superiorRoomImage9,
          superiorRoomImage10,
          superiorRoomImage11,
          superiorRoomImage12,
          superiorRoomImage13,
          superiorRoomImage14,
          superiorRoomImage15,
          superiorRoomImage16,
          superiorRoomImage17,
          superiorRoomImage18,
          superiorRoomImage19,
        ],
      },
    },
    roomsCardData: [
      {
        key: "singleRoom",
        description: t.common.standardRoom,
        image: singleRoomImage2,
        link: "/usluge/sobe/standardna-soba",
      },
      {
        key: "doubleRoom",
        description: t.common.roomWithExtraBed,
        image: doubleRoomImage2,
        link: "/usluge/sobe/soba-sa-dodatnim-lezajem",
      },
      {
        key: "superiorRoom",
        description: t.common.superiorApartment,
        image: superiorRoomImage2,
        link: "/usluge/sobe/superior-apartman-sa-djakuzijem",
      },
    ],
  };
};

export default RoomsData;
