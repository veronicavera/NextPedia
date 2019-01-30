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
    // if (!origin || !destination || !departureDate || !lengthOfStay) {
    //   return {
    //     error:
    //       'Please pass an origin, destination, departureDate and lengthOfStay'
    //   };
    // }
    // axios.put('/flights', {
    //   origin: origin,
    //   destination: destination,
    //   departureDate: departureDate,
    //   lengthofstay: lengthOfStay
    // });
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
  /**
   * Returns all items within a single suitcase.
   *
   * Note: you can get the suitcase ID through trips. You can get the trip
   * ID through user.
   * @param {string} suitcaseID
   */
  getSuitcase: function(suitcaseID) {
    return axios.get(`/api/suitcases/search/${suitcaseID}`);
  },
  addItemToSuitcase: function(suitcaseID, newItem) {
    return axios.put(`/api/suitcases/${suitcaseID}`, newItem);
  },
  /**
   * Removes a single item from a single suitcase.
   *
   * The item deleted is by ITEM NAME. This must be passed in
   * an object with a key of "item".
   * @param {string} suitcaseID
   * @param {object} itemName
   */
  deleteItemFromSuitcase: function(suitcaseID, itemName) {
    return axios.patch(`/api/suitcases/${suitcaseID}`, itemName);
  },

  /**
   * Updates a single item in a single suitcase.
   *
   * The item is looked up by ITEM NAME. In order to keep from creating
   * just a new item, the [] must be set to "old" -- this will UPDATE
   * instead of CREATING.
   * @param {string} suitcaseID
   * @param {object} itemInfo
   */
  updateItemInSuitcase: function(suitcaseID, itemInfo) {
    console.log(suitcaseID);
    console.log(itemInfo);

    // router.route('/:id')
    // .put(suitcasesController.addToSuitcase)
    return axios.put(`/api/suitcases/${suitcaseID}`, itemInfo);
  },

  getAirportInfo: function(iata) {
    console.log(iata);
    return axios.get(`/api/airports/${iata}`);
  }
};
