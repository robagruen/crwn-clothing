import { 
  createContext, 
  useState 
} from "react";

export const CartContext = createContext({
  cartDropdownToggled: false,
  setCartDropdownToggled: () => {}
});

export const CartProvider = ({ children }) => {
  const [cartDropdownToggled, setCartDropdownToggled] = useState(false);
  const value = { cartDropdownToggled, setCartDropdownToggled };

  return (
    <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
  )
};