import { useParams } from "react-router-dom"
import { Home } from "./Home"
import { NavBar } from "./NavBar"
import { useState, useEffect } from "react"
import Products from "./Products"

export const App = () => {
    const { name } = useParams();  // Get the dynamic route parameter `name`
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

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
                updatedCart[productId] += quantity;
            } else {
                updatedCart[productId] = quantity;
            }
            return updatedCart;
        });
    };

    // Function to remove product from the cart
    const removeProductFromCart = (productId, quantity) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId]) {
                updatedCart[productId] -= quantity;
            }
            if (updatedCart[productId] <= 0) {
                delete updatedCart[productId];
            }
            return updatedCart;
        });
    };

    return (
        <div>
            <NavBar cart={cart} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />
            {name === undefined || name=== "home" ? (
                <Home />  // Render Home if there's no `name` (i.e., for root path "/")
            ) : (
                <Products products={products} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />
            )}
        </div>
    );
}
