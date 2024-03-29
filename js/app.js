function saveNote() {
  const element = document.getElementById("app-container");
  const noteValue = document.getElementById("newNote").value ;
  let newID = 1;

  if (noteValue){

    if(sessionStorage.getItem("sessionNotes")){

      newID = parseInt(sessionStorage.getItem("noteID")) + 1;
      sessionStorage.setItem("noteID", newID);

      let myObject = JSON.parse(sessionStorage.getItem("sessionNotes"));

      myObject["key"+newID] = noteValue;
      sessionStorage.setItem("sessionNotes", JSON.stringify(myObject));

    } else {
      let myObject = {};
      myObject["key"+newID] = noteValue;


      sessionStorage.setItem("sessionNotes", JSON.stringify(myObject));
      sessionStorage.setItem("noteID", newID);

    }

    const newNote = '<div class="note" id="notekey'+newID + '"><p>' + noteValue+ 
    '</p><div><input class="erase-button" type="button" value="Borrar" onclick="eraseNote(\'notekey' + newID + '\')"/></div></div>';
    element.insertAdjacentHTML( 'beforeend', newNote );



    document.getElementById("newNote").value = "";
  } else {
    alert("Por favor, revisar la nota.");
  }
  
  
}



function eraseNote(noteElement) {
  keyValue = (noteElement.substring(4));
  console.log(keyValue);
  const element = document.getElementById(noteElement);
  element.parentNode.removeChild(element);

  let myObject = JSON.parse(sessionStorage.getItem("sessionNotes"));

  delete myObject[keyValue];

  sessionStorage.setItem("sessionNotes", JSON.stringify(myObject));
}

