import React, { useState } from "react";
import UserList from "./components/Users/UserList/UserList";
import UserInput from "./components/Users/UserInput/UserInput";

function App() {
  const [userList, setUserList] = useState([
    { name: "Suwon", id: "u1" },
    { name: "Mattias", id: "u2" },
  ]);

  const addUserHandler = (enteredName) => {
    setUserList((previousUsers) => {
      const updatedUserList = [...previousUsers];
      updatedUserList.unshift({
        name: enteredName,
        id: Math.random().toString(),
      });
      return updatedUserList;
    });
  };

  let content = <p>No content. Maybe add a user?</p>;

  if (userList.length > 0) {
    content = <UserList items={userList} />;
  }

  return (
    <div>
      <section>
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
