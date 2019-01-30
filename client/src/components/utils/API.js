import axios from 'axios';

export default {
  /**
   * This function will make a put request to our server to get flight information
   * YYYY-MM-DD
   * @param {string} startAirport - A three character string representing the starting flight location
   * @param {string} endAirport - A three character string representing the ending flight location
   * @param {string} time - A string representing the time in YYYY-MM-DD format
   * @returns - A promise representing the axios call
   */
  getFlightsData: function (startAirport, endAirport, time) {
    const data = {
      startAirport: [startAirport],
      endAirport: [endAirport],
      time: [time]
    };
    return axios.get('/api/flights/', data);
  },

  getSuitcaseItemsAll: function () {
    //
    return axios.get(`/api/suitcases/all`);
  },
  getSuitcaseItems: function (userid) {
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
  getSuitcase: function (suitcaseID) {
    return axios.get(`/api/suitcases/search/${suitcaseID}`);
  },
  addItemToSuitcase: function (suitcaseID, newItem) {
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
  deleteItemFromSuitcase: function (suitcaseID, itemName) {
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
  updateItemInSuitcase: function (suitcaseID, itemInfo) {
    console.log(suitcaseID);
    console.log(itemInfo);

    // router.route('/:id')
    // .put(suitcasesController.addToSuitcase)
    return axios.put(`/api/suitcases/${suitcaseID}`, itemInfo);
  },

  getAirportInfo: function (iata) {
    console.log(iata);
    return axios.get(`/api/airports/${iata}`);
  },
  getWeatherInfo: function(lat, long) {
    // process.env.REACT_APP_WEATHER_API_KEY
    const weatherUrl = 'https://api.darksky.net/forecast';
    const weatherUrlEnd = '2019-04-01T12:00:00?exclude=currently,hourly,flags';
    // https://api.darksky.net/forecast/[key]/[lat],[long],2019-04-01T12:00:00?exclude=currently,hourly,flags
    console.log(lat);
    console.log(long);

    return;
  }
};
