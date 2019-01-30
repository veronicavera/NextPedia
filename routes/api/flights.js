const router = require('express').Router();
const flightsController = require('../../controller/flightsController');

router.route('/:startAirport/:endAirport/:date')
    .get(flightsController.getFlightData);

module.exports = router;