import React, { Component } from "react";
import MyCalendar from "../flightfinder/Calendar";
import MySuitcase from "../userdashboard/Suitcase";

class UserDashboard extends Component {
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
        <MySuitcase />
      </div>
    );
  }
}

export default UserDashboard;
