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
                    return 'Error finding airline'
                };
            }

            const populateFlightData = () => {
                let date = req.body.date || '2019-4-4' 
                let time1 = moment(date + ' 07:30 am', 'YYYY-MM_DD hh:mm a').format();
                let time2 = moment(date + ' 01:30 pm', 'YYYY-MM_DD hh:mm a').format();
                let time3 = moment(date + ' 05:30 pm', 'YYYY-MM_DD hh:mm a').format();

                let hours = parseInt(flightInformation[0].time.split('h')[0]) + parseInt(timeOffset);
                let minutes = parseInt(flightInformation[0].time.split(' ')[1].replace('min')) + (60 * hours);

                let flightData = [
                    {
                        airlineName: getAirlineCode(),
                        departureTime: time1.replace(moment(date + ' 07:30 pm', 'YYYY-MM-DD hh:mm a').format('Z'), ''),
                        arrivalTime: moment(time1).add(minutes, 'minutes').format().replace(moment(date + ' 07:30 pm', 'YYYY-MM_DD hh:mm a').format('Z'), ''),
                        departureAirport: flightInformation[0].start,
                        arrivalAirport: flightInformation[0].dest,
                        flightFare: Math.floor(flightInformation[0].distance / 10)
                    },
                    {
                        airlineName: getAirlineCode(),
                        departureTime: time2.replace(moment(date + ' 01:00 pm', 'YYYY-MM-DD hh:mm a').format('Z'), ''),
                        arrivalTime: moment(time2).add(minutes, 'minutes').format().replace(moment(date + ' 01:00 pm', 'YYYY-MM_DD hh:mm a').format('Z'), ''),
                        departureAirport: flightInformation[0].start,
                        arrivalAirport: flightInformation[0].dest,
                        flightFare: Math.floor(flightInformation[0].distance / 10)
                    },
                    {
                        airlineName: getAirlineCode(),
                        departureTime: time3.replace(moment(date + ' 05:30 pm', 'YYYY-MM-DD hh:mm a').format('Z'), ''),
                        arrivalTime: moment(time3).add(minutes, 'minutes').format().replace(moment(date + ' 05:30 pm', 'YYYY-MM_DD hh:mm a').format('Z'), ''),
                        departureAirport: flightInformation[0].start,
                        arrivalAirport: flightInformation[0].dest,
                        flightFare: Math.floor(flightInformation[0].distance / 10)
                    }
                    
                ]
                if (route.data.steps[0].distance.flight[0].start !== startAirport || route.data.steps[0].distance.flight[0].dest !== endAirport) {
                    res.send('No flights available between the selected airports');
                } else {
                    res.json(flightData);
                    return flightData;
                }
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
            const timeOffset = route.data.steps[0].time;
            return populateFlightData();
        }
        promise();
    }
}