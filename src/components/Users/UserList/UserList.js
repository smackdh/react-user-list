import React from "react";
import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
        ></UserItem>
      ))}
    </ul>
  );
};

export default UserList;
