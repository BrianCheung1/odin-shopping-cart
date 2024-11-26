import { Link } from "react-router-dom"
import "../css/navbar.css"
import Cart from "./Cart"
import PropTypes from "prop-types"


export const NavBar = ({ cart, addProductToCart, removeProductFromCart }) => {
    return (
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/products">Shop</Link>
            <Cart cart={cart} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />
        </div>
    )
}

NavBar.propTypes = {
    cart: PropTypes.object.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
}