$(document).ready(function () {

  $.ajax({
    url: "/api/notes",
    method: "GET",

  }).then(function (noteData2) {
    console.log(noteData2);
    for (let i = 0; i < noteData2.length; i++) {

      // create list group item and add info to it
      const $li = $("<li class='list-group-item'>");
      const $ui = $("<li class='list-group-item'>");

      $li
        .append(`<h4>Title ${i + 1}: ${noteData2[i].note_title}</h4>`)
        // $ui
        .append(`<p>${noteData2[i].note_text}</p>`)


      $("#note-title").append($li);
      //$("#note-text").append($ui);

    };
  })

})

$("#submit").on("click", function (e) {
  event.preventDefault();
  const noteData = {
    note_title: $("#form2").val(),
    note_text: $("#form1").val()
  }


  //console.log("This is submit button working " + noteData);
  console.log(noteData);
  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: noteData // this is req.body


  }).then(function (noteData2) {
    console.log(noteData2);

    
    // create list group item and add info to it
    const $li = $("<li class='list-group-item'>");

    $li
      .append(`<h4>Note Title ${i + 1}: ${noteData2.note_title}</h4>`)
      .append(`<p>Note Body: ${noteData2.note_text}</p>`)


    $("#noteList").append($li);

  });
  // package up data from form

});