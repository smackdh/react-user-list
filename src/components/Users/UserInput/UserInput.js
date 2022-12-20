import React, { useState } from "react";

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const userInputHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Name</label>
        <input type="text" onChange={userInputHandler}></input>
      </div>
      <div>
        <label>Age(Years)</label>
        <input type="text"></input>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default UserInput;
