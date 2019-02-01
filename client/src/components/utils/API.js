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
  getFlightsData: (startAirport, endAirport, time) =>
    axios.get(`/api/flights/${startAirport}/${endAirport}/${time}`),

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
    return axios.put(`/api/suitcases/${suitcaseID}`, itemInfo);
  },

  /**
   * Does a get request for the airport data.
   *
   * Airport data is loaded into a MySQL database. The three-letter airport code is sent
   * and the airport name, city it serves, latitude, and longitude are returned.
   * @param {string} iata
   */
  getAirportInfo: function(iata) {
    return axios.get(`/api/airports/${iata}`);
  },

  /**
   * This queries the Dark Sky API for a specific latitude and longitude at a specific date.
   * Note: only the DATE needs to be supplied -- since this is a daily high/low forecast,
   * the time is always assumed to be noon (and doesn't matter either way)
   *
   * @param {string} lat
   * @param {string} long
   * @param {string} time - format YYYY-MM-DD
   *
   * Returns an object with the daily high, low, precipitation, summary, etc
   */
  getWeatherInfo: function(lat, long, time) {
    return axios.get(`/api/weather/${lat}/${long}/${time}`);
  },

  postTrip: (startAirport, takeOffTime, endAirport, landingTime, user, tripName) => axios.post('/api/trips', {
    tripName: tripName || 'My New Trip',
    takeOffAirport: endAirport,
    takeOffTime: takeOffTime,
    landingAirport: startAirport,
    landingTime: landingTime,
    user: user
  }),
  getTripInfo: function(tripid) {

    return axios.get(`/api/trips/search/${tripid}`);
  },
  addUser: user => { console.log(user)
    axios.post('/api/users', { user: user}) 
  },
  

  addSuitcase: suitcase => axios.post('/api/suitcase', { suitcase: suitcase}),

  addTrips: trips => axios.post('/api/trips', { trips: trips}), 

  addTripid: tripid => axios.post('/api/tripid', { tripid: tripid}), 
    
};
