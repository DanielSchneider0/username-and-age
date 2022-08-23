import React, { useState } from "react";

import AddUser from "./Users/AddUser";

import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList list={usersList} />
    </div>
  );
}

export default App;
