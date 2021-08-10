import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

//Modals
const popUp = document.querySelectorAll(".popup");
const popupEditForm = document.querySelector(".popup_type_edit-profile");
const popUpNewItem = document.querySelector(".popup_type_new-item");
const editFormElement = popupEditForm.querySelector(".popup__form");

//Button variables

const addCardForm = popUpNewItem.querySelector(".popup__form");

const newItemSubmitButton = addCardForm.querySelector(".popup__save-btn");
const editProfileSubmitButton = editFormElement.querySelector(".popup__save-btn")
const popUpPicture = document.querySelector(".popup_type_picture");
const popUpPictureImage = popUpPicture.querySelector(".popup__image");
const popUpPictureCaption = popUpPicture.querySelector(".popup__caption");


////Open Buttons

const editProfileButton = document.querySelector(".profile__edit-btn");
const addNewPlaceButton = document.querySelector(".profile__add-button");


//Page Text
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__subtitle");

//Form Text
const popupName = popupEditForm.querySelector("#popup_name");
const popupTitle = popupEditForm.querySelector("#popup_title");
const newItemName = popUpNewItem.querySelector("#popup_image-title");
const newItemLink = popUpNewItem.querySelector("#popup_image-link");

//Card Template
const cardTemplate = document.querySelector(".card-template").content;


//General Open Modal 
function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", escHandler)
  
}

//General Close Modal 
function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", escHandler)
}

function escHandler(evt){
  if (evt.key ==="Escape"){
    const activePopup = document.querySelector(".popup_opened")
    closePopup(activePopup);
  }
}


//Edit Profile
editProfileButton.addEventListener("click", () => {
  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
  openPopup(popupEditForm);
  enableEditProfileButton();
});


//Submit Profile
editFormElement.addEventListener("submit", (evt) => {
  //Save data to HTML, Close popup
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;
  closePopup(popupEditForm);
  
});


//New Item Modal
////Click add button
addNewPlaceButton.addEventListener("click", (evt) => {
  openPopup(popUpNewItem);
});


//Close Popup by clicking close button, overlay or pressing Esc

popUp.forEach(popup => {

  //Close button
  const closeButton = popup.querySelector(".popup__close-btn")
  closeButton.addEventListener("click", (evt) => {
    closePopup(popup);
  })


  //Overlay
  popup.addEventListener("click", (evt) => {
    if (evt.target.closest(".popup__container")) return
    closePopup(popup);
  })
})


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

const cardContainer = document.querySelector(".elements");

//Templates
////Access content within template and clone it for each card
// const cardTemplate = document.querySelector("#card-template").content;

// function createCard(data) {
//   const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
//   const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__title");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const deleteButton = cardElement.querySelector(".card__delete-button");
//   cardTitle.textContent = data.name;
//   cardImage.src = data.link;
//   cardImage.alt = "Picture of " + data.name;
  

//   //Toggle like button
//   likeButton.addEventListener("click", (evt) => {

//     evt.target.classList.toggle("card__like-button_active");
//   });

//   //Delete Card
//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   })

//   //Maximise Picture
//   cardImage.addEventListener("click", () => {
//     openPopup(popUpPicture);
//     popUpPictureImage.src = data.link;
//     popUpPictureImage.alt = `Picture of ${data.name}`;
//     popUpPictureCaption.textContent = data.name;
//   })

//   return cardElement;
// }


function renderCard(data, cardContainer){
  const card = new Card(data, cardTemplate)
  cardContainer.prepend(card.createCard());
}

//Create Initial Card Section
initialCards.forEach((data)=>{renderCard(data, cardContainer)});

function disableNewCardButton(){
  newItemSubmitButton.classList.add("popup__save-btn_disabled")
  newItemSubmitButton.disabled = true;
}

function enableEditProfileButton(){
  editProfileSubmitButton.classList.remove("popup__save-btn_disabled")
  editProfileSubmitButton.disabled = false;
}

//New Item Modal - Add New Image Card

addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCard = {
    "name": newItemName.value,
    "link": newItemLink.value
  }

  initialCards.push(newCard);
  renderCard(newCard, cardContainer);
  closePopup(popUpNewItem);
  disableNewCardButton();
  addCardForm.reset();

});

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