import { Link } from "react-router-dom";
import menClothingImage from "../assets/men-clothing.jpg";
import womenClothingImage from "../assets/women-clothing.jpg";
import "../css/homecard.css"

export const HomeCard = () => {
    return (
        <div className="homecard">
            <Link to="/shop"><img src={menClothingImage} alt="Men's Clothing" /></Link>
            <Link to="/shop"><img src={womenClothingImage} alt="Female clothing" /></Link>
        </div>
    );
};