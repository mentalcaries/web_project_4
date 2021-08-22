import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "./images/kirill-pershin-1088404-unsplash.jpg"
  },
  {
    name: "Port St Lucie",
    link: "./images/psl.jpg"
  },
  {
    name: "Stuart",
    link: "./images/staurt.jpg"
  },
  {
    name: "Fort Pierce",
    link: "./images/ftpierce.jpg"
  },
  {
    name: "Chaguaramas Bay Marina",
    link: "./images/chag.jpg"
  },
  {
    name: "San Fernando",
    link: "./images/sando.jpg"
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






// //Submit Profile
// // editFormElement.addEventListener("submit", (evt) => {
// //   //Save data to HTML, Close popup
// //   evt.preventDefault();
// //   profileName.textContent = popupName.value;
// //   profileTitle.textContent = popupTitle.value;
// //   closePopup(popupEditForm);

// });

// function generateCard (data, cardTemplate){
//   const card = new Card(data, cardTemplate);
//   return card.createCard();
// }


// function renderCard(data, cardContainer){
//   cardContainer.prepend(generateCard(data, cardTemplate));
// }

//Create Initial Card Section
// initialCards.forEach((data)=>{renderCard(data, cardContainer)});



// //General Open Modal 
// function openPopup(modal) {
//   modal.classList.add("popup_opened");
//   document.addEventListener("keydown", escHandler)

// }

// //General Close Modal 
// function closePopup(modal) {
//   modal.classList.remove("popup_opened");
//   document.removeEventListener("keydown", escHandler)
// }

// function escHandler(evt){
//   if (evt.key ==="Escape"){
//     const activePopup = document.querySelector(".popup_opened")
//     closePopup(activePopup);
//   }
// }

//Close Popup by clicking close button, overlay or pressing Esc

// popups.forEach(popup => {

  // //Close button
  // const closeButton = popup.querySelector(".popup__close-btn")
  // closeButton.addEventListener("click", (evt) => {
  //   closePopup(popup);
  // })


  // //Overlay
  // popup.addEventListener("click", (evt) => {
  //   if (evt.target.closest(".popup__container")) return
  //   closePopup(popup);
  // })
// })

// function submitForm(){
//   const newCard = {
//     "name": newItemName.value,
//     "link": newItemLink.value
//   }
// }



//New Item Modal - Add New Image Card

// addCardForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();

//   const newCard = {
//     "name": newItemName.value,
//     "link": newItemLink.value
//   }

//   renderCard(newCard, cardContainer);
//   closePopup(popUpNewItem);
//   addCardForm.reset();
// });


// //Maximise Picture
// this._cardImage.addEventListener("click", () => {


//   openPopup(popUpPicture);
//   popUpPictureImage.src = this._link;
//   popUpPictureImage.alt = `Picture of ${this._text}`;
//   popUpPictureCaption.textContent = this._text;
// })