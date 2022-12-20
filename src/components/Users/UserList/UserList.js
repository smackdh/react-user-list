import React from "react";
// import UserItem from "../UserItem/UserItem";
import classes from "./UserList.module.css";
import Card from "../../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
