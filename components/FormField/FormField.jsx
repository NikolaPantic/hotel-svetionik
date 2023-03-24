const FormField = ({
  wide = false,
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
          className="formfield--text"
          placeholder={placeholder}
          onChange={onChangeFunction}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name="area"
          id={labelValue}
          className="formfield--text formfield--text-area"
          onChange={onChangeFunction}
        ></textarea>
      )}
    </div>
  );
};

export default FormField;
