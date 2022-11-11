import { useContext } from "react";

import { CartContext } from "./../../contexts/cart.context";

import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const decrementItemHandler = () => removeItemFromCart(checkoutItem);
  const incrementItemHandler = () => addItemToCart(checkoutItem);
  const clearItemHandler = () => clearItemFromCart(checkoutItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <h2 className="name">
        <span>{name}</span>
      </h2>
      <div className="price">
        <span>{price}</span>
      </div>
      <div className="quantity">
        <button onClick={decrementItemHandler}>&lsaquo;</button>
        <span>{quantity}</span>
        <button onClick={incrementItemHandler}>&rsaquo;</button>
      </div>
      <div className="remove">
        <button className="remove-button" onClick={clearItemHandler}>
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
