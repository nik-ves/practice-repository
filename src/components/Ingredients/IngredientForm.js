import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [nameInput, setNameInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddIngredient({ title: nameInput, amount: amountInput });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={nameInput}
              onChange={nameChangeHandler}
            />
          </div>

          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amountInput}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
