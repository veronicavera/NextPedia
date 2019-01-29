import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import './navigation.css';

const logOutBtnStyle = {
  lineHeight: 'inherit',
  padding: '0.25rem'
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <>

      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </>
  </nav>
);

const NavigationAuth = () => (
  <ul className="navbar-nav links">
    <li style={logOutBtnStyle}>
      <Link to={ROUTES.FLIGHTFINDER} >Home</Link>
    </li>
    <li style={logOutBtnStyle}>
      <Link to={ROUTES.ACCOUNT} >Profile</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="navbar-nav links">
    <li style={logOutBtnStyle}>
      <Link to={ROUTES.LANDING} >Home</Link>
    </li>
    <li style={logOutBtnStyle}>
      <Link to={ROUTES.SIGN_IN} >Sign In</Link>
    </li>
  </ul>
);

export default Navigation;