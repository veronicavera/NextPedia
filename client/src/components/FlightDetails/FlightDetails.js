import React from 'react';
import { utils } from 'mocha';
import API from '../utils/API';
import './FlightDetails.css';

function MyFlightDetails(props) {
  return (
    <div className='flight-details-wrapper'>
      <div className='flight-details-header'>
        <h1>{props.trip.tripName}</h1>
      </div>
      <div className='flight-details-details'>
        <div>
          <h2>Departure: {props.trip.startFlightTakeOffTime}</h2>
          <h2>on {props.trip.startDate}</h2>
          <h2>from {props.trip.startLocation}</h2>
        </div>
        <div>
          <h2>Arrival: {props.trip.endFlightTakeOffTime}</h2>
          <h2>on {props.trip.endDate}</h2>
          <h2>at {props.trip.endLocation}</h2>
        </div>
      </div>
    </div>
  );
}

export default MyFlightDetails;
