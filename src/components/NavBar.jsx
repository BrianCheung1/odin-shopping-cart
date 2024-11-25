import { Link } from "react-router-dom"
import "../css/navbar.css"

export const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
        </div>
    )
}
