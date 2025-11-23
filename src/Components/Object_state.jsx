import React, { useState } from "react";

const Object_state = () => {
  const [person, setPerson] = useState({
    name: "Priya",
    age: 20,
  });

  const updatePerson = () => {
    setPerson({
      ...person,
      age: person.age + 1,     // increment age
    });
  };

  return (
    <>
      <h1>Object_state</h1>

      <button onClick={updatePerson} id="btn">Update Age</button>

      <h4>Name: {person.name}</h4>
      <h4>Age: {person.age}</h4>
    </>
  );
};

export default Object_state;
