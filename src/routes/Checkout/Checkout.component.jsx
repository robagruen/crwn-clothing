import { useContext } from "react";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

import { CartContext } from "../../contexts/cart.context";

import "./Checkout.styles.scss";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item}></CheckoutItem>
      ))}
      <div>Total: ${cartTotal}</div>
    </div>
  );
}

export default Checkout;
