import React, { Component } from 'react';
import FlightSearchForm from '../FlightSearchForm';
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

export default FlightFinder;