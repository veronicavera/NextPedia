import React, { Component } from 'react';
import { utils } from 'mocha';
import API from '../utils/API';
import './FlightDetails.css';

class MyFlightDetails extends Component {
  state = {
    startlocation: null,
    endlocation: null,
    weather: null
  };

  componentDidMount = () => {
    // format the start and end dates nicely

    const startTimeNice = `${this.props.trip.takeOffDate.substring(
      5,
      7
    )}/${this.props.trip.takeOffDate.substring(
      8,
      10
    )}/${this.props.trip.takeOffDate.substring(0, 4)}`;

    const endTimeNice = `${this.props.trip.landingDate.substring(
      5,
      7
    )}/${this.props.trip.landingDate.substring(
      8,
      10
    )}/${this.props.trip.landingDate.substring(0, 4)}`;

    const endTimeQuery = `${this.props.trip.landingDate.substring(
      0,
      4
    )}-${this.props.trip.landingDate.substring(
      5,
      7
    )}-${this.props.trip.landingDate.substring(8, 10)}`;

    console.log(endTimeQuery);
    this.setState({
      startTimeDisplay: startTimeNice,
      endTimeDisplay: endTimeNice,
      endDateQuery: endTimeQuery
    });

    // look up the airport information for the starting location
    API.getAirportInfo(this.props.trip.takeOffAirport).then(data => {
      this.setState({
        startlocation: data.data[0]
      });
    });

    // look up the airport information for the ending location
    API.getAirportInfo(this.props.trip.landingAirport).then(data => {
      this.setState({
        endlocation: data.data[0]
      });

      //[YYYY]-[MM]-[DD] is the format for date
      API.getWeatherInfo(
        data.data[0].latitude,
        data.data[0].longitude,
        this.state.endDateQuery
      ).then(weather => {
        this.setState({
          weather: weather.data.daily.data[0]
        });
      });
    });

    // format the end date for the weather api request
  };

  render() {
    return (
      <div className='flight-details-wrapper'>
        <div className='flight-details-header'>
          <h1>{this.props.trip.tripName}</h1>
        </div>
        <div className='flight-details-details'>
          <div>
            <h2>Departure: {this.props.trip.takeOffTime}</h2>
            <h2>on {this.state.startTimeDisplay}</h2>
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
            <h2>on {this.state.endTimeDisplay}</h2>
            {/* <h2>at {this.props.trip.endLocation}</h2> */}

            {this.state.endlocation && (
              <h2>
                at {this.state.endlocation.name}, serving{' '}
                {this.state.endlocation.city}
              </h2>
            )}
          </div>
        </div>
        {this.state.weather && (
          <div className='flight-details-weather'>
            <h2>
              Forecast for destination for {this.state.endTimeDisplay}:{' '}
              {this.state.weather.summary}
            </h2>
            <h3>
              High: {this.state.weather.temperatureHigh} Low:{' '}
              {this.state.weather.temperatureLow} Chance of precipitation:{' '}
              {this.state.weather.precipProbability}
            </h3>
            <a href='https://darksky.net/poweredby/'>Powered by Dark Sky</a>
          </div>
        )}
      </div>
    );
  }
}

export default MyFlightDetails;
