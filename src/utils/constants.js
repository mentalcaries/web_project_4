
export const defaultFormSettings = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__error_visible"
}

//Modals
export const popupEditForm = document.querySelector(".popup_type_edit-profile");
export const popUpNewItem = document.querySelector(".popup_type_new-item");
export const popupConfirmDelete = document.querySelector(".popup_type_confirm-delete");
export const editFormElement = popupEditForm.querySelector(".popup__form");
export const addCardForm = popUpNewItem.querySelector(".popup__form");


//Button variables

export const editProfileButton = document.querySelector(".profile__edit-btn");
export const addNewPlaceButton = document.querySelector(".profile__add-button");
export const CloseButton = document.querySelector(".popup__close-btn")


//Page Text
export const profileName = document.querySelector(".profile__name");
export const profileTitle = document.querySelector(".profile__subtitle");
export const profileImage = document.querySelector(".profile__image");


//Form Text
export const popupName = popupEditForm.querySelector("#popup_name");
export const popupTitle = popupEditForm.querySelector("#popup_title");

//Card Template
export const template = document.querySelector(".card-template").content;
