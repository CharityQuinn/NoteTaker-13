const router = require("express").Router();
const viewRoutes = require("./index");

router.use("/", viewRoutes);

var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $noteList = $(".list-container .list-group");

// Get the user's note from the inputs and save it in db
var saveNote = function() {
  var newNote = {
    title: $noteTitle.val(),
    text: $noteText.val()
  };

  $.ajax({
    url: "/api/notes",
    data: newNote,
    method: "POST"
  }).then(function(data) {
    location.reload();
  });
};

// Present the list of note titles
var presentNoteList = function(notes) {
  $noteList.empty();

  var noteListItems = [];
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var $li = $("<li class='list-group-item'>").data(note);
    var $titleDiv = $("<div>");
    var $titleSpan = $("<span class='font-weight-bold'>").text(note.title);
    var $delBtn = $(
      "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
    );

    var $noteP = $("<p class='mt-2'>").text(note.text);

    $titleDiv.append($titleSpan, $delBtn);

    $li.append($titleDiv, $noteP);
    noteListItems.push($li);
  }

  $noteList.append(noteListItems);
};

// Get notes from the db and print them to the side
var getAndRenderNotes = function() {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then(function(data) {
    presentNoteList(data);
  });
};

// Delete the clicked note
var deleteNote = function(event) {
  // Make sure the form does not get changed
  event.stopPropagation();

  var note = $(this)
    .parents(".list-group-item")
    .data();

  // Delete the note with the id of `note.id` from db
   $.ajax({
    url: "/api/notes/" + note.id,
    method: "DELETE"
  }).then(function() {
    location.reload();
  });
};

$saveNoteBtn.on("click", saveNote);
$noteList.on("click", ".delete-note", deleteNote);

// Gets and renders the initial list of notes
getAndRenderNotes();




module.exports = router;