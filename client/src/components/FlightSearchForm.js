import React, { Component } from "react";
import Calendar from "./flightfinder/Calendar";

const styles = {
  form: {
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
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
              <label>
                Origin:
          <input name="origin" type="text" value={this.state.origin} onChange={this.handleInputChange} />
              </label>
              <label>
                Leaving Date:
          <input name="departureDate" type="date" value={this.state.departureDate} onChange={this.handleInputChange} />
              </label>
              <label>
                Destination:
          <input name="destination" type="text" value={this.state.destination} onChange={this.handleInputChange} />
              </label>
              <label>
                Length Of Stay:
                <input name="lengthOfStay" type="number" value={this.state.lengthOfStay} onChange={this.handleInputChange} />
              </label>
              <Calendar />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightSearchForm;
