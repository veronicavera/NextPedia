const axios = require('axios');

module.exports = {
    getWeatherData: (req, res) => {
        if (req.body.lat && req.body.lng && req.body.time) {
            axios.get(`https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${req.body.lat},${req.body.lng},${req.body.time}?exclude=currently,hourly,flags`)
                .then(weatherData => res.json(weatherData.data))
                .catch(err => res.status(422).json(err));
        } else {
            res.status(403).send('Please send latitude as lat, longitude as lng, and time as time');
        }
    }
}