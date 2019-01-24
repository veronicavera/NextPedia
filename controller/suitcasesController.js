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
                const response = results.reduce((acc, cur) => [...acc, ...cur]);
                res.json(response);
            }).catch(err => res.status(422).json(err));
    },
    getAllUsersWithSuitcases: (req, res) => {
        db.Trip
            .find()
            .populate('suitcases')        
            .then(suitcase => res.json(suitcase))
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
            .create({
                items: req.body.items,
                quantities: req.body.quantities
            })
            .then(dbSuitcase => res.json(dbSuitcase))
            .catch(err => res.status(422).json(err));
    },
    putSuitcase: (req, res) => {
        db.Suitcase
            .updateOne({_id: req.params.user}, 
                {
                    $push: {
                        items: req.body.item,
                        quantities: req.body.quantity
                    }
                })
            .then(success => res.json(success))
            .catch(err => res.json(err));
    }
}