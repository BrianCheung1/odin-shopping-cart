import { ProductCard } from "./ProductCard";
import "../css/products.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Products = ({ products, addProductToCart, removeProductFromCart }) => {
    const { name } = useParams(); // Get the dynamic route parameter `name`

    // Determine the category based on the route name
    const category =
        name === "mens-clothing"
            ? "men's clothing"
            : name === "womens-clothing"
                ? "women's clothing"
                : null;

    // Filter products based on the category
    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    return (
        <div className="products">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        addProductToCart={addProductToCart}
                        removeProductFromCart={removeProductFromCart}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
                ))
            ) : (
                <p>No products found for this category.</p>
            )}
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
};

export default Products;
