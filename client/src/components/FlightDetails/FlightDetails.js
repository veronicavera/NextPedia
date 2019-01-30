import React, { Component } from 'react';
import { utils } from 'mocha';
import API from '../utils/API';
import './FlightDetails.css';

const config = {
  weatherApiKey: process.env.REACT_APP_WEATHER_API_KEY
};

class MyFlightDetails extends Component {
  state = {
    startlocation: null,
    endlocation: null
  };

  componentDidMount = () => {
    API.getAirportInfo(this.props.trip.startLocation).then(data => {
      console.log(data);
      this.setState({
        startlocation: data.data[0]
      });
    });
    API.getAirportInfo(this.props.trip.endLocation).then(data => {
      console.log(data);
      console.log(data.data[0].latitude);
      console.log(data.data[0].longitude);
      API.getWeatherInfo(data.data[0].latitude, data.data[0].longitude);
      this.setState({
        endlocation: data.data[0]
      });
    });
  };

  render() {
    return (
      <div className='flight-details-wrapper'>
        <div className='flight-details-header'>
          <h1>{this.props.trip.tripName}</h1>
        </div>
        <div className='flight-details-details'>
          <div>
            <h2>Departure: {this.props.trip.startFlightTakeOffTime}</h2>
            <h2>on {this.props.trip.startDate}</h2>
            {/* <h2>from {this.props.trip.startLocation}</h2> */}

            {this.state.startlocation && (
              <h2>
                from {this.state.startlocation.name}, serving{' '}
                {this.state.startlocation.city}
              </h2>
            )}
          </div>
          <div>
            <h2>Arrival: {this.props.trip.endFlightTakeOffTime}</h2>
            <h2>on {this.props.trip.endDate}</h2>
            {/* <h2>at {this.props.trip.endLocation}</h2> */}

            {this.state.endlocation && (
              <h2>
                at {this.state.endlocation.name}, serving{' '}
                {this.state.endlocation.city}
              </h2>
            )}
          </div>
        </div>
        <div className='flight-details-weather'>
          Weather Stuff Placeholder
          <a href='https://darksky.net/poweredby/'>Powered by Dark Sky</a>
        </div>
      </div>
    );
  }
}

export default MyFlightDetails;
