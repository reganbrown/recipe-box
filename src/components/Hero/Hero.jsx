import "./Hero.scss";
import FrenchFries from "../../assets/Images/Homemade-French-Fries_8.jpg"
export default function Hero() {
    return (
        <div className="hero">
            <img src={FrenchFries} alt="French-Fries" className="hero__image"/>
        </div>
    )
}
