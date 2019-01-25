const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const mocha = require('mocha');
app.use(router);

require('../routes')(router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nextpedia", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
// const chai = require('chai');
// const chaiExpress = require('chai-express'), { simulateRouteDispatch } = require('chai-express');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

console.log('here');
 
const UserController = require('../controllers/usersController');

// chai.use(chaiExpress);
// chai.use(sinonChai);

describe('routes', () => {
  describe('GET /users', () => {
    // it('should define it', () => {
    //   expect(router).to.have.route(/^\/users_1\/?$/i);
    // });
 
    // it('should call to the right controller', () => {
    //   sinon.spy(UserController, 'getUser');
 
    //   simulateRouteDispatch(router, 'get', /^\/users_1\/?$/i);
 
    //   expect(UserController.getAll).to.be.calledOnce;
 
    //   UserController.getAll.restore();
    // });
  });
});