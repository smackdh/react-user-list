import React, { useState } from "react";
import Card from "../../UI/Card";
import classes from "./UserInput.module.css";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeInputHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please input a valid name and age (non-empty values).",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please input a valid age (larger than 1).",
      });
      return;
    }
    const userData = {
      name: userName,
      age: userAge,
    };

    props.onAddUser(userData);
    setUserName("");
    setUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancel={errorHandler}
        />
      )}
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
    </div>
  );
};

export default UserInput;
