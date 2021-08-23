import "../pages/index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, defaultFormSettings, editFormElement, addCardForm, editProfileButton, addNewPlaceButton, profileName, profileTitle, popupName, popupTitle, template, cardImage, cardTitle } from "../utils/constants.js";


//Elements Section

const elements = new Section({
  items: initialCards, renderer: generateCard}, ".elements")
elements.renderItems();


function createCard(item, template) {
  return new Card(item, template, {
    handleCardClick: () => {
      imagePopup.open({ link: cardImage.src, name: cardTitle.textContent });
    }
  })}
  
  function generateCard(item) {
    const card = createCard(item, template);
    return elements.addItem(card.getCard())
  }


//Add New Card
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


const editFormValidator = new FormValidator(defaultFormSettings, editFormElement);
const newItemValidator = new FormValidator(defaultFormSettings, addCardForm);

editFormValidator.enableValidation();
newItemValidator.enableValidation();

