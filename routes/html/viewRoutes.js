const router = require("express").Router();
const path = require("path");

// serve up home page
router.get("/", function (req, res) {
  // use res.sendFile to send home.html
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});

// serve up tables page
router.get("/notes", function (req, res) {
  // use res.sendFile to send tables.html
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});



module.exports = router;