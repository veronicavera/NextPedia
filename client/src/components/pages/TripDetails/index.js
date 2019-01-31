import React, { Component } from 'react';
import { MySuitcase } from '../../index';
import API from '../../utils/API';
import MyFlightDetails from '../../FlightDetails/FlightDetails';
import './index.css';

const useremail = 'occasionalFlier@yahoo.com';

class TripDetails extends Component {
  state = {
    trip_id: this.props.match.params.trip,
    useremail: useremail,
    suitcases_id: null
  };

  //   getTrip: (req, res) => {
  //     db.Trip
  //         .find({_id: req.params.id})
  //         .then(dbTrip => res.json(dbTrip))
  //         .catch(err => res.status(422).json(err));
  // },

  // router.route('/search/:id')
  //   .get(tripsController.getTrip)

  /**
   * On component mount, query the API to get all suitcase items.
   * NOTE FROM RY: UPDATE THIS! right now we just choose the
   * suitcase associated with the first flight!
   */
  componentDidMount = () => {
    API.getTripInfo(this.state.trip_id).then(data => {
      // console.log(data.data[0].suitcases);
      // console.log('new', data.data[0]);
      this.setState({
        trip: data.data[0],
        suitcases_id: data.data[0].suitcases
      });
    });
    // API.getSuitcaseItems(useremail).then(data => {
    //   console.log('original', data.data[0]);
    //   this.setState({
    //     trip: data.data[0],
    //     suitcases_id: data.data[0].suitcases._id
    //   });
    // });
  };

  render() {
    // console.log(this.props.match.params.trip);
    // console.log(this.state.trip);
    return (
      <div className='trip-details-page-body'>
        <div className='trip-details-wrapper'>
          {this.state.suitcases_id && (
            <MyFlightDetails trip={this.state.trip} />
          )}
          {/* Note: We use the && below in order to trick React
        into doing what we want -- React will not load the MySuitcase
        component until the data that feeds into it is available. */}
          {this.state.suitcases_id && (
            <MySuitcase suitcaseID={this.state.suitcases_id} />
          )}
        </div>
      </div>
    );
  }
}

export default TripDetails;
