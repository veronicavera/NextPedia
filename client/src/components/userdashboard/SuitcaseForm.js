import React, { Component } from "react";
import "./Suitcase.css";

class MySuitcaseForm extends Component {
  state = {
    suitcaseID: this.props.suitcaseID,
    item: "",
    quantity: 0,
    notes: ""
  };
  // state: should be what goes into the form

  // on change: update the state
  handleInputChange = event => {
    const newitem = event.target.item;
    const newquantity = event.target.quantity;
    const newnotes = event.target.notes;
    this.setState({
      item: newitem,
      quantity: newquantity,
      notes: newnotes
    });
  };

  // on submit: do the ajax query to the backend
  onSubmit = event => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <form className="suitcase-form">
          <div className="suitcase-form-input">
            <label htmlFor="item">Item</label>
            <input id="item" type="text" />
          </div>
          <div className="suitcase-form-input">
            <label htmlFor="quantity">Quantity</label>
            <input id="quantity" type="number" />
          </div>
          <div className="suitcase-form-input">
            <label htmlFor="note">Note</label>
            <input id="note" type="text" />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default MySuitcaseForm;
