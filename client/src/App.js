import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/pages/User";
import FlightFinder from "./components/pages/FlightFinder";
import TripDetails from "./components/pages/TripDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/flightFinder" component={FlightFinder} />
          <Route exact path="/tripdetails" component={TripDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
