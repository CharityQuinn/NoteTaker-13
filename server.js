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
app.use(api);
app.use(html);
// serve up tables page

// turn on express app/server
// API endpoints
// Get all tables
