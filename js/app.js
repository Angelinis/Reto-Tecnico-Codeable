function saveNote() {
  var element = document.getElementById("app-container");
  var noteValue = document.getElementById("newNote").value ;

  
  var newNote = '<div class="note">' + noteValue+ '</div>';
  element.insertAdjacentHTML( 'beforeend', newNote );
  document.getElementById("newNote").value = "";
}