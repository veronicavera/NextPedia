const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3308,

    // Your username
    user: 'root',

    // Your password
    password: 'root',
    database: 'nextpedia_db'
  });
}

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
});

module.exports = connection;
