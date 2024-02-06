const element = document.getElementById("app-container");

if(sessionStorage.getItem("sessionNotes")){

  const myObject = JSON.parse(sessionStorage.getItem("sessionNotes"));

  for (const key in myObject) {
    const newNote = '<div class="note" id="note'+ key + '"><p>' +myObject[key]+ 
    '</p><div><input class="erase-button" type="button" value="Borrar" onclick="eraseNote(\'note' + key + '\')"/></div></div>';
    element.insertAdjacentHTML( 'beforeend', newNote );
  }
  
} 
