import React, { useState } from "react";

const Array_of_object_state = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Priya", place: "Chennai" },
    { id: 2, name: "Surya", place: "Kerala" },
  ]);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: "New User",
      place: "Unknown",
    };

    setUsers([...users, newUser]);
  };

  return (
    <>
      <h1>Array_of_object_state</h1>

      <button onClick={addUser} id="btn">Add User</button>

      {users.map((user) => (
        <h4 key={user.id}>
          {user.id}. {user.name} - {user.place}
        </h4>
      ))}
    </>
  );
};

export default Array_of_object_state;
