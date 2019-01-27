// creates each entry for the suitcase

// suitcase

import React from "react";
import "../allpages/reset.css";
import "./Suitcase.css";

function MySuitcaseItem(props) {
  return (
    <div className="suitcase-item" value={props.id}>
      <p
        className="suitcase-item-delete"
        onClick={() => props.onDelete(props.id)}
      >
        X
      </p>
      <div className="suitcase-item-header">
        <p>Item: {props.item}</p>

        <p>Quantity: {props.quantity}</p>
      </div>
      <p>Notes: {props.notes}</p>
    </div>
  );
}

export default MySuitcaseItem;
