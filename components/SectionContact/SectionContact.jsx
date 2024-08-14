import FormField from "../FormField/FormField";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import en from "../../locales/en";
import sr from "../../locales/sr";
import { useState } from "react";
import FormStatus from "../FormStatus/FormStatus";
import { hotelEmailAddress, infoPhoneNumber } from "../../data/hotelData";

const SectionContact = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const [name, setName] = useState({ value: "", invalid: false });
  const [phone, setPhone] = useState({ value: "", invalid: false });
  const [email, setEmail] = useState({ value: "", invalid: false });
  const [message, setMessage] = useState({ value: "", invalid: false });
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

  const handleFormSubmission = () => {
    if (isEmailSentSuccessfuly) {
      setIsEmailSent(false);
      setIsEmailSentSuccessfuly(false);
      setName((prevState) => ({ ...prevState, ["value"]: "" }));
      setPhone((prevState) => ({ ...prevState, ["value"]: "" }));
      setEmail((prevState) => ({ ...prevState, ["value"]: "" }));
      setMessage((prevState) => ({ ...prevState, ["value"]: "" }));
    } else {
      sendEmail();
    }
  };

  const submitButtonIsClickable =
    name.value && message.value && phone.value && email.value;

  const sendEmail = () => {
    if (
      name.value !== "" &&
      onlyLettersAndSpaces(name.value) &&
      phoneValidation(phone.value) &&
      emailValidation(email.value) &&
      message.value !== ""
    ) {
      setName((prevState) => ({ ...prevState, ["invalid"]: false }));
      setEmail((prevState) => ({ ...prevState, ["invalid"]: false }));
      setPhone((prevState) => ({ ...prevState, ["invalid"]: false }));
      setMessage((prevState) => ({ ...prevState, ["invalid"]: false }));

      // alert("Message sent!");
      // setIsEmailSent(true);
      // setIsEmailSentSuccessfuly(true);
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          "#contact-form-mini",
          "yRSlAyjSNYF9CjZxT"
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
    if (!onlyLettersAndSpaces(name.value) || name.value === "") {
      setName((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!phoneValidation(phone.value)) {
      setPhone((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!emailValidation(email.value)) {
      setEmail((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (message.value == "") {
      setMessage((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
  };

  return (
    <section className="section sectioncontact">
      <h2 className="heading-secondary">{t.common.contact}</h2>

      <p>
        {t.sections.contact.text1}{" "}
        <a href={`mailto:${hotelEmailAddress}`} className="backlink">
          {t.sections.contact.text2}
        </a>
        ,{" "}
        <a href={`tel:${infoPhoneNumber}`} className="backlink">
          {t.sections.contact.text3}
        </a>{" "}
        {t.sections.contact.text4}{" "}
        <a
          href="https://goo.gl/maps/XMqbpMmLQgFx5qL29"
          target="_blank"
          rel="noreferrer"
          className="backlink"
        >
          {t.sections.contact.text5}
        </a>
      </p>

      <div className="sectioncontact__content">
        <div className="sectioncontact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.190561748924!2d20.19072301553119!3d44.67488687909958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a14e5d12a9d3d%3A0xf25f1bfe79ba3dfa!2z0KXQvtGC0LXQuyDQodCy0LXRgtC40L7QvdC40Lo!5e0!3m2!1ssr!2srs!4v1674165753674!5m2!1ssr!2srs"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Svetionik mapa"
          ></iframe>
        </div>
        <div className="sectioncontact__form-and-info">
          <form
            id="contact-form-mini"
            className="sectioncontact__form-and-info--form"
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
          >
            <h3 className="heading-small">{t.sections.contact.formHeading}</h3>
            <FormField
              labelValue={t.form.name}
              fieldValue={name.value}
              fieldId="name"
              placeholder={t.placeholders.name}
              onChangeFunction={(e) => {
                if (name.invalid) {
                  setName((prevState) => ({
                    ...prevState,
                    ["invalid"]: false,
                  }));
                }

                setName((prevState) => ({
                  ...prevState,
                  ["value"]: e.target.value.trim(),
                }));
              }}
              invalidField={name.invalid}
            />
            <FormField
              labelValue={t.form.phone}
              fieldValue={phone.value}
              fieldId="phone"
              placeholder={t.placeholders.phone}
              onChangeFunction={(e) => {
                if (phone.invalid) {
                  setPhone((prevState) => ({
                    ...prevState,
                    ["invalid"]: false,
                  }));
                }

                setPhone((prevState) => ({
                  ...prevState,
                  ["value"]: e.target.value.trim(),
                }));
              }}
              invalidField={phone.invalid}
            />
            <FormField
              labelValue={t.form.email}
              fieldId="email"
              fieldValue={email.value}
              placeholder={t.placeholders.email}
              onChangeFunction={(e) => {
                if (email.invalid) {
                  setEmail((prevState) => ({
                    ...prevState,
                    ["invalid"]: false,
                  }));
                }

                setEmail((prevState) => ({
                  ...prevState,
                  ["value"]: e.target.value.trim(),
                }));
              }}
              invalidField={email.invalid}
            />
            <FormField
              labelValue={t.form.message}
              fieldValue={message.value}
              field="message"
              wide={true}
              placeholder={t.placeholders.message}
              onChangeFunction={(e) => {
                if (message.invalid) {
                  setMessage((prevState) => ({
                    ...prevState,
                    ["invalid"]: false,
                  }));
                }

                setMessage((prevState) => ({
                  ...prevState,
                  ["value"]: e.target.value.trim(),
                }));
              }}
              invalidField={message.invalid}
            />
            {isEmailSent ? (
              <FormStatus
                formIsSuccessfulySubmitted={isEmailSentSuccessfuly}
                handleFormSubmission={handleFormSubmission}
              />
            ) : (
              <button
                onClick={sendEmail}
                className={
                  submitButtonIsClickable
                    ? "navigationbutton navigationbutton__dark"
                    : "navigationbutton navigationbutton__dark navigationbutton__disabled"
                }
              >
                {t.buttons.submit}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
