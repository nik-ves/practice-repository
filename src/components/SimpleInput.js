import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHanlder = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // prevents reload on form submit

    // checking if input is empty
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return; // return cancels code executions from below
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => not ideal, dont manipulate the dom
    setEnteredName("");
  };

  // checking if enteredNameIsValid is true
  // if true add one class and if false add another
  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHanlder}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
