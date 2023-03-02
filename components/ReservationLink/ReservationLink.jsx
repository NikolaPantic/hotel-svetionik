import Link from "next/link";

const ReservationLink = ({ labelText = "label" }) => {
  return (
    <Link href="/" className="reservationlink">
      {labelText}
    </Link>
  );
};

export default ReservationLink;
