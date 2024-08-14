import Image from "next/image";
import testImage from "../../public/svg/glass.svg";

const HotelContentCard = ({
  cardHeading,
  cardDescription,
  cardIcon = testImage,
}) => {
  return (
    <div className="hotel-content-card">
      <div className="hotel-content-card__icon">
        <Image src={cardIcon} alt={`Hotel Svetionik ${cardHeading}`} />
      </div>
      <div className="hotel-content-card__description">
        <h3 className="hotel-content-card__heading">{cardHeading}</h3>
        <p className="hotel-content-card__text">{cardDescription}</p>
      </div>
    </div>
  );
};

export default HotelContentCard;
