const router = require('express').Router();

// use the below format

const userRoutes = require('./users');
const tripRoutes = require('./trips');
const suitcaseRoutes = require('./suitcases');

router.use('/users', userRoutes);
router.use('/trips', tripRoutes);
router.use('/suitcases', suitcaseRoutes);

module.exports = router;