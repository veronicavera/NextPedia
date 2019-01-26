// note from ry - i've been using this to test things
// without having to deal with react router. please don't delete!

import React, { Component } from "react";
import MyCalendar from "./flightfinder/Calendar";
import MySuitcase from "./userdashboard/Suitcase";
import MySuitcaseForm from "./userdashboard/SuitcaseForm";

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
        <MySuitcase />
        <MySuitcaseForm />
      </div>
    );
  }
}

export default Home;
