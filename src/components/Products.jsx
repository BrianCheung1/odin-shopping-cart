import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import "../css/products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})

    useEffect(() => {
        // Fetch products
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
            });
    }, []);

    // Function to add product to the cart
    const addProductToCart = (productId, quantity) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId]) {
                // If the product is already in the cart, update the quantity
                updatedCart[productId] += quantity;
            } else {
                // Otherwise, add the product with the specified quantity
                updatedCart[productId] = quantity;
            }
            return updatedCart;
        });
    };


    return (
        <div className="products">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    onClick={() => { addProductToCart(product.id, 1) }}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                >
                </ProductCard>
            ))}
        </div>
    );
};

export default Products;
