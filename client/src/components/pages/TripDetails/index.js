import React, { Component } from 'react';

import { MySuitcase } from '../../index';

import API from '../../utils/API';

const useremail = 'occasionalFlier@yahoo.com';

class TripDetails extends Component {
  state = {
    useremail: useremail,
    suitcases_id: null
  };

  /**
   * On component mount, query the API to get all suitcase items.
   * NOTE FROM RY: UPDATE THIS! right now we just choose the
   * suitcase associated with the first flight!
   */
  componentDidMount = () => {
    API.getSuitcaseItems(useremail).then(data => {
      this.setState({
        trip: data.data[0],
        suitcases_id: data.data[0].suitcases._id
      });
    });
  };

  render() {
    return (
      <div>
        {/* Note: We use the && below in order to trick React
        into doing what we want -- React will not load the MySuitcase
        component until the data that feeds into it is available. */}
        {this.state.suitcases_id && (
          <MySuitcase suitcaseID={this.state.suitcases_id} />
        )}
      </div>
    );
  }
}

export default TripDetails;