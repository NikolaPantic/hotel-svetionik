import { useRouter } from "next/router";
import { useState } from "react";
// import emailjs from "@emailjs/browser";
import FormField from "../FormField/FormField";
import FormStatus from "../FormStatus/FormStatus";
import en from "../../locales/en";
import sr from "../../locales/sr";

const FormMini = () => {
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
    onlyLettersAndSpaces(name) &&
    phoneValidation(phone.value) &&
    emailValidation(email.value) &&
    name.value &&
    message.value &&
    phone.value &&
    email.value;

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

      alert("Message sent!");
      setIsEmailSent(true);
      setIsEmailSentSuccessfuly(true);
      // emailjs
      //   .sendForm(
      //     "contact_service",
      //     "contact_form",
      //     "#form",
      //     "yRSlAyjSNYF9CjZxT"
      //   )
      //   .then(() => {
      //     setIsEmailSent(true);
      //   })
      //   .catch();
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
    <section className="formmini" id="form-mini">
      <h2 className="formmini__heading">{t.form.subheading}</h2>
      <form
        className="formmini__form"
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        <FormField
          labelValue={t.form.name}
          fieldValue={name.value}
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
    </section>
  );
};

export default FormMini;
