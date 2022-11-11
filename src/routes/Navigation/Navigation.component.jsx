import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "./../../components/CartIcon/CartIcon.component";
import CartDropdown from "./../../components/CartDropdown/CartDropdown.component";

import { ReactComponent as CrwnLogo } from "./../../assets/svg/logo.svg";
import { UserContext } from "./../../contexts/user.context";
import { CartContext } from "./../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartDropdownToggled } = useContext(CartContext);

  return (
    <Fragment>
      <header className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser
            ? (
              <a href="#" className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </a>
            )
            : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}

          <CartIcon />
        </div>
        {cartDropdownToggled && <CartDropdown />}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
