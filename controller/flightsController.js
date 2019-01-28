const axios = require('axios');
const moment = require('moment');

module.exports = {
    getFlightData: (req, res) => {

        const promise = async () => {
            const getAirlineCode = () => {
                const randomNumber = Math.floor(Math.random() * 15);
                if (randomNumber >= 11) {
                    return 'AA'
                } else if (randomNumber >= 7) {
                    return 'DL'
                } else if (randomNumber >= 4) {
                    return 'UA'
                } else if (randomNumber >= 1) {
                    return 'WN';
                } else if (randomNumber === 0){ 
                    return 'B6';
                } else {
                    return 'How?'
                };
            }

            const populateFlightData = () => {
                let time = moment('2019-4-4 12:30 pm', 'YYYY-MM_DD hh:mm a').format();
                let hours = flightInformation[0].time.split('h')[0];
                let minutes = parseInt(flightInformation[0].time.split(' ')[1].replace('min')) + (60 * hours);
                
                let flightData = [
                    {
                        airlineName: getAirlineCode(),
                        departureTime: time.replace(moment('2019-4-4 12:30 pm', 'YYYY-MM_DD hh:mm a').format('Z'), ''),
                        arrivalTime: moment(time).add(minutes, 'minutes').format().replace(moment('2019-4-4 12:30 pm', 'YYYY-MM_DD hh:mm a').format('Z'), ''),
                        departureAirport: flightInformation[0].start,
                        arrivalAirport: flightInformation[0].dest,
                        flightFare: Math.floor(flightInformation[0].distance / 10)
                    }
                ]
                res.json(flightData);
                return flightData;
            }
            let startAirport = req.body.startAirport, endAirport = req.body.endAirport;
            const route = await axios({
                method: 'GET',
                url: 'https://distanceto.p.rapidapi.com/get?car=false&foot=false',
                params: {
                    route: JSON.stringify([
                        {"t": startAirport},
                        {"t": endAirport}
                    ])
                },
                headers: { "X-RapidAPI-Key": process.env.FLIGHTS_API_KEY}
            })

            const flightInformation = route.data.steps[0].distance.flight
            return populateFlightData();
        }
        promise();
    }
}