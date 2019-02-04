var router = require("express").Router();
var connection = require("../../db/connections");

router
  .get("/api/notes", function (req, res) {
    connection.query("SELECT * FROM notes", function (err, result) {
      if (err) throw err;

      res.json(result);
    });
  });


// Save a new note
router.post("/api/notes", function (req, res) {
  connection.query("INSERT INTO notes SET ?", req.body, function (err, result) {
    if (err) throw err;

    res.json(result);
  });

});

// Clear all notes
router.delete("/api/notes/:id", function (req, res) {
  connection.query("DELETE FROM notes WHERE note_id = ?", req.params.id, function (err, result) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;