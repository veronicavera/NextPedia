const router = require('express').Router();
const flightsController = require('../../controller/flightsController');

router.route('/')
    .get(flightsController.getFlightData);

module.exports = router;