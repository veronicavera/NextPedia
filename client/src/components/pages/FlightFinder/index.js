import React, { Component } from 'react';
import { withAuthorization, FlightSearchForm } from '../../index';

class FlightFinder extends Component {
  state = {

  }
  render() {
    return (
      <div style={{ minWidth: "100vw", minHeight: "100vh" }}>
        <FlightSearchForm />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FlightFinder);