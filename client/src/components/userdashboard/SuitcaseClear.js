// to clear an entire suitcase

// creates each entry for the suitcase

// suitcase

import React from "react";
import "../allpages/reset.css";
import "./Suitcase.css";

function ClearMySuitcase(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ClearMySuitcase;
