const FormField = ({
  wide = false,
  labelValue,
  placeholder = "Placeholder",
}) => {
  return (
    <div className="formfield">
      <label htmlFor={labelValue}>{labelValue}</label>
      {!wide ? (
        <input
          type="text"
          id={labelValue}
          className="formfield--text"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name="area"
          id={labelValue}
          className="formfield--text formfield--text-area"
        ></textarea>
      )}
    </div>
  );
};

export default FormField;
