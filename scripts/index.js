//Modals
const popupEditForm = document.querySelector(".popup_type_edit-profile");
const popUpNewItem = document.querySelector(".popup_type_new-item");

//Button variables

const editFormSaveButton = popupEditForm.querySelector(".popup__save-btn");
const newItemSaveButton = popUpNewItem.querySelector(".popup__save-btn");
const likeBtn = document.querySelector(".card__icon");

////Open Buttons

const editProfileButton = document.querySelector(".profile__edit-btn");
const addNewPlaceButton = document.querySelector(".profile__add-button");

////Close Buttons
const closeProfileButton = popupEditForm.querySelector(".popup__close-btn");
const closeNewPlaceButton = popUpNewItem.querySelector(".popup__close-btn");

//Page Text
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__subtitle");

//Form Text
const popupName = popupEditForm.querySelector("#popup_name");
const popupTitle = popupEditForm.querySelector("#popup_title");
const newItemName = popUpNewItem.querySelector("#popup_image-title");
const newItemLink = popUpNewItem.querySelector("#popup_image-link");

//Toggle modal Window
function toggleModalWindow(modal){
  modal.classList.toggle("popup_opened");
}

//Edit Profile
editProfileButton.addEventListener("click", ()=>{
  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
  toggleModalWindow(popupEditForm);

});
//Edit Profile

editFormSaveButton.addEventListener("click", (evt)=> {
  //Save data to HTML, Close popup
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;
  toggleModalWindow(popupEditForm);
});

//Close Edit Profile 
closeProfileButton.addEventListener("click", ()=> {
  toggleModalWindow(popupEditForm);
});

//New Item Modal
addNewPlaceButton.addEventListener("click", (evt)=>{
  toggleModalWindow(popUpNewItem);
});

closeNewPlaceButton.addEventListener("click", (evt)=>{
  toggleModalWindow(popUpNewItem);
});

newItemSaveButton.addEventListener("click", (evt)=>{
  evt.preventDefault();
  
  const newCard = {
    "name": newItemName.value,
    "link": newItemLink.value
  }
  
  initialCards.push(newCard);

  toggleModalWindow(popUpNewItem);
});


const initialCards = [
  {
    name: "Yosemite Valley",
    link:"./images/kirill-pershin-1088404-unsplash.jpg"
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
    name: "Chaguaramas Bay Marina<",
    link: "./images/chag.jpg"
  },
  {
    name: "San Fernando",
    link: "./images/sando.jpg"
  }
]

//Templates
//**access content within template and clone it for each card


initialCards.forEach(data =>{
  //create card
  const cardTemplate = document.querySelector("#card-template").content; 
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardContainer = document.querySelector(".elements");
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  
  cardContainer.prepend(cardElement);
    
});