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
            .find({})
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.status(422).json(err)
            });
    },
    postUser: (req, res) => {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    putUser: (req, res) => {
        console.log('here');
        db.User
            .updateOne(req.params, {$push:req.body})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    deleteUser: (req, res) => {
        db.User
            .findOneAndDelete({user: req.params.user})
            .then(deletedUser => {
                const {user, trips} = deletedUser;
                db.DeletedUser
                    .create({
                        user: user,
                        trips: trips
                    })
                    .then(previousUser => res.json(previousUser))
                    .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).res.json(err));
    }
}