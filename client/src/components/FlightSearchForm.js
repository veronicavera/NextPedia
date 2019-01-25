import React, { Component } from "react";
import Calendar from './Calendar';

class FlightSearchForm extends Component {
  state = {
    departureDate: null,
    origin: null,
    destination: null,
    lengthOfStay: null
  }


  render() {
    return (
      <form>
        <label>
          Origin
          <input name="origin" type="text" />
        </label>
        <label>
          Leaving Date
          <input name="origin" type="date" />
        </label>
        <label>
          Destination
          <input name="destination" type="text" />
        </label>
        <label>
          Length Of Stay
          <input name="lengthOfStay" type="number" />
        </label>
        <Calendar />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlightSearchForm;