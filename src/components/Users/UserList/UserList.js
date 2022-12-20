import React from "react";
import UserItem from "../UserItem/UserItem";
import classes from "./UserList.module.css";
import Card from "../../UI/Card";

const UserList = (props) => {
  return (
    <card>
      <ul>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
          ></UserItem>
        ))}
      </ul>
    </card>
  );
};

export default UserList;
