import React, { Component } from "react";
import Calendar from './Calendar';
// import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

class FlightSearchForm extends Component {
  state = {
    departureDate: '',
    origin: '',
    destination: '',
    lengthOfStay: ''
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.departureDate);
    alert(this.state.origin);
    alert(this.state.destination);
    alert(this.state.lengthOfStay);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Origin
          <input
            name="origin"
            type="text"
            value={this.state.origin}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Leaving Date
          <input
            name="departureDate"
            type="date"
            value={this.state.departureDate}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Destination
          <input
            name="destination"
            type="text"
            value={this.state.destination}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Length Of Stay
          <input
            name="lengthOfStay"
            type="number"
            value={this.state.lengthOfStay}
            onChange={this.handleInputChange}
          />
        </label>
        <Calendar />
        <Link to={{ pathname: `/searchResults/${this.state.departureDate}/${this.state.origin}/${this.state.destination}/${this.state.lengthOfStay}` }}>
          <button>Submit</button>
        </Link>
      </form>
    );
  }
}

export default FlightSearchForm;