import React, { Component } from "react";
import MySuitcaseItem from "./SuitcaseItem";
import "./Suitcase.css";

const testSuit = [
  {
    item: "jacket",
    quantity: 2,
    notes: "heavy - we're going to antarctica!",
    id: 3
  },
  {
    item: "socks",
    quantity: 10,
    notes: "I love socks!",
    id: 17
  }
];

// case-item" value={this.props.id}>
//         <p>Item: {this.props.item}</p>
//         <p>Quantity: {this.props.quantity}</p>
//         <p>Notes {this.props.notes}</p>
class MySuitcase extends Component {
  state = {
    testSuit
  };

  render() {
    return (
      <div className="suitcase">
        {this.state.testSuit.map(suitcaseItem => (
          <MySuitcaseItem
            item={suitcaseItem.item}
            quantity={suitcaseItem.quantity}
            notes={suitcaseItem.notes}
            id={suitcaseItem.id}
          />
        ))}
        <MySuitcaseItem
          item={testSuit[0].item}
          quantity={testSuit[0].quantity}
          notes={testSuit[0].notes}
          id={testSuit[0].id}
        />
      </div>
    );
  }
}

export default MySuitcase;
