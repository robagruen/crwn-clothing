import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {
  // find if cartItems contains product
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems / new cart item
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  cartDropdownToggled: false,
  setCartDropdownToggled: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  setCartItemCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartDropdownToggled, setCartDropdownToggled] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
    incrementCartItemCount();
  };

  const incrementCartItemCount = () => {
    setCartItemCount(cartItemCount + 1);
  };

  const value = {
    cartDropdownToggled,
    setCartDropdownToggled,
    addItemToCart,
    cartItems,
    cartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
