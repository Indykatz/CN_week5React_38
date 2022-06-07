const Form = ({
  handleSubmit,
  nameInput,
  setNameInput,
  ageInput,
  setAgeInput,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Enter your name:
        <input
          type="text"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
      </label>
      <p>
        <label>
          Enter your age:
          <input
            type="text"
            value={ageInput}
            onChange={(e) => {
              setAgeInput(e.target.value);
            }}
          />
        </label>
      </p>
      <input className="submitButton" type="submit" />
    </form>
  );
};

export default Form;
