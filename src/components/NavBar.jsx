import { Link } from "react-router-dom"
import "../css/navbar.css"
import Cart from "./Cart"

export const NavBar = ({ cart }) => {
    return (
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/products">Shop</Link>
            <Cart cart={cart} />
        </div>
    )
}
