//Button variables
const popupForm = document.querySelector(".popup");
const editBtn = document.querySelector(".profile__edit-btn");
const closeBtn = document.querySelector(".popup__close-btn");
const saveBtn = document.querySelector(".popup__save-btn");
const likeBtn = document.querySelector(".card__icon");

const popUpNewItem = document.querySelector(".popup_type_new-item");


//Page Text
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__subtitle");

//Form Text
const popupName = document.querySelector("#popup_name");
const popupTitle = document.querySelector("#popup_title");

//Show and hide popup
function showPopup() {
  popupForm.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
}

//Hide popup 
function hidePopup() {
  popupForm.classList.remove('popup_opened');
}

//Save data to HTML, Close popup
function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;
  hidePopup();
}


editBtn.addEventListener("click", showPopup);
closeBtn.addEventListener("click", hidePopup);
saveBtn.addEventListener("click", saveInfo);

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