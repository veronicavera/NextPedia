import React, { Component } from 'react';
import apiCalls from '../utils/API';

const getFlightsData = apiCalls.getFlightsData;

class FlightSearchResults extends Component {
  state = {
    departureDate: '',
    origin: '',
    destination: '',
    lengthOfStay: '',
    results: '',
  }

  async componentDidMount() {
    this.setState({
      departureDate: this.props.match.params.departureDate,
      origin: this.props.match.params.origin,
      destination: this.props.match.params.destination,
      lengthOfStay: this.props.match.params.lengthOfStay
    });
    console.log(getFlightsData);
    let results = await getFlightsData(this.props.match.params.departureDate,
      this.props.match.params.origin,
      this.props.match.params.destination,
      this.props.match.params.lengthOfStay);
    this.setState({ results: results.data });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Hello World!

      <div>
          Hello this is the flight finder page.
          departure date: {this.props.match.params.departureDate}
          origin: {this.props.match.params.origin}
          destination: {this.props.match.params.destination}
          lengthOfStay: {this.props.match.params.lengthOfStay}
        </div>
      </div>
    );
  }
}

export default FlightSearchResults;