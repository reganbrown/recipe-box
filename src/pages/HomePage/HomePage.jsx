import HalfPage from "../../components/HalfPage/HalfPage";
import { Link } from "react-router-dom";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <Link className="links" to="/recipes">
          <HalfPage className="left" text="Open a Recipe" />
        </Link>
        <Link className="links" to="/CreateRecipe">
          <HalfPage className="right" text="Create a Recipe" />
        </Link>
      </div>
    </>
  );
};

export default HomePage;
