$(document).ready(function () {

  $("#submit").on("click", function (e) {
    event.preventDefault();
    const noteData = {
      noteTitle: $("#note_title").val(),
      noteText: $("#note_text").val()
    }

    
    $.ajax({
      url: "/api/notes",
      method: "POST",
      data: noteData // this is req.body
      

    }).then(function (noteData) {
      console.log(this);
      noteData.forEach((note, i) => {

        // create list group item and add info to it
        const $li = $("<li class='list-group-item'>");

        $li
          .append(`<h4>Note Title ${i + 1}: ${notes.note_title}</h4>`)
          .append(`<p>Note Body: ${notes.note_text}</p>`)


        $("#noteList").append($li);

      });
      // package up data from form

    });


  })
})

console.log("This is submit button working");