const db = require('../models');

module.exports = {
    getUser: (req, res) => {
        db.User
            .find(req.params.user)
            .then(dbUser => {res.json(dbUser)})
            .catch(err => res.status(422).json(err));
    },
    getAllUsers: (req, res) => {
        db.User
            .find()
            .then(dbUser => {res.json(dbUser)})
            .catch(err => res.status(422).json(err));
    },
    postUser: (req, res) => {
        db.User
            .create(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    putUser: (req, res) => {
        db.User
            .update(req.params.user, req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}