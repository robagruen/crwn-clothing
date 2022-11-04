import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from './../../assets/svg/shopping-bag.svg'

import { CartContext } from './../../contexts/cart.context';

import './CartIcon.styles.scss';

const CartIcon = () => {
  const { cartDropdownToggled, setCartDropdownToggled } = useContext(CartContext);

  const toggleCartDropdown = () => setCartDropdownToggled(!cartDropdownToggled);

  return (
    <div className="cart-icon-container" onClick={ toggleCartDropdown }>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon;