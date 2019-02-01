import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import './navigation.css';

const btnStyle = {
  lineHeight: 'inherit',
  padding: '0.25rem'
};

const Navigation = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <>
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
      </AuthUserContext.Consumer>
    </>
  </nav>
);

const NavigationAuth = () => (
  <ul className='navbar-nav links'>
    <li style={btnStyle}>
      <Link to={ROUTES.SIGN_UP}>Home</Link>
    </li>
    <li style={btnStyle}>
      <Link to={ROUTES.ACCOUNT}>Profile</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

class NavigationNonAuth extends React.Component {
  state = {
    signIn: false
  };
  componentDidMount() {
    console.log(this);
  }
  render() {
    return !this.state.signIn ? (
      <ul className='navbar-nav links'>
        <li style={btnStyle}>
          <Link to={ROUTES.LANDING}>Home</Link>
        </li>
        <li style={btnStyle}>
          <Link
            to={ROUTES.SIGN_IN}
            className='btn btn-outline-primary linkBtn'
            onClick={() => this.setState({ signIn: true })}
          >
            Sign In
          </Link>
        </li>
      </ul>
    ) : (
      <ul className='navbar-nav links'>
        <li style={btnStyle}>
          <Link
            to={ROUTES.LANDING}
            onClick={() => this.setState({ signIn: false })}
          >
            Home
          </Link>
        </li>
        <li style={btnStyle}>
          <Link
            to={ROUTES.SIGN_UP}
            className='btn btn-outline-primary linkBtn'
            onClick={() => this.setState({ signIn: false })}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
