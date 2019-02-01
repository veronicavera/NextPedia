import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import SignInLink from '../SignIn'
import API from '../../utils/API';
import { withFirebase } from '../../index';
import * as ROUTES from '../../../constants/routes';
import './signup.css';

const SignUpPage = () => (
  <div className="container-div">
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Sign Up</h1>
        <SignUpForm />
      </div>
    </div>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  suitcase: [],
  trips: [],
  tripid: [],
  error: null,
  
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    event.preventDefault()
    // console.log(
    //   this.state.email,
    //   this.state.suitcase,
    //   this.state.trips,
    //   this.state.tripid
    // )

   API.addUser(this.state.email)
  //  API.postUser(this.state.suitcase).then(user => user, this.state.email)
  // API.addTrips(this.state.trips)

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne, username)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.LANDING);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit} style={{ flexDirection: 'column', height: '90%' }}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit" className="btn btn-outline-success">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink, SignUpPage };