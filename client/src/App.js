import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import {
  FlightFinder,
  TripDetails,
  Landing,
  User,
  FAQ,
  About,
  Contact
} from "./components/pages";
import { withAuthentication } from "./components/pages/Session";
import SignUpPage from "./components/pages/SignUp";
import AccountPage from "./components/pages/Account"

import SignInPage from "./components/pages/SignIn";
import Navigation from "./components/pages/Navigation";
import HomePage from "./components/pages/Home";
import { MenuBar, Footer } from "./components";
import dotenv from "dotenv";
dotenv.config();

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/test" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/flightFinder" component={FlightFinder} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/tripdetails" component={TripDetails} />
            <Route exact path="/Account" component={AccountPage} />
          </Switch>
          <Footer />
        </>
      </Router>
    );
  }
}

export default withAuthentication(App);
