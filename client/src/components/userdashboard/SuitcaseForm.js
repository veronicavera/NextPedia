import React, { Component } from "react";
import "./Suitcase.css";

class MySuitcaseForm extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  state = {
    suitcaseID: this.props.suitcaseID,
    item: "",
    quantity: 0,
    note: this.props.note
  };
  // state: should be what goes into the form

  // on change: update the state
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  // on submit: do the ajax query to the backend
  eventTest = () => {
    alert(this.state.item + " " + this.state.quantity);
  };

  render() {
    return (
      <div>
        <form className="suitcase-form">
          <div className="suitcase-form-input">
            <label htmlFor="item">Item</label>
            <input
              onChange={this.handleInputChange}
              name="item"
              id="item"
              type="text"
            />
          </div>
          <div className="suitcase-form-input">
            <label htmlFor="quantity">Quantity</label>
            <input
              onChange={this.handleInputChange}
              name="quantity"
              id="quantity"
              type="number"
            />
          </div>
          <div className="suitcase-form-input">
            <label htmlFor="note">Note</label>
            <input
              value={this.state.note}
              onChange={this.handleInputChange}
              name="note"
              id="note"
              type="text"
            />
          </div>

          <p onClick={this.eventTest}>asdf</p>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default MySuitcaseForm;
