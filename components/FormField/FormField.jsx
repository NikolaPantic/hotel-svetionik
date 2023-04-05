const FormField = ({
  wide = false,
  invalidField,
  fieldValue,
  labelValue,
  fieldId,
  placeholder = "Placeholder",
  onChangeFunction = () => {},
}) => {
  return (
    <div className="formfield">
      <label htmlFor={fieldId}>{labelValue}</label>
      {!wide ? (
        <input
          type="text"
          id={fieldId}
          name={fieldId}
          className={
            invalidField
              ? "formfield--text formfield--text__invalid"
              : "formfield--text"
          }
          placeholder={placeholder}
          onChange={onChangeFunction}
          value={fieldValue}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={fieldValue}
          name={fieldId}
          id={fieldId}
          className={
            invalidField
              ? "formfield--text formfield--text-area formfield--text__invalid"
              : "formfield--text formfield--text-area"
          }
          onChange={onChangeFunction}
        ></textarea>
      )}
    </div>
  );
};

export default FormField;
