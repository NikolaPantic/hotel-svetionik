import FormMini from "../../components/FormMini/FormMini";

import ListServiceCardMini from "../../components/ListServiceCardMini/ListServiceCardMini";

const ServiceLayout = ({
  children,
  serviceLayoutHeading = "",
  serviceLayoutText = [],
  currentService = "",
}) => {
  return (
    <div className="servicelayout">
      <h1 className="heading-secondary">{serviceLayoutHeading}</h1>

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
