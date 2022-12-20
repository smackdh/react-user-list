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
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameInputHandler}
        ></input>

        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={userAgeInputHandler}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default UserInput;
