import PropTypes from "prop-types"
import { useCallback, useEffect, useState } from "react"
import { IoCartOutline } from "react-icons/io5"
import "../css/cart.css"

const Cart = ({ cart, addProductToCart, removeProductFromCart }) => {
    const total = Object.values(cart).reduce((sum, value) => sum + value, 0)
    const [open, setOpen] = useState(false)
    const [products, setProducts] = useState({});

    const toggleDrawer = () => {
        setOpen(!open)
        console.log("test")
    }

    // Function to fetch product details
    const fetchProductDetails = useCallback(
        async (productId) => {
            if (!products[productId]) {
                // Avoid duplicate fetches
                const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await res.json();
                setProducts((prev) => ({ ...prev, [productId]: data }));
            }
        },
        [products] // Depend on `products` so it stays up-to-date
    );

    // Effect to fetch product details for items in the cart
    useEffect(() => {
        Object.keys(cart).forEach((productId) => {
            fetchProductDetails(productId);
        });
    }, [cart, fetchProductDetails]); // Run whenever the cart changes

    return (
        <div>
            <div onClick={toggleDrawer}>
                <IoCartOutline />
                {total}
            </div>
            {open && <div className={`cart-drawer`}>
                <div className="cart-drawer-content">
                    <button className="close-button" onClick={toggleDrawer}>
                        Close
                    </button>
                    <p>Your Cart</p>
                    {Object.entries(cart).length > 0 ? (
                        Object.entries(cart).map(([item, quantity]) => (
                            <div key={item} className="cart-item">
                                {products[item] ? (
                                    <>
                                        <p>{products[item].title}</p>
                                        <img src={products[item].image} alt={products[item].title} />
                                        <p>Price: ${(products[item].price * quantity).toFixed(2)}</p>
                                        <div className="add-to-cart">
                                            <button onClick={() => removeProductFromCart(products[item].id, 1)}>-</button>
                                            <p>{quantity}</p>
                                            <button onClick={() => addProductToCart(products[item].id, 1)}>+</button>
                                        </div>
                                    </>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
            </div>}
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
}

export default Cart
