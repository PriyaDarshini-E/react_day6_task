import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Homepage from "./Components/Homepage.jsx";
import String_state from "./Components/String_state.jsx";
import Number_state from "./Components/Number_state.jsx";
import Ternary_state from "./Components/Ternary_state.jsx";
import Array_state from "./Components/Array_state.jsx";
import Object_state from "./Components/Object_state.jsx";
import Array_of_object_state from "./Components/Array_of_object_state.jsx";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/String_state" element={<String_state />} />
          <Route path="/Number_state" element={<Number_state />} />
          <Route path="/Ternary_state" element={<Ternary_state />} />
          <Route path="/Array_state" element={<Array_state />} />
          <Route path="/Object_state" element={<Object_state />} />
          <Route path="/Array_of_object_state" element={<Array_of_object_state />} />
      
        </Routes>
      </main>
    </>
  );
};

export default App;
