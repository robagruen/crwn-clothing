import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from './../Button/Button.compnent';
import CartItem from '../CartItem/CartItem.component';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map((item) => (
            <CartItem key={ item.id } cartItem={ item }></CartItem>
          ))
        }
      </div>
      <Button>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown;