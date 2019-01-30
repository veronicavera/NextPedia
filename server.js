require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
} else {
    app.use(express.static(path.join(__dirname, '/client/public')));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nextpedia", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});