const axios = require('axios');
const expect = require('chai').expect;
const path = require('path');
const express = require('express');
const routes = require('../routes');
const db = require('../models');
const app = express();
const PORT = 5001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/public')));
app.use(routes);
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test_nextpedia", { useNewUrlParser: true });

let actualObject = {};
let test1 = {
    "user": "tripPlanner@gmail.com",
    "__v": 0
}
let test2 = {
    "user": "flightAficionado@ymail.com",
    "__v": 0
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
        expect(actualObject[0].user).to.eql(test2.user);
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
        expect(actualObject[0].user).to.equal(test2.user);
    })
});

describe('/api/users/:user delete', () => {
    before(async () => {
        const response = await axios.delete('http://localhost:5000/api/users/flightAficionado@ymail.com')
        actualObject = response.data
    });

    it('should be an array', () => {
        expect(actualObject).to.be.a('object');
    });

    it('should have keys', () => {
        expect(actualObject).to.have.key(['__v','_id','trips','user'])
    });

    it('should deep equal', () => {
        expect(actualObject.user).to.eql(test2.user);
    })
});

describe('/api/users/ post ', () => {
    before(async () => {
        const response = await axios.post('http://localhost:5000/api/users/', {
            user: test2.user
        })
        usersGetAll = response.data
        console.log(usersGetAll);
    });

    it('should be an array', () => {
        expect(usersGetAll).to.be.a('object');
    });

    it('should have keys', () => {
        expect(usersGetAll).to.have.key(['__v','_id','trips','user'])
    });

    it('should equal', () => {
        expect(usersGetAll.user).to.equal(test2.user);
    })
});