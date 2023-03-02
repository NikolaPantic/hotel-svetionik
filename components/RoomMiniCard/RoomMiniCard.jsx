import Image from "next/image";
import Link from "next/link";

const RoomMiniCard = ({
  roomDescription,
  roomMiniCardLink = "/",
  roomMiniCardImage,
}) => {
  return (
    <Link href={roomMiniCardLink} className="roomminicard">
      <div className="roomminicard__image">
        <Image
          src={roomMiniCardImage}
          alt={`Hotel Svetionik ${roomDescription.toLowerCase()}`}
        />
      </div>
      <span className="roomminicard__description">{roomDescription}</span>
    </Link>
  );
};

export default RoomMiniCard;
