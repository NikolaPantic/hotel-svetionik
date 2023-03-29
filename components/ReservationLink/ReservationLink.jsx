import TranslatedLink from "../TranslatedLink/TranslatedLink";
const ReservationLink = ({ labelText = "label", path = "/" }) => {
  return (
    <TranslatedLink href={path} className="reservationlink">
      {labelText}
    </TranslatedLink>
  );
};

export default ReservationLink;
