const FormStatus = ({ formIsSuccessfulySubmitted, handleFormSubmission }) => {
  return (
    <div className="formstatus">
      <p
        className={
          formIsSuccessfulySubmitted
            ? "formstatus__text"
            : "formstatus__text formstatus__text--invalid"
        }
      >
        {formIsSuccessfulySubmitted
          ? "Uspešno ste poslali upit!"
          : "Nažalost, nešto nije u redu. Molimo pokušajte ponovo."}
      </p>
      <span className="formstatus__action" onClick={handleFormSubmission}>
        {formIsSuccessfulySubmitted
          ? "Pošalji još jedan upit"
          : "Pokušaj ponovo"}
      </span>
    </div>
  );
};

export default FormStatus;
