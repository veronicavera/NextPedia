import React, { Component } from 'react';
import FlightSearchForm from '../FlightSearchForm';
class FlightFinder extends Component {
  state = {

  }
  render() {
    return (
      <div>
        Hello this is the flight finder page.
        <FlightSearchForm />
      </div>
    );
  }
}

export default FlightFinder;