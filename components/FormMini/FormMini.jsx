import { useRouter } from "next/router";
import { useState } from "react";
// import emailjs from "@emailjs/browser";
import FormField from "../FormField/FormField";
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

  const phoneValidation = (phone) => {
    return /[0-9]{9,13}/.test(phone);
  };

  const emailValidation = (email) => {
    return /[\.a-z0-9]+@[a-z]+\.[a-z]{2,4}/.test(email);
  };

  const buttonIsAllowed =
    phoneValidation(phone.value) &&
    emailValidation(email.value) &&
    name &&
    message &&
    phone &&
    message;

  // const sendEmail = () => {
  //   if (
  //     name.value !== "" &&
  //     onlyLettersAndSpaces(name.value) &&
  //     phoneValidation(phone.value) &&
  //     emailValidation(email.value) &&
  //     message.value !== ""
  //   ) {
  //     setName((prevState) => ({ ...prevState, ["invalid"]: false }));
  //     setEmail((prevState) => ({ ...prevState, ["invalid"]: false }));
  //     setPhone((prevState) => ({ ...prevState, ["invalid"]: false }));
  //     setMessage((prevState) => ({ ...prevState, ["invalid"]: false }));

  //     emailjs
  //       .sendForm(
  //         "contact_service",
  //         "contact_form",
  //         "#form",
  //         "yRSlAyjSNYF9CjZxT"
  //       )
  //       .then(() => {
  //         setIsEmailSent(true);
  //       })
  //       .catch();
  //   }
  //   if (!onlyLettersAndSpaces(firstName.value) || name.value === "") {
  //     setName((prevState) => ({ ...prevState, ["invalid"]: true }));
  //   }
  //   if (!phoneValidation(phone.value)) {
  //     setPhone((prevState) => ({ ...prevState, ["invalid"]: true }));
  //   }
  //   if (!emailValidation(email.value)) {
  //     setEmail((prevState) => ({ ...prevState, ["invalid"]: true }));
  //   }
  //   if (message.value == "") {
  //     setMessage((prevState) => ({ ...prevState, ["invalid"]: true }));
  //   }
  // };

  return (
    <section className="formmini">
      <h2 className="formmini__heading">{t.form.subheading}</h2>
      <form className="formmini__form">
        <FormField
          labelValue={t.form.name}
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
        />
        <FormField
          labelValue={t.form.phone}
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
        />
        <FormField
          labelValue={t.form.email}
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
        />
        <FormField
          labelValue={t.form.message}
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
        />

        <button
          className={
            buttonIsAllowed
              ? "navigationbutton navigationbutton__dark"
              : "navigationbutton navigationbutton__dark navigationbutton__disabled"
          }
        >
          {t.buttons.submit}
        </button>
      </form>
    </section>
  );
};

export default FormMini;
