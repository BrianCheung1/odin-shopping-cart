import PropTypes from "prop-types"
import "../css/productcard.css"
import { useState } from "react"
export const ProductCard = ({ title, image, price, id, addProductToCart, removeProductFromCart }) => {

    const [quantity, setQuantity] = useState(0)


    return (
        <div className="productcard">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>${price.toFixed(2)}</p>
            <div className="add-to-cart">
                <button onClick={() => setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))}>-</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={() => addProductToCart(id, quantity)}>
                Add to Cart
            </button>
        </div>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
