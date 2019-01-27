import React, { Component } from "react";
import MySuitcaseItem from "./SuitcaseItem";
import API from "../utils/API";
import "./Suitcase.css";
import { utils } from "mocha";

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
  state = { testSuit, suitcases: {} };

  // componentDidMount = () => this.setState(props.suitcases);
  // ObjectId("5c4c7d8729afb9562f3b8e6d") - user ID
  // ObjectId("5c4c7d8729afb9562f3b8e72") - suitcase
  // ObjectId("5c4c7d8729afb9562f3b8e70") - user
  // componentWillMount = () => {
  //   console.log("in component will mount");
  //   API.getSuitcaseItemsAll().then(function(data) {
  //     console.log(data);
  //   });
  // };

  // componentDidMount = () => {
  //   console.log("in component did mount");
  //   API.getSuitcaseItems("tripPlanner@gmail.com").then(function(data) {
  //     console.log(data);
  //   });
  // };

  componentDidMount = () => {
    console.log(this.props);
    this.setState({
      suitcases: this.props.suitcases
    });
  };

  onDelete = id => {
    //
    alert(id);
  };

  render() {
    return (
      <div className="suitcase">
        {this.state.testSuit.map(suitcaseItem => (
          <MySuitcaseItem
            onDelete={this.onDelete}
            item={suitcaseItem.item}
            quantity={suitcaseItem.quantity}
            notes={suitcaseItem.notes}
            id={suitcaseItem.id}
            key={suitcaseItem.id}
          />
        ))}
      </div>
    );
  }
}

export default MySuitcase;
