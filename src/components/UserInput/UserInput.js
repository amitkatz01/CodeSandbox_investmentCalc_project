import { useState } from "react";
import classes from "./UserInput.module.css";
function UserInput(props) {
  const initialFormInputs = {
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: ""
  };
  const [formInputs, setFormInputs] = useState(initialFormInputs);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    //preventing reload page every time the form is submitted
    //form submitted when "Calculate" button is clicked
    props.onCalculate(formInputs);
  };
  const resetHandler = () => {
    console.log("RESET");
    setFormInputs(initialFormInputs);
  };

  const changeHandler = (input, value) => {
    // Create a copy of the formInputs object and update the specific input
    setFormInputs((prevFormInputs) => {
      return {
        ...prevFormInputs,
        [input]: +value
      };
    });
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            value={formInputs["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            value={formInputs["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            value={formInputs["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler("duration", event.target.value)}
            value={formInputs.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
export default UserInput;
