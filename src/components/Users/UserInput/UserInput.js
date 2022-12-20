import React, { useState } from "react";
import Card from "../../UI/Card";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeInputHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: userName,
      age: userAge,
    };

    props.onAddUser(userData);
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={userName}
            onChange={userNameInputHandler}
          ></input>
        </div>
        <div>
          <label>Age(Years)</label>
          <input
            type="number"
            value={userAge}
            onChange={userAgeInputHandler}
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
    </Card>
  );
};

export default UserInput;
