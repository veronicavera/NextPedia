const mongoose = require('mongoose');
const db = require('./models');

const users = [
  'tripPlanner@gmail.com',
  'flightAficionado@ymail.com',
  'travelLover@aol.com',
  'businessFlier@businessEmail.com',
  'occasionalFlier@yahoo.com'
];
const trips = [
  {
    tripName: 'The Best Trip',
    startLocation: 'ORD',
    startDate: new Date(2019, 2, 2),
    startFlightTakeOffTime: '3 p.m.',
    endLocation: 'LAX',
    endDate: new Date(2019, 2, 9),
    endFlightTakeOffTime: '4 p.m.',
    roundTrip: true
  },
  {
    tripName: 'Moving',
    startLocation: 'ORD',
    startDate: new Date(2019, 3, 2),
    startFlightTakeOffTime: '8 a.m.',
    endLocation: 'LAX',
    endDate: new Date(2019, 3, 9),
    endFlightTakeOffTime: 'N/A',
    roundTrip: false
  },
  {
    tripName: 'My Trip',
    startLocation: 'ORD',
    startDate: new Date(2019, 3, 11),
    startFlightTakeOffTime: '12 p.m.',
    endLocation: 'LAX',
    endDate: new Date(2019, 3, 18),
    endFlightTakeOffTime: '11 a.m.',
    roundTrip: true
  },
  {
    tripName: 'Meeting',
    startLocation: 'ORD',
    startDate: new Date(2019, 1, 11),
    startFlightTakeOffTime: '6 p.m.',
    endLocation: 'LAX',
    endDate: new Date(2019, 1, 18),
    endFlightTakeOffTime: '7 p.m.',
    roundTrip: true
  },
  {
    tripName: 'Family Vacation',
    startLocation: 'ORD',
    startDate: new Date(2019, 3, 20),
    startFlightTakeOffTime: '2 p.m.',
    endLocation: 'LAX',
    endDate: new Date(2019, 3, 27),
    endFlightTakeOffTime: '5 p.m.',
    roundTrip: true
  }
];
const suitcases = [
  {
    items: [
      {
        name: 'shirt',
        quantity: 2
      },
      {
        name: 'pant',
        quantity: 4
      },
      {
        name: 'suit',
        quantity: 1,
        notes: 'powder blue pinstripes'
      }
    ]
  },
  {
    items: [
      {
        name: 'blanket',
        quantity: 1
      },
      {
        name: 'sweater',
        quantity: 5
      }
    ]
  },
  {
    items: [
      {
        name: 'neck pillow',
        quantity: 1
      },
      {
        name: 'tablet',
        quantity: 1
      },
      {
        name: 'toothbrush',
        quantity: 1,
        notes: 'travel sized'
      }
    ]
  },
  {
    items: [
      {
        name: 'socks',
        quantity: 5
      },
      {
        name: 'pants',
        quantity: 2
      }
    ]
  },
  {
    items: [
      {
        name: 'socks',
        quantity: 2
      },
      {
        name: 'shoes',
        quantity: 2
      }
    ]
  }
];
let tripIds = [];

mongoose.connect(
  'mongodb://localhost/test_nextpedia',
  { useNewUrlParser: true }
);

const setDatabase = async () => {
  const promises = ['User', 'Trip', 'Suitcase'].map(async collection => {
    const empty = await db[collection].deleteMany({});
    console.log(collection);
    console.log(empty);
  });

  await Promise.all(promises);
  for (let i = 0; i < users.length; i++) {
    db.User.create({ user: users[i] })
      .then(() => console.log(`user ${i} created`))
      .catch(err => console.log(err));

    db.Trip.create(trips[i])
      .then(trip => {
        console.log(`trip ${i} created`);
        tripIds.push(trip._id);
        db.User.updateOne({ user: users[i] }, { $push: { trips: trip._id } })
          .then(() => console.log(`user ${i} updated`))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    db.Suitcase.create(suitcases[i]).then(suitcase => {
      console.log(`suitcase ${i} created`);
      db.Trip.updateOne(
        { _id: tripIds[i] },
        { $push: { suitcases: suitcase._id } }
      )
        .then(() => console.log(`trip ${i} updated`))
        .catch(() => console.log(err));
    });
  }
};

setDatabase();
