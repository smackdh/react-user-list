import React, { useState } from "react";

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const userNameInputHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(event.target.value);
  };

  const userAgeInputHandler = (event) => {
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
        <input type="text" onChange={userNameInputHandler}></input>
      </div>
      <div>
        <label>Age(Years)</label>
        <input type="text" onChange={userAgeInputHandler}></input>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default UserInput;
