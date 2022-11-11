import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "./../Button/Button.compnent";
import CartItem from "../CartItem/CartItem.component";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
