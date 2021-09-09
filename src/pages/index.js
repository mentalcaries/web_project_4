import "../pages/index.css";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { defaultFormSettings, editFormElement, addCardForm, editProfileButton, addNewPlaceButton, profileName, profileTitle, profileImage, popupName, popupTitle, template, editProfilePicture, changePictureElement, } from "../utils/constants.js";
import PopupConfirmDelete from "../components/PopupConfirmDelete.js";


//API

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-10",
  headers: {
    authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
    "Content-Type": "application/json"
  }
});

//Get User Info
const userInfo = new UserInfo({ nameSelector: profileName, titleSelector: profileTitle, avatar: profileImage })
updateProfileInfo();

function updateProfileInfo() {
  api.getProfileInfo()
    .then((userData) => {
      userInfo.setUserInfo({ name: userData.name, title: userData.about, id: userData._id, avatar: userData.avatar })
    })
}

//Edit Profile

const userProfile = new PopupWithForm({
  submitFormHandler: (item) => {
    api.setProfileInfo(item)
      .then(userInfo.setUserText({ nameSelector: item.name, titleSelector: item.title }))
    updateProfileInfo();
    userProfile.renderSave(true);
    userProfile.close();
  }
}, ".popup_type_edit-profile")

userProfile.setEventListeners();

//Edit Profile Picture

const changeProfilePicture = new PopupWithForm({
  submitFormHandler: (item) => {
    api.updateProfilePicture(item.link);
    api.getProfileInfo()
      .then((userData) => userInfo.setUserAvatar({ avatar: userData.avatar }))
    changeProfilePicture.renderSave(true)
    changeProfilePicture.close();
  }
}, ".popup_type_edit-image")


editProfilePicture.addEventListener("click", () => {
  changeProfilePicture.setEventListeners()
  changeProfilePicture.open();
})


editProfileButton.addEventListener("click", () => {
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

api.getCards().then((cards) => {
  elements.renderItems(cards.reverse());
})

//Create card and add to DOM

function createCard(item, template) {
  const currentUser = userInfo.getUserInfo();
  return new Card(item, { currentUserId: currentUser.id }, template, {
    handleCardClick: () => {
      imagePopup.open({ link: item.link, name: item.name });
    },
    handleLikeClick: (liked) => api.changeCardStatus(item._id, liked),
    checkCardsData: () => api.getCards(),
    handleDeleteClick: (evt) => {
      confirmDelete.setEventListeners();
      confirmDelete.open(item._id, evt)
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
    renderedCard.renderSave(true);
    renderedCard.close();
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

//Confirm Delete

const confirmDelete = new PopupConfirmDelete({
  submitHandler: (card, cardId) => {
    api.deleteCard(cardId)
      .then(() => card.remove())
    confirmDelete.close();
  }
}, ".popup_type_confirm-delete");



const editFormValidator = new FormValidator(defaultFormSettings, editFormElement);
const newItemValidator = new FormValidator(defaultFormSettings, addCardForm);
const changeProfileValidator = new FormValidator(defaultFormSettings, changePictureElement)

editFormValidator.enableValidation();
newItemValidator.enableValidation();
changeProfileValidator.enableValidation();

