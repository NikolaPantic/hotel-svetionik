const FormField = ({
  wide = false,
  invalidField,
  fieldValue,
  labelValue,
  placeholder = "Placeholder",
  onChangeFunction = () => {},
}) => {
  return (
    <div className="formfield">
      <label htmlFor={labelValue}>{labelValue}</label>
      {!wide ? (
        <input
          type="text"
          id={labelValue}
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
          name="area"
          id={labelValue}
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
