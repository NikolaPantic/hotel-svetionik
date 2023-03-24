import { useRouter } from "next/router";
import { useState } from "react";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Form = ({ formVisibility, closeForm = () => {} }) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [roomType, setRoomType] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [numberOfNights, setNumberOfNights] = useState(0);

  const todayDate = new Date().toISOString().split("T")[0];
  return (
    <div
      className={formVisibility ? "form" : "form__hidden"}
      onClick={closeForm}
    >
      <div
        className="form__inner"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="form__button" onClick={closeForm}>
          {t.buttons.close}
        </button>

        <h3 className="form__inner--heading heading-small">
          {t.form.heading1}
        </h3>
        <div className="form__content">
          <div className="form__content--intro">
            <p>{t.form.text1}</p>
          </div>
          <form className="form__data">
            <div className="form__data--basic-data">
              <div className="form__data--card">
                <label htmlFor="first-name">{t.form.firstName}</label>
                <input
                  id="first-name"
                  type="text"
                  placeholder={t.placeholders.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form__data--card">
                <label htmlFor="last-name">{t.form.lastName}</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder={t.placeholders.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form__data--card">
                <label htmlFor="e-mail">E-mail:</label>
                <input
                  id="e-mail"
                  type="text"
                  placeholder={t.placeholders.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form__data--card">
                <label htmlFor="phone">{t.form.phone}</label>
                <input
                  id="phone"
                  type="text"
                  placeholder={t.placeholders.phone}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="form__data--room-data">
              <div className="form__data--card form__data--room-card">
                <label htmlFor="room-type">{t.form.roomType}</label>
                <select
                  id="room-type"
                  type="text"
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value=""></option>
                  <option value="standardna soba">
                    {t.common.standardRoom}
                  </option>
                  <option value="soba sa dodatnim ležajem">
                    {t.common.roomWithExtraBed}
                  </option>
                  <option value="superior apartman">
                    {t.common.superiorApartment}
                  </option>
                </select>
              </div>{" "}
              <div className="form__data--card form__data--room-card form__data--calendar-card">
                <label htmlFor="arrival-date">{t.form.arrivalDate}</label>
                <input
                  id="arrival-date"
                  type="date"
                  min={todayDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>{" "}
              <div className="form__data--card form__data--room-card">
                <label htmlFor="number-of-nights">
                  {t.form.numberOfNights}
                </label>
                <input
                  id="number-of-nights"
                  type="number"
                  min="1"
                  placeholder={t.placeholders.numberOfNights}
                  onChange={(e) => setNumberOfNights(e.target.value)}
                />
              </div>
              <div className="form__data--card form__data--additional-info">
                <label htmlFor="additional-info">{t.form.notes}</label>
                <textarea
                  id="additional-info"
                  placeholder={t.placeholders.notes}
                />
              </div>
            </div>
            <button
              type="submit"
              className="navigationbutton navigationbutton__dark navigationbutton__disabled"
            >
              {t.buttons.submit}
            </button>
          </form>
          <p className="form__content--intro">
            {t.form.text2}{" "}
            <a className="backlink" href="tel:+381641234567">
              0641234567
            </a>
            . {t.form.text3}{" "}
            <a className="backlink" href="tel:+381641234567">
              0641234567
            </a>
            .
          </p>
        </div>
        <p className="form__footer">
          <strong>{t.form.text4}:</strong> {t.form.text5}
          <a className="backlink" href="tel:+381641234567">
            {" "}
            0641234567
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Form;
