import React, { Component } from 'react';
import FlightSearchForm from '../FlightSearchForm';
import { withAuthorization } from './Session';

class FlightFinder extends Component {
  state = {

  }
  render() {
    return (
      <div style={{ minWidth: "100vw", minHeight: "100vh" }}>
        Hello this is the flight finder page.
        <FlightSearchForm />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FlightFinder);