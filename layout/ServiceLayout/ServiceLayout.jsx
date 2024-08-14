import Image from "next/image";
import FormMini from "../../components/FormMini/FormMini";

import ListServiceCardMini from "../../components/ListServiceCardMini/ListServiceCardMini";

const ServiceLayout = ({
  children,
  serviceLayoutHeading = "",
  serviceLayoutText = [],
  currentService = "",
  horizontalImageUrl = "",
}) => {
  return (
    <div className="servicelayout container">
      <h2 className="heading-secondary">{serviceLayoutHeading}</h2>

      {serviceLayoutText ? (
        <div className="servicelayout__text">
          {serviceLayoutText.map((e, i) => (
            <>
              <p key={i}>{e}</p>
              <br />
            </>
          ))}
        </div>
      ) : null}
      {children}
      <ListServiceCardMini currentService={currentService} />
      <FormMini />
    </div>
  );
};

export default ServiceLayout;
