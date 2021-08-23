import "../pages/index.css";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import yosemiteImage from "../images/kirill-pershin-1088404-unsplash.jpg";
import stLucieImage from "../images/psl.jpg";
import stuartImage from "../images/stuart.jpg";
import ftPierceImage from "../images/ftpierce.jpg";
import chagImage from "../images/chag.jpg";
import sandoImage from "../images/sando.jpg";



const initialCards = [
  {
    name: "Yosemite Valley",
    link: yosemiteImage
  },
  {
    name: "Port St Lucie",
    link: stLucieImage
  },
  {
    name: "Stuart",
    link: stuartImage
  },
  {
    name: "Fort Pierce",
    link: ftPierceImage
  },
  {
    name: "Chaguaramas Bay Marina",
    link: chagImage
  },
  {
    name: "San Fernando",
    link: sandoImage
  }
]


//Modals
const popupEditForm = document.querySelector(".popup_type_edit-profile");
const popUpNewItem = document.querySelector(".popup_type_new-item");
const editFormElement = popupEditForm.querySelector(".popup__form");
const addCardForm = popUpNewItem.querySelector(".popup__form");

//Button variables

const editProfileButton = document.querySelector(".profile__edit-btn");
const addNewPlaceButton = document.querySelector(".profile__add-button");


//Page Text
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__subtitle");

//Form Text
const popupName = popupEditForm.querySelector("#popup_name");
const popupTitle = popupEditForm.querySelector("#popup_title");

//Card Template
const template = document.querySelector(".card-template").content;



//Elements Section

const elements = new Section({
  items: initialCards, renderer: generateCard
}, ".elements")
elements.renderItems();

function generateCard(item) {
  const card = new Card(item, template, {handleCardClick: () => {
    const cardImage = document.querySelector(".card__image");
    const cardTitle = document.querySelector(".card__title");
    imagePopup.open({link : cardImage.src, name: cardTitle.textContent});
    }
  })
  return elements.addItem(card.createCard());
}


//New Card
const renderedCard = new PopupWithForm({
  submitFormHandler: (item) => {
    generateCard(item);

  }
}, ".popup_type_new-item")
renderedCard.setEventListeners();



//Edit Profile
const userInfo = new UserInfo({ nameSelector: profileName, titleSelector: profileTitle })

const userProfile = new PopupWithForm({
  submitFormHandler: (item) => {
    userInfo.setUserInfo({ nameSelector: item.name, titleSelector: item.title });
  }
}, ".popup_type_edit-profile")

userProfile.setEventListeners();

editProfileButton.addEventListener("click", (evt) => {
  const profileText = userInfo.getUserInfo();
  popupName.value = profileText.name;
  popupTitle.value = profileText.title;
  userProfile.open();

});



//New Item Modal
//Click add button
addNewPlaceButton.addEventListener("click", (evt) => {
  renderedCard.open();
});


//Maximise Image
const imagePopup = new PopupWithImage(".popup_type_picture");
imagePopup.setEventListeners();


const defaultFormSettings = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__error_visible"
}

const editFormValidator = new FormValidator(defaultFormSettings, editFormElement);
const newItemValidator = new FormValidator(defaultFormSettings, addCardForm);

editFormValidator.enableValidation();
newItemValidator.enableValidation();

