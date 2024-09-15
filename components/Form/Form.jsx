import { useRouter } from "next/router";
import { useState } from "react";
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";
import FormStatus from "../FormStatus/FormStatus";
import en from "../../locales/en";
import sr from "../../locales/sr";

import {
  displayedInfoPhoneNumber,
  infoPhoneNumber,
  restaurantPhoneNumber,
  displayedRestaurantPhoneNumber,
  bookingPhoneNumber,
  displayedBookingPhoneNumber,
} from "../../data/hotelData";

const Form = ({ formVisibility, closeForm = () => {} }) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const [firstName, setFirstName] = useState({ value: "", invalid: false });
  const [lastName, setLastName] = useState({ value: "", invalid: false });
  const [email, setEmail] = useState({ value: "", invalid: false });
  const [phoneNumber, setPhoneNumber] = useState({ value: "", invalid: false });
  const [roomType, setRoomType] = useState({ value: "", invalid: false });
  const [arrivalDate, setArrivalDate] = useState({ value: "", invalid: false });
  const [numberOfNights, setNumberOfNights] = useState({
    value: "",
    invalid: false,
  });
  const [notes, setNotes] = useState({ value: "", invalid: false });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailSentSuccessfuly, setIsEmailSentSuccessfuly] = useState(false);

  const phoneValidation = (phone) => {
    return /[0-9]{9,13}/.test(phone);
  };

  const emailValidation = (email) => {
    return /[\.a-z0-9]+@[a-z]+\.[a-z]{2,4}/.test(email);
  };

  const onlyLettersAndSpaces = (string) => {
    return /^[A-Za-z\s]*$/.test(string);
  };

  const submitButtonIsClickable =
    onlyLettersAndSpaces(firstName.value) &&
    onlyLettersAndSpaces(lastName.value) &&
    phoneValidation(phoneNumber.value) &&
    emailValidation(email.value) &&
    firstName.value &&
    lastName.value &&
    email.value &&
    phoneNumber.value &&
    roomType.value &&
    arrivalDate.value &&
    numberOfNights.value;

  const handleFormSubmission = () => {
    if (isEmailSentSuccessfuly) {
      setIsEmailSent(false);
      setIsEmailSentSuccessfuly(false);
      setFirstName((prevState) => ({ ...prevState, ["value"]: "" }));
      setLastName((prevState) => ({ ...prevState, ["value"]: "" }));
      setEmail((prevState) => ({ ...prevState, ["value"]: "" }));
      setPhoneNumber((prevState) => ({ ...prevState, ["value"]: "" }));
      setRoomType((prevState) => ({ ...prevState, ["value"]: "" }));
      setArrivalDate((prevState) => ({ ...prevState, ["value"]: "" }));
      setNumberOfNights((prevState) => ({ ...prevState, ["value"]: "" }));
      setNotes((prevState) => ({ ...prevState, ["value"]: "" }));
    } else {
      sendEmail();
    }
  };

  const sendEmail = () => {
    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      email.value !== "" &&
      phoneNumber.value !== "" &&
      roomType.value !== "" &&
      arrivalDate.value !== "" &&
      numberOfNights.value !== "" &&
      +numberOfNights.value > 0 &&
      onlyLettersAndSpaces(firstName.value) &&
      onlyLettersAndSpaces(lastName.value) &&
      phoneValidation(phoneNumber.value) &&
      emailValidation(email.value)
    ) {
      setFirstName((prevState) => ({ ...prevState, ["invalid"]: false }));
      setLastName((prevState) => ({ ...prevState, ["invalid"]: false }));
      setEmail((prevState) => ({ ...prevState, ["invalid"]: false }));
      setPhoneNumber((prevState) => ({ ...prevState, ["invalid"]: false }));
      setRoomType((prevState) => ({ ...prevState, ["invalid"]: false }));
      setArrivalDate((prevState) => ({ ...prevState, ["invalid"]: false }));
      setNumberOfNights((prevState) => ({ ...prevState, ["invalid"]: false }));

      emailjs
        .sendForm(
          "contact_service",
          "reservation_template",
          "#form",
          process.env.NEXT_PUBLIC_FORMJS_PUBLIC_KEY
        )
        .then(() => {
          setIsEmailSent(true);
          setIsEmailSentSuccessfuly(true);
        })
        .catch(() => {
          setIsEmailSent(true);
          setIsEmailSentSuccessfuly(false);
        });
    }
    if (!onlyLettersAndSpaces(firstName.value) || firstName.value === "") {
      setFirstName((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!onlyLettersAndSpaces(lastName.value) || lastName.value === "") {
      setLastName((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!phoneValidation(phoneNumber.value) || phoneNumber.value === "") {
      setPhoneNumber((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!emailValidation(email.value) || email.value === "") {
      setEmail((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (roomType.value === "") {
      setRoomType((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (arrivalDate.value === "") {
      setArrivalDate((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (numberOfNights.value === "") {
      setNumberOfNights((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
  };

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
          <form
            id="form"
            className="form__data"
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
          >
            <div className="form__data--basic-data">
              <div className="form__data--card">
                <label htmlFor="first-name">{t.form.firstName}</label>
                <input
                  className={
                    firstName.invalid ? "form__data--invalid-field" : null
                  }
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder={t.placeholders.firstName}
                  onChange={(e) => {
                    if (firstName.invalid) {
                      setFirstName((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);
                    setFirstName((prevState) => ({
                      ...prevState,
                      ["value"]: sanitizedValue,
                    }));
                  }}
                  value={firstName.value}
                />
              </div>
              <div className="form__data--card">
                <label htmlFor="last-name">{t.form.lastName}</label>
                <input
                  className={
                    lastName.invalid ? "form__data--invalid-field" : null
                  }
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder={t.placeholders.lastName}
                  onChange={(e) => {
                    if (lastName.invalid) {
                      setLastName((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);

                    setLastName((prevState) => ({
                      ...prevState,
                      ["value"]: sanitizedValue,
                    }));
                  }}
                  value={lastName.value}
                />
              </div>
              <div className="form__data--card">
                <label htmlFor="email">E-mail:</label>
                <input
                  className={email.invalid ? "form__data--invalid-field" : null}
                  id="email"
                  name="email"
                  type="text"
                  placeholder={t.placeholders.email}
                  onChange={(e) => {
                    if (email.invalid) {
                      setEmail((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);
                    setEmail((prevState) => ({
                      ...prevState,
                      ["value"]: sanitizedValue,
                    }));
                  }}
                  value={email.value}
                />
              </div>
              <div className="form__data--card">
                <label htmlFor="phone">{t.form.phone}</label>
                <input
                  className={
                    phoneNumber.invalid ? "form__data--invalid-field" : null
                  }
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.placeholders.phone}
                  onChange={(e) => {
                    if (phoneNumber.invalid) {
                      setPhoneNumber((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);
                    setPhoneNumber((prevState) => ({
                      ...prevState,
                      ["value"]: sanitizedValue,
                    }));
                  }}
                  value={phoneNumber.value}
                />
              </div>
            </div>
            <div className="form__data--room-data">
              <div className="form__data--card form__data--room-card">
                <label htmlFor="room-type">{t.form.roomType}</label>
                <select
                  className={
                    roomType.invalid ? "form__data--invalid-field" : null
                  }
                  value={roomType.value}
                  id="room-type"
                  name="room-type"
                  onChange={(e) => {
                    if (roomType.invalid) {
                      setRoomType((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }

                    setRoomType((prevState) => ({
                      ...prevState,
                      ["value"]: e.target.value,
                    }));
                  }}
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
                  className={
                    arrivalDate.invalid ? "form__data--invalid-field" : null
                  }
                  value={arrivalDate.value}
                  id="arrival-date"
                  name="arrival-date"
                  type="date"
                  min={todayDate}
                  onChange={(e) => {
                    if (arrivalDate.invalid) {
                      setArrivalDate((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }

                    setArrivalDate((prevState) => ({
                      ...prevState,
                      ["value"]: e.target.value,
                    }));
                  }}
                />
              </div>{" "}
              <div className="form__data--card form__data--room-card">
                <label htmlFor="number-of-nights">
                  {t.form.numberOfNights}
                </label>
                <input
                  className={
                    numberOfNights.invalid ? "form__data--invalid-field" : null
                  }
                  value={numberOfNights.value}
                  id="number-of-nights"
                  name="number-of-nights"
                  type="number"
                  min="1"
                  placeholder={t.placeholders.numberOfNights}
                  onChange={(e) => {
                    if (numberOfNights.invalid) {
                      setNumberOfNights((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);
                    setNumberOfNights((prevState) => ({
                      ...prevState,
                      ["value"]: sanitizedValue,
                    }));
                  }}
                />
              </div>
              <div className="form__data--card form__data--additional-info">
                <label htmlFor="additional-info">{t.form.notes}</label>
                <textarea
                  onChange={(e) => {
                    if (notes.invalid) {
                      setNotes((prevState) => ({
                        ...prevState,
                        ["invalid"]: false,
                      }));
                    }
                    const sanitizedValue = DOMPurify.sanitize(e.target.value);
                    setNotes((prevState) => ({
                      ...prevState,
                      ["value"]: sanitizedValue,
                    }));
                  }}
                  value={notes.value}
                  id="additional-info"
                  name="additional-info"
                  placeholder={t.placeholders.notes}
                />
              </div>
            </div>
            {isEmailSent ? (
              <FormStatus
                formIsSuccessfulySubmitted={isEmailSentSuccessfuly}
                handleFormSubmission={handleFormSubmission}
              />
            ) : (
              <button
                onClick={sendEmail}
                type="submit"
                className={
                  submitButtonIsClickable
                    ? "navigationbutton navigationbutton__dark "
                    : "navigationbutton navigationbutton__dark navigationbutton__disabled"
                }
              >
                {t.buttons.submit}
              </button>
            )}
          </form>
          <p className="form__content--intro">
            {t.form.text2}{" "}
            <a className="backlink" href={`tel:${restaurantPhoneNumber}`}>
              {displayedRestaurantPhoneNumber}
            </a>
            . {t.form.text3}{" "}
            <a className="backlink" href={`tel:${infoPhoneNumber}`}>
              {displayedInfoPhoneNumber}
            </a>
            .
          </p>
        </div>
        <p className="form__footer">
          <strong>{t.form.text4}:</strong> {t.form.text5}
          <a className="backlink" href={`tel:${bookingPhoneNumber}`}>
            {" "}
            {displayedBookingPhoneNumber}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Form;
