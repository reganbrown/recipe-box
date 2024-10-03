import HalfPage from "../../components/halfPage/halfPage";
import { Link } from "react-router-dom";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <Link className="links" to="/OpenReceipe">
          <HalfPage className="left" text="Open a Receipe" />
        </Link>
        <Link className="links" to="/CreateRecipe">
          <HalfPage className="right" text="Create a Recipe" />
        </Link>
      </div>
    </>
  );
};

export default HomePage;
