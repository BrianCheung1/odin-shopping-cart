import { ProductCard } from "./ProductCard";
import "../css/products.css";
import PropTypes from "prop-types"


const Products = ({ products, addProductToCart, removeProductFromCart }) => {
    return (
        <div className="products">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    addProductToCart={addProductToCart }
                    removeProductFromCart={removeProductFromCart}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                >
                </ProductCard>
            ))}
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
}

export default Products;
