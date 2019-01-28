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
const userTest1 = {
    'user': 'flightAficionado@ymail.com',
    '__v': 0
}
const userTest2 = {
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

const userTest3 = {
    'user': 'occasionalFlier@yahoo.com',
    '__v': 0
}

const tripTest = {
    'tripName': 'Not Just Another Trip',
    'startLocation': 'ORD',
    'startDate': new Date(2019, 5, 2),
    'startFlightTakeOffTime': '3 p.m.',
    'endLocation': 'LAX',
    'endDate': new Date(2019, 5, 9),
    'endFlightTakeOffTime': '4 p.m.',
    'roundTrip': true
}

const suitcaseTest = {
    name: 'bandages', 
    quantity: 10
}

const putTest = {
    n: 1,
    nModified: 1,
    ok: 1
}

let tripId, suitcaseId;

describe('/api/users/all get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/users/all')
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('array');
    });

    it('should have keys', () => {
        expect(actualObject[0]).to.have.keys(['__v','_id','trips','user'])
    });
});

describe('/api/users/:user get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/users/' + userTest1.user)
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('array');
    });

    it('should have keys', () => {
        expect(actualObject[0]).to.have.keys(['__v','_id','trips','user'])
    });

    it('should equal', () => {
        expect(actualObject[0].user).to.equal(userTest1.user);
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
        expect(actualObject).to.have.keys(['__v','_id','trips','user'])
    });

    it('should equal', () => {
        expect(actualObject.user).to.equal(userTest1.user);
    })
});

describe('/api/users/ post ', () => {
    before(async () => {
        const response = await axios.post('http://localhost:5000/api/users/', {
            user: userTest1.user
        })
        actualObject = response.data
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','trips','user'])
    });

    it('should equal', () => {
        expect(actualObject.user).to.equal(userTest1.user);
    })
});

describe('/api/trips/ get ', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/trips/' + userTest2.user)
        actualObject = response.data[0].trips[0]
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip', 'suitcases'])
    });

    it('name should equal', () => {
        expect(actualObject.tripName).to.equal(userTest2.trips.tripName);
    })
});

describe('/api/trips/ delete ', () => {
    before(async () => {
        const response = await axios.delete('http://localhost:5000/api/trips/' + actualObject._id)
        actualObject = response.data
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip', 'suitcases', 'originalId'])
    });

    it('should equal', () => {
        expect(actualObject.tripName).to.equal(userTest2.trips.tripName);
    })
});

describe('/api/trips/ post ', () => {
    before(async () => {
        const response = await axios.post('http://localhost:5000/api/trips/', tripTest)
        actualObject = response.data;
        tripId = response.data._id;
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip'])
    });

    it('should equal', () => {
        expect(actualObject.tripName).to.equal(tripTest.tripName);
    });
});

describe('/api/users/ put ', () => {
    before(async () => {
        const response = await axios.put('http://localhost:5000/api/users/' + userTest2.user, {trips: tripId})
        actualObject = response.data
    });

    it('should deep equal', () => {
        expect(actualObject).to.eql(putTest);
    });
});

describe('/api/trips/search/:id get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/trips/search/' + tripId)
        actualObject = response.data[0]
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip'])
    });

    it('should equal', () => {
        expect(actualObject.tripName).to.equal(tripTest.tripName);
    })
});

describe('/api/trips/:user get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/trips/' + userTest2.user)
        actualObject = response.data[0]
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','trips','user']);
    });

    it('should have keys', () => {
        expect(actualObject.trips[0]).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip'])
    });

    it('should equal', () => {
        expect(actualObject.user).to.equal(userTest2.user);
    })
});

describe('/api/trips/all get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/trips/all')
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('array');
    });

    it('should have length 5', () => {
        expect(actualObject.length).to.equal(5);
    });
});

describe('/api/suitcases/all get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/suitcases/all')
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('array');
    });

    it('should have length 5', () => {
        expect(actualObject.length).to.equal(5);
    });
});

describe('/api/suitcases/:user get', () => {
    before(async () => {
        const response = await axios.get('http://localhost:5000/api/suitcases/' + userTest3.user)
        actualObject = response.data[0]
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('trips should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','tripName','startLocation', 'startDate', 'startFlightTakeOffTime', 'endLocation', 'endDate', 'endFlightTakeOffTime', 'roundTrip', 'suitcases'])
    });

    it('suitcases should have keys', () => {
        expect(actualObject.suitcases).to.have.keys(['__v','_id','items'])
    });

    it('suitcases should have length 2', () => {
        expect(actualObject.suitcases.items.length).to.equal(2)
    });
});

describe('/api/suitcase/ post', () => {
    before(async () => {
        const response = await axios.post('http://localhost:5000/api/suitcases/',
        {
            item: suitcaseTest.name,
            quantity: suitcaseTest.quantity
        })
        actualObject = response.data;
        suitcaseId = response.data._id;
    });

    it('should be an object', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.keys(['__v','_id','items'])
    });

    it('should deeply equal', () => {
        expect(actualObject.items[0]).to.eql(suitcaseTest);
    });
});

describe('/api/trips/ put', () => {
    before(async () => {
        const response = await axios.put('http://localhost:5000/api/trips/' + tripId, {suitcases: suitcaseId})
        actualObject = response.data
    });

    it('should deep equal', () => {
        expect(actualObject).to.eql(putTest);
    });
});