import React, { Component } from "react";

import MySuitcase from "../userdashboard/Suitcase";

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
    suitcases_id: null
  };

  componentDidMount = () => {
    API.getSuitcaseItems(useremail).then(data => {
      this.setState({
        trip: data.data[0],
        suitcases_id: data.data[0].suitcases._id
      });
    });
  };

  testFunc = event => {
    event.preventDefault();
    alert("Hi! " + this.state.suitcases_id);
  };

  render() {
    // console.log(this.state.suitcases_id);
    return (
      <div>
        <button onClick={this.testFunc}>Hello</button>
        {this.state.suitcases_id && (
          <MySuitcase suitcaseID={this.state.suitcases_id} />
        )}

        {/* {this.state.suitcases_id && (
          <MySuitcaseForm suitcaseID={this.state.suitcases_id} />
        )} */}
      </div>
    );
  }
}

export default TripDetails;
