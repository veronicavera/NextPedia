const db = require('../models');

module.exports = {
    getUserWithSuitcases: (req, res) => {
        db.User
            .find(req.params.user)
            .sort({_id: -1})
            .populate('Trips')
            .populate('Suitcases')
            .then(dbUser => {res.json(dbUser)})
            .catch(err => res.status(422).json(err));
    },
    getAllUsersWithSuitcases: (req, res) => {
        db.User
            .find()
            .sort({_id: -1})
            .populate('Trips')
            .populate('Suitcases')
            .then(dbUser => {res.json(dbUser)})
            .catch(err => res.status(422).json(err));
    },
    getAllSuitcases: (req, res) => {
        db.Suitcase
            .find()
            .then(dbSuitcase => {res.json(dbSuitcase)})
            .catch(err => res.status(422).json(err));
    },
    postSuitcase: (req, res) => {
        db.Suitcase
            .create(req.body)
            .then(dbSuitcase => res.json(dbSuitcase))
            .catch(err => res.status(422).json(err));
    }
}