var mysql = require("mysql");

var connection;

if (process.env.JAWDB_URL) {
  connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "noteTaker_db"
  });
}



connection.connect(function (err) {
  if(err) throw err;
    console.log("Connection is " + connection.threadId);
})

module.exports = connection;