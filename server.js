//import dependencies
var express = require("express")
var index = require("./routes/api/index");
var  notesRoute = require("./routes/api/notesRoute");
var path = require("path");

// create new express server
var app = express();

// set up port
var PORT = process.env.PORT || 3000;

//set up express middleware to accept incoming post data and have it read as a JSON object
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Use the notesRoute file for any apiRoutes
// Use the index.js file for all other routes
app.use(notesRoute);
// app.use(index);
// serve up tables page

// turn on express app/server
// API endpoints
// Get all tables
app.get("/", function(req, res) {
  console.log("Inside the GET '/' route!");
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.post("/api/users", function(req, res) {

  console.log("Inside the POST '/api/notes' route!");
  res.json(req.body);
});

app.listen(PORT, function() {
  console.log("Now listening on PORT: " + PORT);
});