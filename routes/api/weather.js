const router = require('express').Router();
const weatherController = require('../../controller/weatherController');

router.route('/:lat/:lng/:time')
    .get(weatherController.getWeatherData);

module.exports = router;