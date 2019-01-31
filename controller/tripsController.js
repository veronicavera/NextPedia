const db = require('../models');
const axios = require('axios');

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
        console.log(req.body);
        const {tripName, takeOffAirport, takeOffTime, landingAirport, landingTime, user} = req.body
        db.Trip
            .create({
                tripName: tripName,
                takeOffAirport: takeOffAirport,
                takeOffDate: new Date(takeOffTime.split(/-/g)[0], takeOffTime.split(/-/g)[1], takeOffTime.split(/-/g)[2].split(/T/)[0]),
                takeOffTime: takeOffTime,
                landingAirport: landingAirport,
                landingDate: new Date(landingTime.split(/-/g)[0], landingTime.split(/-/g)[1], landingTime.split(/-/g)[2].split(/T/)[0]),
                landingTime: landingTime
            })
            .then(dbTrip => {
                db.User
                    .updateOne({user: user}, {$push:{trips: dbTrip._id}})
                    .then(dbUser => res.json(dbUser))
                    .catch(err => res.status(422).json(err));
            })
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