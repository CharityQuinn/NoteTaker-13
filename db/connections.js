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

connection.config.typCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; //1 for true, 0 for false
  }
  console.log("Connection is " + connection);
  return next();
};



module.exports = connection;