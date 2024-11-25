import { useEffect } from "react";
import { NavBar } from "./NavBar"
import Products from "./Products"
import { useState } from "react";
import Cart from "./Cart";

export const Shop = () => {
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

    const removeProductFromCart = (productId, quantity) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId]) {
                // If the product is already in the cart, update the quantity
                updatedCart[productId] -= quantity;
            } 
            if (updatedCart[productId] <= 0) {
                // If the quantity becomes zero or less, remove the product from the cart
                delete updatedCart[productId];
            }
            return updatedCart;
        });
    };

    return (
        <div>
            <NavBar />
            <Products products={products} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />
            <Cart cart={cart} />
        </div>
    )
}
