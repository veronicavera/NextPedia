const router = require('express').Router();
const tripsController = require('../../controller/tripsController');

router.route('/')
    .get(tripsController.getAllUsersWithTrips)
    .post(tripsController.postTrip);

router.route('/all')
    .get(tripsController.getAllTrips);

router.route('/:user')
    .get(tripsController.getUserWithTrips)
    .put(tripsController.putTrip);

module.exports = router;