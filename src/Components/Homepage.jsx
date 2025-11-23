import img from "../assets/Images/green-trees.avif";
import "../App.css";

const Homepage = () => {
  return (
    <section className="page homepage">
      <h1>Welcome — React state Examples</h1>
      <div className="homepage-img-wrap">
        <img src={img} alt="green trees" className="homepage-img" />
      </div>
      <p className="muted">
        This small demo shows different state techniques in React such as string state, numbers,
        ternary, optional, nullish, object values and array-of-object rendering.
      </p>
    </section>
  );
};

export default Homepage;
