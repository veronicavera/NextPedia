const router = require('express').Router();
const suitcasesController = require('../../controller/suitcasesController');

router.route('/')
    .get(suitcasesController.getAllUsersWithSuitcases)
    .post(suitcasesController.postSuitcase);

router.route('/all')
    .get(suitcasesController.getAllSuitcases);

router.route('/:user')
    .get(suitcasesController.getUserWithSuitcases)
    .put(suitcasesController.addToSuitcase)
    .patch(suitcasesController.deleteFromSuitcase)
    .delete(suitcasesController.deleteSuitcase);

module.exports = router;