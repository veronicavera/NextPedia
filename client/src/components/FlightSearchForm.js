import React, { Component } from "react";
import Calendar from "./flightfinder/Calendar";
import './flightsearchform.css';

const styles = {
  form: {
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  label: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
}

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
      <div className="container-div" id='flight-search-container'>
        <div className="card">
          <div className="card-body" style={{ height: '90vh' }}>
            <form id="flight-search-form" style={styles.form}>
              <label style={styles.label}>
                Origin:
          <input name="origin" type="text" value={this.state.origin} onChange={this.handleInputChange} className="flightFormInput" />
              </label>
              <label style={styles.label}>
                Leaving Date:
          <input name="departureDate" type="date" value={this.state.departureDate} onChange={this.handleInputChange} className="flightFormInput" />
              </label>
              <label style={styles.label}>
                Destination:
          <input name="destination" type="text" value={this.state.destination} onChange={this.handleInputChange} className="flightFormInput" />
              </label>
              <label style={styles.label}>
                Length Of Stay:
                <input name="lengthOfStay" type="number" value={this.state.lengthOfStay} onChange={this.handleInputChange} className="flightFormInput" />
              </label>
              <Calendar />
              <input type="submit" value="Submit" className="btn btn-outline-success" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightSearchForm;
