import React, { useState } from "react";
import Card from "../../UI/Card";
import classes from "./UserInput.module.css";
import Button from "../../UI/Button";

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
    setUserName("");
    setUserAge("");
  };

  return (
    <Card className={classes.input}>
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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserInput;
