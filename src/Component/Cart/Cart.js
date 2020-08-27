import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div >
            <h4>Your Selected Courses</h4>
            <h5>Added Courses: {cart.length}</h5>
            <h6>Total Amount: ${total}</h6>
            <button className="btn btn-outline-success mt-3">Place Order</button>
        </div>
    );
};

export default Cart;