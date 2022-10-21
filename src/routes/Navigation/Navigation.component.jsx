import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from './../../assets/svg/logo.svg';

import './Navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <header className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;