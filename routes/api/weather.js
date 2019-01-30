const router = require('express').Router();
const weatherController = require('../../controller/weatherController');

router.route('/')
    .get(weatherController.getWeatherData);

module.exports = router;