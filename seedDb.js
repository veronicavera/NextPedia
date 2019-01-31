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
    takeOffAirport: 'ORD',
    takeOffDate: new Date(2019, 2, 2),
    takeOffTime: '2019-04-04T07:30:00',
    landingAirport: 'LAX',
    landingDate: new Date(2019, 2, 9),
    landingTime: '2019-04-04T09:17:00',
  },
  {
    tripName: 'Moving',
    takeOffAirport: 'ORD',
    takeOffDate: new Date(2019, 3, 2),
    takeOffTime: '2019-04-04T07:30:00',
    landingAirport: 'LAX',
    landingDate: new Date(2019, 3, 9),
    landingTime: '2019-04-04T09:17:00',
  },
  {
    tripName: 'My Trip',
    takeOffAirport: 'ORD',
    takeOffDate: new Date(2019, 3, 11),
    takeOffTime: '2019-04-04T07:30:00',
    landingAirport: 'LAX',
    landingDate: new Date(2019, 3, 18),
    landingTime: '2019-04-04T09:17:00',
  },
  {
    tripName: 'Meeting',
    takeOffAirport: 'ORD',
    takeOffDate: new Date(2019, 1, 11),
    takeOffTime: '2019-04-04T07:30:00',
    landingAirport: 'LAX',
    landingDate: new Date(2019, 1, 18),
    landingTime: '2019-04-04T09:17:00',
  },
  {
    tripName: 'Family Vacation',
    takeOffAirport: 'ORD',
    takeOffDate: new Date(2019, 3, 20),
    takeOffTime: '2019-04-04T07:30:00',
    landingAirport: 'LAX',
    landingDate: new Date(2019, 3, 27),
    landingTime: '2019-04-04T09:17:00',
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
  process.env.MONGODB_URI || 'mongodb://localhost/nextpedia',
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
}

setDatabase();
