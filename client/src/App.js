import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dotenv from "dotenv";

import {
  About,
  Contact,
  FAQ,
  FlightFinder,
  Landing,
  TripDetails,
  User,
  SignUpPage,
  SignInPage
} from "./components/pages";
import { withAuthentication } from "./components/Session";
import { AccountPage, Navigation, Footer } from "./components/index"
import './components/reset.css';
import MyFlightDetails from './components/FlightDetails/FlightDetails';

dotenv.config();

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/user" component={User} />
            <Route exact path="/flightFinder" component={FlightFinder} />
            <Route exact path="/flights/:startAirport/:endAirport/:date" component={MyFlightDetails} />
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
