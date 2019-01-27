const router = require('express').Router();
const suitcasesController = require('../../controller/suitcasesController');

router.route('/')
    .get(suitcasesController.getAllUsersWithSuitcases)
    .post(suitcasesController.postSuitcase);

router.route('/all')
    .get(suitcasesController.getAllSuitcases);

router.route('/:user')
    .get(suitcasesController.getUserWithSuitcases)
    
router.route('/:id')
    .put(suitcasesController.addToSuitcase)
    .patch(suitcasesController.deleteFromSuitcase)
    .delete(suitcasesController.deleteSuitcase);

router.route('/search/:id')
    .get(suitcasesController.getSuitcase);

module.exports = router;