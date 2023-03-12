import TranslatedLink from "../TranslatedLink/TranslatedLink";
const ReservationLink = ({ labelText = "label" }) => {
  return (
    <TranslatedLink href="/" className="reservationlink">
      {labelText}
    </TranslatedLink>
  );
};

export default ReservationLink;
