let popupForm = document.querySelector(".popup");
let edit = document.querySelector(".profile__edit-btn");
let close = document.querySelector(".close-btn");
console.log(edit)
console.log(popupForm)



function showPopup() {
  popupForm.classList.toggle('popup_visible');
}

edit.addEventListener("click", showPopup);
close.addEventListener("click", showPopup);



//<button onclick="myFunction()">Click me</button>

// function showPopup() {
//     document.getElementById("edit").innerHTML = "Hello World";
// }



