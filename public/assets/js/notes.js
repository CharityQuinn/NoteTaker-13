$(document).ready(function () {

  $("#submit").on("click", function (e) {

    const noteData = {
      noteTitle: $("#note_title").val(),
      noteText: $("#note_text").val()
    }



    event.preventDefault();
    $.ajax({
      url: "/api/notes",
      method: "POST",
      data: noteData // this is req.body

    }).then(function (noteData) {

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




    // check to see if dbResponse.isWaiting is true or false
    console.log(dbResponse);

  })
})

console.log("This is submit button working");