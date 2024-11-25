import PropTypes from "prop-types"
import "../css/productcard.css"
export const ProductCard = ({ title, image, price, onClick }) => {
    return (
        <div className="productcard">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>${price.toFixed(2)}</p>
            <button onClick={onClick}>
                Add to Cart
            </button>
        </div>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}
