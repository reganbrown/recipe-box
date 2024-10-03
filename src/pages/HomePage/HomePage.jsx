import HalfPage from "../../components/HalfPage/HalfPage";
import "./HomePage.scss";
const HomePage = () => {
    return (
        <>
            <div className="container">
                <HalfPage className="left" text="Open a Receipe" />
                <HalfPage className="right" text="Create a Receipe" />
            </div>
        </>
    );
  };
  
  export default HomePage;