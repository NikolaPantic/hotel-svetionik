import Image from "next/image";
import { useRouter } from "next/router";
import TranslatedLink from "../TranslatedLink/TranslatedLink";
import roomsData from "../../data/roomsData";
import en from "../../locales/en";
import sr from "../../locales/sr";

const RoomMiniCard = ({
  roomDescription,
  roomMiniCardLink = "/",
  roomMiniCardImage,
}) => {

  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

const data=roomsData().roomsBasicData


const renderAdditionalRoomContentIcons=()=>{
let roomIcons;

switch(roomDescription){
case t.common.standardRoom:
  roomIcons= data.singleRoom.roomContent;
  break;
case t.common.roomWithExtraBed:
  roomIcons= data.doubleRoom.roomContent;
  break;
case t.common.superiorApartment:
  roomIcons= data.superiorRoom.roomContent;
  break;

  default:
  roomIcons=[]
}

return roomIcons.map(
  iconData=><Image src={iconData.icon} alt={iconData.description} width={30} className="room-mini-card__icon" title={iconData.description}/>
  );


}

  return (
    <div className="room-mini-card">
      <TranslatedLink href={roomMiniCardLink} className="room-mini-card__image-container">
        <Image
          src={roomMiniCardImage}
          alt={`Hotel Svetionik ${roomDescription.toLowerCase()}`}
        />
      </TranslatedLink>
      <div className="room-mini-card__info">
      <TranslatedLink href={roomMiniCardLink}>
        <h3>{roomDescription}</h3>
        </TranslatedLink>
        <p className="room-mini-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    {renderAdditionalRoomContentIcons()}
      </div>
      <TranslatedLink href={roomMiniCardLink}>Pogledaj detaljnije</TranslatedLink>
    </div>
  );
};

export default RoomMiniCard;
