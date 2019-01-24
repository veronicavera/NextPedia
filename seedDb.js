const mongoose = require('mongoose');
const db = require('./models');

const users = ['tripPlanner@gmail.com', 'flightAficionado@ymail.com', 'travelLover@aol.com', 'businessFlier@businessEmail.com', 'occasionalFlier@yahoo.com']
const trips = [
    {
        tripName: 'The Best Trip',
        startLocation: 'ORD',
        startDate: 1000000000,
        startFlightTakeOffTime: '3 p.m.',
        endLocation: 'LAX',
        endDate: 1000200000,
        endFlightTakeOffTime: '4 p.m.',
        roundTrip: true
    },
    {
        tripName: 'Moving',
        startLocation: 'ORD',
        startDate: 1000000000,
        startFlightTakeOffTime: '8 a.m.',
        endLocation: 'LAX',
        endDate: 1000000000,
        endFlightTakeOffTime: 'N/A',
        roundTrip: false
    },
    {
        tripName: 'My Trip',
        startLocation: 'ORD',
        startDate: 1020000000,
        startFlightTakeOffTime: '12 p.m.',
        endLocation: 'LAX',
        endDate: 1020200000,
        endFlightTakeOffTime: '11 a.m.',
        roundTrip: true
    },
    {
        tripName: 'Meeting',
        startLocation: 'ORD',
        startDate: 1000000000,
        startFlightTakeOffTime: '6 p.m.',
        endLocation: 'LAX',
        endDate: 1000200000,
        endFlightTakeOffTime: '7 p.m.',
        roundTrip: true
    },
    {
        tripName: 'Family Vacation',
        startLocation: 'ORD',
        startDate: 1000000000,
        startFlightTakeOffTime: '2 p.m.',
        endLocation: 'LAX',
        endDate: 1000200000,
        endFlightTakeOffTime: '5 p.m.',
        roundTrip: true
    }
]
const suitcases = [
    {
        suitcaseId: '1',
        item: 'shirt',
        quantity: 2
    },
    {
        suitcaseId: '2',
        item: 'blanket',
        quantity: 1
    },
    {
        suitcaseId: '3',
        item: 'neck pillow',
        quantity: 1
    },
    {
        suitcaseId: '4',
        item: 'pants',
        quantity: 2
    },
    {
        suitcaseId: '5',
        item: 'socks',
        quantity: 2
    }
]
let tripIds = [];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nextpedia", { useNewUrlParser: true });

for (let i = 0; i < users.length; i++) {
    // db.User.create({user: users[i]}).then(() => console.log(`user ${i} created`)).catch(err => console.log(err));

    db.Trip.create(trips[i])
        .then(trip => {
            console.log(`trip ${i} created`);
            tripIds.push(trip._id);
            console.log(tripIds);
            db.User.updateOne({user: users[i]}, {$push: {trips: trip._id}})
                .then(() => console.log(`user ${i} updated`))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    db.Suitcase.create(suitcases[i])
        .then(suitcase => {
            console.log(`suitcase ${i} created`);
            db.Trip.updateOne({_id: tripIds[i]},{$push: {suitcases: suitcase._id}})
                .then(() => console.log(`trip ${i} updated`))
                .catch(() => console.log(err));
        })
}
