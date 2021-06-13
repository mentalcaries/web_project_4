let popupForm = document.querySelector(".popup");
let edit = document.querySelector(".profile__edit-btn");
let close = document.querySelector(".popup__close-btn");



function showPopup() {
  popupForm.classList.toggle('popup_opened');
}

edit.addEventListener("click", showPopup);
close.addEventListener("click", showPopup);

