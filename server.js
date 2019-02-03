//import dependencies
var express = require("express")
var apiRoutes = require("./routes/api");
var htmlRoutes = require("./routes/html");

// create new express server
var app = express();

// set up port
var PORT = process.env.PORT || 3000;

//set up express middleware to accept incoming post data and have it read as a JSON object
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Use the apiRoutes file for any apiRoutes
// Use the htmlRoutes file for all other routes
app.use(notesRoute);
app.use(index);
// serve up tables page

// turn on express app/server
// API endpoints
// Get all tables
app.get("/", function(req, res) {
  console.log("Inside the GET '/' route!");
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/api/notesRoute", setNote, function(req, res) {
  console.log("Inside the POST '/api/users' route!");
  res.json(req.body);
});

app.listen(PORT, function() {
  console.log("Now listening on PORT: " + PORT);
});