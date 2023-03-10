import React, { useState } from "react";
import UserList from "./components/Users/UserList/UserList";
import UserInput from "./components/Users/UserInput/UserInput";

function App() {
  const [userList, setUserList] = useState([
    { name: "Suwon", age: 27, id: "u1" },
    { name: "Mattias", age: 30, id: "u2" },
  ]);

  const addUserHandler = (user) => {
    setUserList((previousUsers) => {
      const updatedUserList = [...previousUsers];
      updatedUserList.unshift({
        name: user.name,
        age: user.age,
        id: Math.random().toString(),
      });
      return updatedUserList;
    });
  };

  let content = <UserList items={[]} />;

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
