import Image from "next/image";
import TranslatedLink from "../TranslatedLink/TranslatedLink";
const RoomMiniCard = ({
  roomDescription,
  roomMiniCardLink = "/",
  roomMiniCardImage,
}) => {
  return (
    <TranslatedLink href={roomMiniCardLink} className="roomminicard">
      <div className="roomminicard__image">
        <Image
          src={roomMiniCardImage}
          alt={`Hotel Svetionik ${roomDescription.toLowerCase()}`}
        />
      </div>
      <span className="roomminicard__description">{roomDescription}</span>
    </TranslatedLink>
  );
};

export default RoomMiniCard;
