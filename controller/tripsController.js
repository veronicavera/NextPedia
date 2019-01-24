const db = require('../models');

module.exports = {
    getAllUsersWithTrips: (req, res) => {
        db.User
            .find()
            .sort({_id: -1})
            .populate('trips')
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    getUserWithTrips: (req, res) => {
        db.User
            .find(req.params)
            .sort({_id: -1})
            .populate('trips')
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    getAllTrips: (req, res) => {
        db.Trip
            .find()
            .then(dbTrip => res.json(dbTrip))
            .catch(err => res.status(422).json(err));
    },
    postTrip: (req, res) => {
        db.Trip
            .create(req.body)
            .then(dbTrip => res.json(dbTrip))
            .catch(err => res.status(422).json(err));
    },
    putTrip: (req, res) => {
        db.Trip
            .updateOne({_id: req.params.user}, {$push:req.body})
            .then(dbTrip => res.json(dbTrip))
            .catch(err => res.status(422).json(err));
    },
    deleteTrip: (req, res) => {
        db.Trip
            .findOneAndDelete({_id: req.params.user})
            .then(deletedTrip => {
                const originalId = deletedTrip._id
                const {tripName, startLocation, startDate, startFlightTakeOffTime, endLocation, endDate, endFlightTakeOffTime, roundTrip, suitcases} = deletedTrip;
                db.DeletedTrip
                    .create({
                        originalId: originalId,
                        tripName: tripName,
                        startLocation: startLocation,
                        startDate: startDate,
                        startFlightTakeOffTime: startFlightTakeOffTime,
                        endLocation: endLocation,
                        endDate: endDate,
                        endFlightTakeOffTime: endFlightTakeOffTime,
                        roundTrip: roundTrip,
                        suitcases: suitcases
                    })
                    .then(previousTrip => res.json(previousTrip))
                    .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
    }
}