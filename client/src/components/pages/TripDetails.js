// note from ry - i've been using this to test things
// without having to deal with react router. please don't delete!

import React, { Component } from "react";

import MySuitcase from "../userdashboard/Suitcase";
import MySuitcaseForm from "../userdashboard/SuitcaseForm";
import API from "../utils/API";

/**
 * On pageload: queries the user table to get the trips and suitcases associated
 * with a single user's email.
 *
 * when you click on a specific trip, the appropriate suitcase will be shown
 * (based on -- position in array? need to talk to team about this)
 *
 * for now: placeholder email is tripPlanner@gmail.com
 * 
 * state vars: 
 * user email 
 * user flight array (data.data)
 * user flight suitcases (data.data[0].suitcases - items in an array (name, quantity))
 * user flight suitcases notes (data.data[0].suitcases.notes)
 * console.log(data.data[0].suitcases.notes);
      console.log(data.data[0].suitcases.items);
      console.log(data.data[0].suitcases._id);
 */

const useremail = "tripPlanner@gmail.com";

class TripDetails extends Component {
  state = {
    useremail: useremail,
    trip: {},
    suitcases: {}
  };
  // onChange = date => {
  //   console.log(date);
  //   this.setState({ date });
  // };
  componentDidMount = () => {
    // console.log("in component did mount");
    API.getSuitcaseItems(useremail).then(data => {
      // console.log(data);
      // console.log(data.data[0]);
      this.setState({
        trip: data.data[0],
        suitcases: data.data[0].suitcases
      });
      console.log(this.state);
    });
  };

  testFunc = event => {
    event.preventDefault();
    console.log(this.state.suitcases);
  };

  render() {
    return (
      <div>
        <button onClick={this.testFunc}>Hello</button>
        <MySuitcase
          suitcases={this.state.suitcases}
          useremail={this.state.useremail}
          trip={this.state.trip}
        />
        <MySuitcaseForm suitcaseID={this.state.suitcases._id} />
      </div>
    );
  }
}

export default TripDetails;
