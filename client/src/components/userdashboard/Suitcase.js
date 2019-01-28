import React, { Component } from "react";
import MySuitcaseItem from "./SuitcaseItem";
import API from "../utils/API";
import "./Suitcase.css";
import MySuitcaseForm from "../userdashboard/SuitcaseForm";
import { utils } from "mocha";

class MySuitcase extends Component {
  state = { suitcaseID: "", suitcaseNote: "", suitcaseItems: [] };

  componentDidMount = () => {
    // console.log(this.state);
    // console.log(this.props);

    API.getSuitcase(this.props.suitcaseID).then(data => {
      // console.log(data);
      // console.log(data.data[0].items);
      this.setState({
        suitcaseID: this.props.suitcaseID,
        suitcaseItems: data.data[0].items,
        suitcaseNote: data.data[0].notes
      });
    });
  };

  onDelete = id => {
    //
    alert(id);
  };

  render() {
    return (
      <div>
        <div className="suitcase">
          {this.state.suitcaseItems.map((suitcaseItem, index) => (
            <MySuitcaseItem
              onDelete={this.onDelete}
              item={suitcaseItem.name}
              quantity={suitcaseItem.quantity}
              id={index}
              key={index}
            />
          ))}
          <div className="suitcase-notes">
            <p>Note: {this.state.suitcaseNote}</p>
          </div>
        </div>
        <div className="suitcase-form-input">
          {this.state.suitcaseNote && (
            <MySuitcaseForm
              note={this.state.suitcaseNote}
              suitcaseID={this.state.suitcaseID}
            />
          )}
        </div>
      </div>
    );
  }
}

export default MySuitcase;
