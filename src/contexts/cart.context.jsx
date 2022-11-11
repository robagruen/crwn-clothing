import { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  cartDropdownToggled: false,
  setCartDropdownToggled: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  cartTotal: 0,
  setCartItemCount: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartDropdownToggled, setCartDropdownToggled] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (cartItem) => {
    setCartItems(removeCartItem(cartItems, cartItem));
  };

  const clearItemFromCart = (cartItem) => {
    setCartItems(clearCartItem(cartItems, cartItem));
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
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
