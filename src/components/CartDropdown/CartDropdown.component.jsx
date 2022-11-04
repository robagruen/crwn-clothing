import Button from './../Button/Button.compnent';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">

      </div>
      <Button>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown;