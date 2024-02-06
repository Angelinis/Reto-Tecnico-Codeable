const element = document.getElementById("app-container");

if(sessionStorage.getItem("sessionNotes")){

  const myObject = JSON.parse(sessionStorage.getItem("sessionNotes"));

  for (const key in myObject) {
    const newNote = '<div class="note"><p>' + myObject[key]+ 
    '</p><input class="erase-button" type="button" value="Borrar" onclick="eraseNote()"/></div>';
    element.insertAdjacentHTML( 'beforeend', newNote );
  }
  
} 