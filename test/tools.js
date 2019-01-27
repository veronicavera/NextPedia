const axios = require('axios');
const expect = require('chai').expect;
const path = require('path');
const express = require('express');
const routes = require('../routes');
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/public')));
app.use(routes);


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test_nextpedia", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});

let actualObject = {};
let test1 = {
    "user": "flightAficionado@ymail.com",
    "__v": 0
}
let test2 = {
    'user': 'tripPlanner@gmail.com',
    'trips': {
        '_id': 'test',
        'tripName': 'The Best Trip',
        'startLocation': 'ORD',
        'startDate': new Date(2019, 2, 2),
        'startFlightTakeOffTime': '3 p.m.',
        'endLocation': 'LAX',
        'endDate': new Date(2019, 2, 9),
        'endFlightTakeOffTime': '4 p.m.',
        'roundTrip': true
    }
}

describe('/api/users/all ', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/users/all')
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('array');
    });

    it('should have keys', () => {
        expect(actualObject[0]).to.have.key(['__v','_id','trips','user'])
    });
});

describe('/api/users/:user', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/users/flightAficionado@ymail.com')
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('array');
    });

    it('should have keys', () => {
        expect(actualObject[0]).to.have.key(['__v','_id','trips','user'])
    });

    it('should deep equal', () => {
        expect(actualObject[0].user).to.eql(test1.user);
    })
});

describe('/api/users/:user get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/users/flightAficionado@ymail.com')
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('array');
    });

    it('should have keys', () => {
        expect(actualObject[0]).to.have.key(['__v','_id','trips','user'])
    });

    it('should deep equal', () => {
        expect(actualObject[0].user).to.equal(test1.user);
    })
});

describe('/api/users/:user delete', () => {
    before(async () => {
        const response = await axios.delete('http://localhost:5000/api/users/flightAficionado@ymail.com')
        actualObject = response.data
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.key(['__v','_id','trips','user'])
    });

    it('should deep equal', () => {
        expect(actualObject.user).to.eql(test1.user);
    })
});

describe('/api/users/ post ', () => {
    before(async () => {
        const response = await axios.post('http://localhost:5000/api/users/', {
            user: test1.user
        })
        actualObject = response.data
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.key(['__v','_id','trips','user'])
    });

    it('should equal', () => {
        expect(actualObject.user).to.equal(test1.user);
    })
});

// describe('/api/trips/ get ', () => {
//     before(async () => {
//         const response = await axios.get('http://localhost:5000/api/trips/' + test2.user)
//         actualObject = response.data[0].trips[0]
//     });

//     it('should be an object', () => {
//         expect(actualObject).to.be.a('object');
//     });

//     it('should have keys', () => {
//         expect(actualObject).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip', 'suitcases'])
//     });

//     it('name should equal', () => {
//         expect(actualObject.tripName).to.equal(test2.trips.tripName);
//     })
// });

// describe('/api/trips/ delete ', () => {
//     before(async () => {
//         const response = await axios.delete('http://localhost:5000/api/trips/' + actualObject._id)
//         actualObject = response.data[0].trips[0]
//         console.log(actualObject);
//     });

//     it('should be an object', () => {
//         expect(actualObject).to.be.a('object');
//     });

//     it('should have keys', () => {
//         expect(actualObject).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip', 'suitcases', 'originalId'])
//     });

//     it('should equal', () => {
//         expect(actualObject.user).to.equal(test2.user);
//     })
// });

// describe('/api/trips/ post ', () => {
//     before(async () => {
//         const response = await axios.post('http://localhost:5000/api/trips/', test2.trips)
//         actualObject = response.data
//         console.log(actualObject);
//     });

//     it('should be an object', () => {
//         expect(actualObject).to.be.a('array');
//     });

//     it('should have keys', () => {
//         expect(actualObject).to.have.key(['__v','_id','trips','user'])
//     });

//     it('should equal', () => {
//         expect(actualObject.user).to.equal(test.user);
//     })
// });