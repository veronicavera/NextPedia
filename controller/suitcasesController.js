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
    // changed to start with a single item
    postSuitcase: (req, res) => {
        db.Suitcase
            .create({
                items: {
                    name: req.body.item,
                    quantity: req.body.quantity
                }
            })
            .then(dbSuitcase => res.json(dbSuitcase))
            .catch(err => res.status(422).json(err));
    },
    addToSuitcase: (req, res) => {
        if (req.body.item && req.body.quantity && req.body.notes) {
            db.Suitcase
                .updateOne({_id: req.params.id}, 
                    {
                        $push: {
                            items: {
                                name: req.body.item,
                                quantity: req.body.quantity
                            }
                        },
                        notes: req.body.notes
                    })
                .then(success => res.json(success))
                .catch(err => res.json(err));
        } else if (req.body.item && req.body.quantity) {
            db.Suitcase
                .updateOne({_id: req.params.id}, 
                    {
                        $push: {
                            items: {
                                name: req.body.item,
                                quantity: req.body.quantity || 1
                            }
                        }
                    })
                .then(success => res.json(success))
                .catch(err => res.json(err));
        } else if (req.body.notes) {
            db.Suitcase
                .updateOne({_id: req.params.id}, 
                    {
                        notes: req.body.notes
                    })
                .then(success => res.json(success))
                .catch(err => res.json(err));
        } else {
            res.status(403).send('Insufficient data. Please send both quantity and item');
        }
    },
    deleteFromSuitcase: (req, res) => {
        db.Suitcase
            .updateOne({_id: req.params.id}, 
                {
                    $pull: {
                        items: {
                            name:req.body.item
                        },
                    },
                })
            .then(success => res.json(success))
            .catch(err => res.json(err));
    },
    deleteSuitcase: (req, res) => {
        db.Suitcase
            .findOneAndDelete({_id: req.params.id})
            .then(deletedSuitcase => {
                const originalId = deletedSuitcase._id
                const {items} = deletedSuitcase;
                db.DeletedSuitcase
                    .create({
                        originalId: originalId,
                        items: items
                    })
                    .then(previousSuitcase => res.json(previousSuitcase))
                    .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
    }
}