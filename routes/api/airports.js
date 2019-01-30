const router = require('express').Router();
const sqlController = require('../../controller/sqlController');

router.route('/:iata').get(sqlController.lookUpAirport);

module.exports = router;
