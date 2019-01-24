const db = require('../models');

module.exports = {
    getUser: (req, res) => {
        db.User
            .find(req.params)
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
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    putUser: (req, res) => {
        db.User
            .update(req.params, {$push:req.body})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}