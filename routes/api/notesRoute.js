var router = require("express").Router;
var connection = require("../../db/connections");

router
.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, res) {
    if(err) throw err;

    res.json(res);
  });
});


// Save a new note
// router.post("/api/notes", function(req, res) {
//   connection.query("SELECT COUNT() 'count' FROM notes", function(err, res) {
//     if (err) throw err;

//     connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
//       if (err) throw err;

//       res.json(result);
//     });
//   });
// });


// Clear all notes
// router.delete("/api/notes", function(req, res) {
//   connection.query("DELETE FROM notes", req.params.id, function(err, result) {
//     if (err) throw err;

//     res.json(result);
//   });
// });



module.exports = router;
