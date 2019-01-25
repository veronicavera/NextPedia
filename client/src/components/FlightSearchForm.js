import React, { Component } from "react";
import Calendar from './Calendar';

class FlightSearchForm extends Component {
  state = {
    departureDate: null,
    origin: null,
    destination: null,
    lengthOfStay: null
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <form>
        <label>
          Origin
          <input name="origin" type="text" value={this.state.origin} onChange={this.handleInputChange} />
        </label>
        <label>
          Leaving Date
          <input name="departureDate" type="date" value={this.state.departureDate} onChange={this.handleInputChange} />
        </label>
        <label>
          Destination
          <input name="destination" type="text" value={this.state.destination} onChange={this.handleInputChange} />
        </label>
        <label>
          Length Of Stay
          <input name="lengthOfStay" type="number" value={this.state.lengthOfStay} onChange={this.handleInputChange} />
        </label>
        <Calendar />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlightSearchForm;