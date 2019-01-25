// creates each entry for the suitcase

// suitcase

import React, { Component } from "react";
import "../allpages/reset.css";
import "./Suitcase.css";

class MySuitcaseItem extends Component {
  constructor(props) {
    super(props);
  }

  onDelete = id => {
    //
  };

  render() {
    return (
      <div className="suitcase-item" value={this.props.id}>
        <p className="suitcase-item-delete">X</p>
        <div className="suitcase-item-header">
          <p>Item: {this.props.item}</p>

          <p>Quantity: {this.props.quantity}</p>
        </div>
        <p>Notes: {this.props.notes}</p>
      </div>
    );
  }
}

export default MySuitcaseItem;
