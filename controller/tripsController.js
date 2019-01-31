const db = require('../models');

module.exports = {
    getTrip: (req, res) => {
        db.Trip
            .find({_id: req.params.id})
            .then(dbTrip => res.json(dbTrip))
            .catch(err => res.status(422).json(err));
    },
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
        const {tripName, startLocation, startFlightTakeOffTime, endLocation, endFlightTakeOffTime} = req.body
        db.Trip
            .create({
                tripName: tripName,
                startLocation: endLocation,
                startDate: new Date(startFlightTakeOffTime.split(/-/g)[0], startFlightTakeOffTime.split(/-/g)[1], startFlightTakeOffTime.split(/-/g)[2].split(/T/)[0]),
                startFlightTakeOffTime: startFlightTakeOffTime,
                endDate: new Date (9999, 12, 12),
                endLocation: startLocation,
                endFlightTakeOffTime: endFlightTakeOffTime,
                roundTrip: false
            })
            .then(dbTrip => res.json(dbTrip))
            .catch(err => res.status(422).json(err));
    },
    putTrip: (req, res) => {
        db.Trip
            .updateOne({_id: req.params.id}, {$push:req.body})
            .then(dbTrip => res.json(dbTrip))
            .catch(err => res.status(422).json(err));
    },
    deleteTrip: (req, res) => {
        db.Trip
            .findOneAndDelete({_id: req.params.id})
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