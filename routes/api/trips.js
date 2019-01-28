const router = require('express').Router();
const tripsController = require('../../controller/tripsController');

router.route('/')
    .get(tripsController.getAllUsersWithTrips)
    .post(tripsController.postTrip);

router.route('/all')
    .get(tripsController.getAllTrips);

router.route('/:user')
    .get(tripsController.getUserWithTrips);

router.route('/:id')
    .put(tripsController.putTrip)
    .delete(tripsController.deleteTrip);

router.route('/search/:id')
    .get(tripsController.getTrip)

module.exports = router;