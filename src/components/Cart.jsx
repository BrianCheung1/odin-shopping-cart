const Cart = ({cart}) => {
    const total = Object.values(cart).reduce((sum, value) => sum + value, 0);
    return (
        <div>Total Items in Cart:{total} {console.log(cart)}</div>
    )
}

export default Cart