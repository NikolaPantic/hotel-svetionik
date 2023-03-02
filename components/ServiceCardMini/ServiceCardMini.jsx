import Image from "next/image";

const ServiceCardMini = ({
  serviceCardMiniPath = "/",
  serviceCardMiniImageUrl = "",
  serviceCardMiniLabel = "label",
}) => {
  return (
    <a className="servicecardmini" href={serviceCardMiniPath}>
      <div className="servicecardmini__image">
        <Image src={serviceCardMiniImageUrl} alt={serviceCardMiniLabel} />
      </div>
      <span className="servicecardmini__label">{serviceCardMiniLabel}</span>
    </a>
  );
};

export default ServiceCardMini;
