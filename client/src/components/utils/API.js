import axios from 'axios';

export default {
  /**
   * This function will make a put request to our server to get flight information
   * @param {string} origin - This is a three character string that represents the airport that they are departing from
   * @param {string} destination - This is a three character string that represents the airport that they are arriving at
   * @param {string} departureDate - This is a string formatted as "YYYY-MM-DD" that represents when they are leaving
   * @param {number} lengthOfStay - This is a number the represents the amount of time that individual is staying in a given location
   */
  getFlightsData: function(origin, destination, departureDate, lengthOfStay) {
    if (!origin || !destination || !departureDate || !lengthOfStay) {
      return {
        error:
          'Please pass an origin, destination, departureDate and lengthOfStay'
      };
    }

    axios.put('/flights', {
      origin: origin,
      destination: destination,
      departureDate: departureDate,
      lengthofstay: lengthOfStay
    });
  },

  getSuitcaseItemsAll: function() {
    //
    return axios.get(`/api/suitcases/all`);
  },
  getSuitcaseItems: function(userid) {
    //router.route('/:user') .get(suitcasesController.getUserWithSuitcases)
    // console.log(userid);
    //Returns array of trips associated with the user and includes data on suitcases

    return axios.get(`/api/suitcases/${userid}`);
  },
  getSuitcase: function(suitcaseID) {
    // console.log(suitcaseID);
    return axios.get(`/api/suitcases/search/${suitcaseID}`);
  },
  addItemToSuitcase: function(suitcaseID, newItem) {
    //
    console.log(suitcaseID);
    console.log(newItem);

    return axios.put(`/api/suitcases/${suitcaseID}`, newItem);
  }
};
