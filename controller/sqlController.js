const connection = require('./connectionSQL');

module.exports = {
  lookUpAirport: (req, res) => {
    // console.log(req.params.iata);
    // connection
    //   .query(`SELECT * FROM AIRPORTS WHERE IATA = "${req.params.iata}";`)
    //   .then(airportdata => res.json(airportdata))
    //   .catch(err => res.status(422).json(err));

    connection.query(
      `SELECT * FROM AIRPORTS WHERE IATA = "${req.params.iata}";`,
      function(err, data) {
        if (err) throw err;
        // console.log(data);
        res.json(data);
      }
    );
  }
};
