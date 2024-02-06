function saveNote() {
  const element = document.getElementById("app-container");
  const noteValue = document.getElementById("newNote").value ;

  if (noteValue){
      const newNote = '<div class="note"><p>' + noteValue+ 
    '</p><input class="erase-button" type="button" value="Borrar" onclick="eraseNote()"/></div>';
    element.insertAdjacentHTML( 'beforeend', newNote );

    if(sessionStorage.getItem("sessionNotes")){

      const newID = parseInt(sessionStorage.getItem("noteID")) + 1;
      sessionStorage.setItem("noteID", newID);

      let myObject = JSON.parse(sessionStorage.getItem("sessionNotes"));

      myObject["key"+newID] = noteValue;
      sessionStorage.setItem("sessionNotes", JSON.stringify(myObject));

    } else {
      let myObject = {};
      myObject.key1 = noteValue;


      sessionStorage.setItem("sessionNotes", JSON.stringify(myObject));
      sessionStorage.setItem("noteID", "1");

    }

    document.getElementById("newNote").value = "";
  } else {
    alert("La nota está vacía!");
  }
  
  
}

function eraseNote() {
  console.log("erased");
}

