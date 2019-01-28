const router = require('express').Router();

// use the below format

const userRoutes = require('./users');
const tripRoutes = require('./trips');
const suitcaseRoutes = require('./suitcases');
const flightRoutes = require('./flights');


router.use('/users', userRoutes);
router.use('/trips', tripRoutes);
router.use('/suitcases', suitcaseRoutes);
router.use('/flights', flightRoutes);

module.exports = router;