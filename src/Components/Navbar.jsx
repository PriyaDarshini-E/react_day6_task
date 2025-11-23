import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="name">
        <h4>Priya Darshini Assignment</h4>
      </div>

      <nav className="nav-links">
        <Link className="linklist" to="/">Home</Link>
        <Link className="linklist" to="/String_state">String_state</Link>
        <Link className="linklist" to="/Number_state">Number_state</Link>
        <Link className="linklist" to="/Ternary_state">Ternary_state</Link>
        <Link className="linklist" to="/Array_state">Array_state</Link>
        <Link className="linklist" to="/Object_state">Object_state</Link>
        <Link className="linklist" to="/Array_of_object_state">Array_of_object_state</Link>
      </nav>
    </header>
  );
};

export default Navbar;
