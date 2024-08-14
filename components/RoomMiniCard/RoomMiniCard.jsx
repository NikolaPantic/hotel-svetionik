import Image from "next/image";
import { useRouter } from "next/router";
import TranslatedLink from "../TranslatedLink/TranslatedLink";
import roomsData from "../../data/roomsData";
import testIcon from "../../public/svg/persons.svg";
import bed from "../../public/svg/bed-white.svg";
import extraBed from "../../public/svg/extra-bed.svg";
import jacuzzi from "../../public/svg/jacuzzi-white.svg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const RoomMiniCard = ({
  roomType,
  roomDescription,
  roomMiniCardLink = "/",
  roomMiniCardImage,
}) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const data = roomsData().roomsBasicData;

  const roomData = {
    singleRoom: {
      numberOfPersons: t.common.roomPerson2,
      numberOfBeds: t.common.doubleBed1,
      numberOfExtraBeds: t.common.noExtraBed,
      jacuzziAvailable: t.common.noJacuzzi,
    },
    doubleRoom: {
      numberOfPersons: t.common.roomPerson4,
      numberOfBeds: t.common.doubleBed1,
      numberOfExtraBeds: t.common.extraBed,
      jacuzziAvailable: t.common.noJacuzzi,
    },
    superiorRoom: {
      numberOfPersons: t.common.roomPerson8,
      numberOfBeds: t.common.doubleBed2,
      numberOfExtraBeds: t.common.extraBed2,
      jacuzziAvailable: t.common.withJacuzzi,
    },
  };

  return (
    <div className="room-mini-card">
      <TranslatedLink
        href={roomMiniCardLink}
        className="room-mini-card__image-container"
      >
        <Image
          src={roomMiniCardImage}
          alt={`Hotel Svetionik ${roomDescription.toLowerCase()}`}
        />
        <div className="room-mini-card__info">
          <h3>{roomDescription}</h3>
          <ul className="room-mini-card__details">
            <li>
              <div className="room-mini-card__info-box">
                <Image src={testIcon} alt="Broj osoba" />
                <span>{roomData[roomType]?.numberOfPersons}</span>
              </div>
            </li>
            <li>
              <div className="room-mini-card__info-box">
                <Image src={bed} alt="Broj ležaja" />
                <span>{roomData[roomType]?.numberOfBeds}</span>
              </div>
            </li>
            <li>
              <div className="room-mini-card__info-box">
                <Image src={extraBed} alt="Broj dodatnih ležaja" />
                <span>{roomData[roomType]?.numberOfExtraBeds}</span>
              </div>
            </li>
            <li>
              <div className="room-mini-card__info-box">
                <Image src={jacuzzi} alt="Đakuzi" />
                <span>{roomData[roomType]?.jacuzziAvailable}</span>
              </div>
            </li>
          </ul>
        </div>
      </TranslatedLink>
      {/* <div className="room-mini-card__info">
      <TranslatedLink href={roomMiniCardLink}>
        <h3>{roomDescription}</h3>
        </TranslatedLink>
        <p className="room-mini-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    {renderAdditionalRoomContentIcons()}
      </div> */}
      {/* <TranslatedLink href={roomMiniCardLink}>
        Pogledaj detaljnije
      </TranslatedLink> */}
    </div>
  );
};

export default RoomMiniCard;
