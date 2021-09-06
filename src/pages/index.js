import "../pages/index.css";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { defaultFormSettings, editFormElement, addCardForm, editProfileButton, addNewPlaceButton, profileName, profileTitle, popupName, popupTitle, template } from "../utils/constants.js";


//API

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-10",
  headers: {
    authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
    "Content-Type": "application/json"
  }
});

//Get User Info
const userInfo = new UserInfo({ nameSelector: profileName, titleSelector: profileTitle })

api.getProfileInfo()
  .then((userData) => {
    userInfo.setUserInfo({ name: userData.name, title: userData.about, id: userData._id, avatar: userData.avatar})   
  })

//Edit Profile

const userProfile = new PopupWithForm({
  submitFormHandler: (item) => {
    api.setProfileInfo(item)
      .then(userInfo.setUserInfo({ nameSelector: item.name, titleSelector: item.title }));

  }
}, ".popup_type_edit-profile")

userProfile.setEventListeners();

editProfileButton.addEventListener("click", (evt) => {
  const currentUser = userInfo.getUserInfo();
  popupName.value = currentUser.name;
  popupTitle.value = currentUser.title;
  userProfile.open();

});


//Elements Section

const elements = new Section({
  renderer: generateCard
}, ".elements")


//Initial cards on page load

api.getInitialCards().then((cards) => {
  elements.renderItems(cards.reverse());
})

//Create card and add to DOM

function createCard(item, template) {
  const currentUser = userInfo.getUserInfo();
   return new Card(item, {currentUserId: currentUser.id}, template, {
    handleCardClick: () => {
      imagePopup.open({ link: item.link, name: item.name });
      }
  })
}

function generateCard(item) {
  const card = createCard(item, template);
  return elements.addItem(card.getCard())
}


//Add New Card
const renderedCard = new PopupWithForm({
  submitFormHandler: (item) => {
    api.addNewCard(item)
      .then((item) => generateCard(item));

  }
}, ".popup_type_new-item")
renderedCard.setEventListeners();







//New Item Modal
//Click add button
addNewPlaceButton.addEventListener("click", (evt) => {
  renderedCard.open();
});


//Maximise Image
const imagePopup = new PopupWithImage(".popup_type_picture");
imagePopup.setEventListeners();


const editFormValidator = new FormValidator(defaultFormSettings, editFormElement);
const newItemValidator = new FormValidator(defaultFormSettings, addCardForm);

editFormValidator.enableValidation();
newItemValidator.enableValidation();

