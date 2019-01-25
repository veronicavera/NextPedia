import axios from 'axios';

export default {
  /**
   * This function will make a put request to our server to get flight information
   * @param {string} origin - This is a three character string that represents the airport that they are departing from
   * @param {string} destination - This is a three character string that represents the airport that they are arriving at
   * @param {string} departureDate - This is a string formatted as "YYYY-MM-DD" that represents when they are leaving
   * @param {number} lengthOfStay - This is a number the represents the amount of time that individual is staying in a given location
   */
  getFlightsData: function (origin, destination, departureDate, lengthOfStay) {
    if (!origin || !destination || !departureDate || !lengthOfStay) {
      return { error: "Please pass an origin, destination, departureDate and lengthOfStay" }
    }

    axios.put('/flights', {
      "origin": origin,
      "destination": destination,
      "departureDate": departureDate,
      "lengthofstay": lengthOfStay
    });
  }
}