import React, { useState, useContext, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true); //to display error msg
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(amountInputRef.current.value);
    const enteredAmount = amountInputRef.current.value; //get the value of ref
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    else {	
        setAmountIsValid(true);	
      }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref= {amountInputRef}

        label="Amount"
        input={{
            
          //evaluate js; js object
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
