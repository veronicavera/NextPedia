import React from "react";
import "./style.css";
import moment from "moment";
import dataCodes from "./airlineCodes.json";
function ResultFlight(props) {
  return (
    <div className="content">
      {props.data.map(flightItem => (
        <div className="flightResult" key={flightItem.airlineName}>
          <div className="airlineName">{dataCodes[flightItem.airlineName]}</div>
          <div className="flightTimes">
            <div className="startTime">
              {getHourMinute(flightItem.departureTime)}
            </div>
            -
            <div className="endTime">
              {getHourMinute(flightItem.arrivalTime)}
            </div>
          </div>
          <div className="airportNames">
            <div className="startAirport">{flightItem.departureAirport}</div>
            &nbsp;-&nbsp;
            <div className="endAirport">{flightItem.arrivalAirport}</div>
          </div>
          <div className="flightFare">
            {"$" + flightItem.flightFare.toFixed(0)}
          </div>
          <input type="submit" className="btn selectBtn" value="Select" />
        </div>
      ))}
    </div>
  );
}
export default ResultFlight;
function getHourMinute(dateString) {
  var dateUnformatted = dateString.slice(
    dateString.indexOf("T") + 1,
    dateString.length - 3
  );
  return moment(dateUnformatted, "HH:mm").format("h:mma");
}
