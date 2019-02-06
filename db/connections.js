var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "noteTaker_db"
  });
}



connection.connect(function (err) {
  if (err) {
    console.log(err);
    return res.status(400).json(err);
  }
 
    console.log("Connection is " + connection.threadId);
})

module.exports = connection;