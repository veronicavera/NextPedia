import React, { Component } from 'react';
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

    // console.log(this.props.trip);

    const startTimestampNice = this.props.trip.takeOffTime.substring(11) + ' ';

    console.log(startTimestampNice);
    const endTimestampNice = this.props.trip.landingTime.substring(11) + ' ';

    console.log(endTimestampNice);

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
      endDateQuery: endTimeQuery,
      startTimestampDisplay: startTimestampNice,
      endTimestampDisplay: endTimestampNice
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
          <div className='flight-details-departure'>
            <h2>Departure:</h2>
            <p>
              {' '}
              {this.state.startTimestampDisplay} on{' '}
              {this.state.startTimeDisplay}
            </p>

            {this.state.startlocation && (
              <p>
                from {this.state.startlocation.name}, serving{' '}
                {this.state.startlocation.city}
              </p>
            )}
          </div>
          <div className='flight-details-arrival'>
            <h2>Arrival:</h2>
            <p>
              {' '}
              {this.state.endTimestampDisplay} on {this.state.endTimeDisplay}
            </p>
            {this.state.endlocation && (
              <p>
                at {this.state.endlocation.name}, serving{' '}
                {this.state.endlocation.city}
              </p>
            )}
          </div>
        </div>
        {this.state.weather && (
          <div className='flight-details-weather'>
            <h2>Forecast for destination for {this.state.endTimeDisplay}:</h2>
            <p>{this.state.weather.summary}</p>
            <p>
              High: {this.state.weather.temperatureHigh} Low:{' '}
              {this.state.weather.temperatureLow} Chance of precipitation:{' '}
              {parseInt(this.state.weather.precipProbability) * 100}%
            </p>
            <p>
              <a
                className='flight-details-attr-link'
                href='https://darksky.net/poweredby/'
              >
                Powered by Dark Sky
              </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default MyFlightDetails;
