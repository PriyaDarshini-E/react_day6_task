import React, { useState } from "react";

const String_state = () => {
  const [string_1, setString_1] = useState("priya");

  const change = () => {
    if (string_1 === "priya") {
      setString_1("priya darshini");
    } else {
      setString_1("priya");
    }
  };

  const [string_2, setString_2] = useState("State is like a memory inside a React component.")
  const define = () => {
    if (string_2 === "State is like a memory inside a React component.") {
      setString_2("It is used to store data that can change when the user interacts with your page — like clicking a button, typing in a box, increasing a counter, etc.,When the state changes, React will automatically update the UI on the screen.")
    } else {
      setString_2("State is like a memory inside a React component.")
    }

  }
  const [count, setCount] = useState(1);
  const [string_3, setString_3] = useState("Keerthy");

  const handleClick = () => {
    let newCount = count + 1;

    // when count reaches 6, reset to 1
    if (newCount > 5) {
      newCount = 1;
    }

    setCount(newCount);

    // repeat Keerthy newCount times
    setString_3("Keerthy ".repeat(newCount).trim());
  };


  return (
    <>
      <h1>String_state</h1>

      <button onClick={change}>string_1</button>
      <h4>Updated string - {string_1}</h4>

      <button onClick={define}>string_2</button>
      <h4>Updated string - {string_2}</h4>

      <button onClick={handleClick}>string_3</button>
      <h4>Updated string - {string_3}</h4>
    </>
  );
};

export default String_state;
