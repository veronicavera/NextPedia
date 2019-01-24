const db = require('../models');

module.exports = {
    getUserWithSuitcases: (req, res) => {
        //https://futurestud.io/tutorials/node-js-how-to-run-an-asynchronous-function-in-array-map        
        db.User
            .find(req.params)
            .sort({_id: -1})
            .then(async dbUser => {
                const promises = dbUser[0].trips.map(async _id => {
                    const tripsWithSuitcases = await db.Trip
                        .find({_id: _id})
                        .populate('suitcases')        
                        return(tripsWithSuitcases);
                })
                const results = await Promise.all(promises);
                res.json(results);
            }).catch(err => res.status(422).json(err));
    },
    getAllUsersWithSuitcases: (req, res) => {
        db.User
            .find()
            .sort({_id: -1})
            .populate('trips')
            .populate('suitcases')
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