import React, { Component } from "react";
import MyCalendar from "../Calendar";

class Home extends Component {
  state = {
    date: new Date()
  };

  testFunc = event => {
    event.preventDefault();
    alert(this.state.date);
  };

  onChange = date => {
    console.log(date);
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <MyCalendar onChange={this.onChange} />
        <button onClick={this.testFunc}>Hello</button>
      </div>
    );
  }
}

export default Home;
