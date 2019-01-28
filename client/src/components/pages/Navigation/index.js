import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../../constants/routes';

import { AuthUserContext } from '../Session';
import './navigation.css';

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
    <li>
      <Link to={ROUTES.FLIGHTFINDER}>Flight Finder</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Profile</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="navbar-nav links">
    <li>
      <Link to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;