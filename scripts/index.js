//Modals
const popupEditForm = document.querySelector(".popup_type_edit-profile");
const popUpNewItem = document.querySelector(".popup_type_new-item");

//Button variables

const editFormSaveButton = popupEditForm.querySelector(".popup__save-btn");
const newItemSaveButton = popUpNewItem.querySelector(".popup__form");


const popUpPicture = document.querySelector(".popup_type_picture");
const popUpPictureImage = popUpPicture.querySelector(".popup__image");
const popUpPictureCaption = popUpPicture.querySelector(".popup__caption");


////Open Buttons

const editProfileButton = document.querySelector(".profile__edit-btn");
const addNewPlaceButton = document.querySelector(".profile__add-button");

////Close Buttons
const closeProfileButton = popupEditForm.querySelector(".popup__close-btn");
const closeNewPlaceButton = popUpNewItem.querySelector(".popup__close-btn");
const popUpPictureCloseButton = popUpPicture.querySelector(".popup__close-btn")

//Page Text
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__subtitle");

//Form Text
const popupName = popupEditForm.querySelector("#popup_name");
const popupTitle = popupEditForm.querySelector("#popup_title");
const newItemName = popUpNewItem.querySelector("#popup_image-title");
const newItemLink = popUpNewItem.querySelector("#popup_image-link");

// //Toggle modal Window
// function toggleModalWindow(modal){
//   modal.classList.toggle("popup_opened"); 
// }

//Open Modal 
function openModal(modal){
  modal.closest(".popup").classList.add("popup_opened");
  modal.closest(".popup").style.animation = "fade-in 250ms forwards";
  
}

//Close Modal
function closeModal(modal){
  modal.closest(".popup").style.animation = "fade-out 250ms forwards";
  modal.addEventListener("animationend", ()=>{
    modal.classList.remove("popup_opened");
    modal.removeEventListener("animationend",closeModal(modal));
  })
}

//Close Modal Window
// function closeModalWindow(modal){
//   modal.classList.add("popup_animate")
//   addEventListener("animationend", ()=>{
//     modal.classList.remove("popup_animate");
//     modal.classList.remove("popup_opened");    
//     modal.removeEventListener("animationend", closeModalWindow(modal));
//   });
// }

//Edit Profile
  editProfileButton.addEventListener("click", ()=>{
  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent;
  openModal(popupEditForm);

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
  closeModal(popupEditForm);
});

//New Item Modal
////Click add button
addNewPlaceButton.addEventListener("click", (evt)=>{
  toggleModalWindow(popUpNewItem);
});

////Close Form

closeNewPlaceButton.addEventListener("click", (evt)=>{
 
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
const cardTemplate = document.querySelector("#card-template").content;

function createCard(data){
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardTitle.textContent = data.name;
  cardImage.src = data.link;  
  cardContainer.prepend(cardElement);
  
  //Toggle like button
  likeButton.addEventListener("click", (evt)=>{
    evt.target.classList.toggle("card__like-button_active");
  });

  //Delete Card
  deleteButton.addEventListener("click", ()=>{
    cardElement.remove();    
  })

  //Maximise Picture
  cardImage.addEventListener("click", ()=>{
  popUpPicture.classList.add("popup_opened");
  popUpPictureImage.src = data.link;
  popUpPictureCaption.textContent = data.name;
  })

  //Close Picture
  popUpPictureCloseButton.addEventListener("click", ()=>{
  popUpPicture.classList.remove("popup_opened");
  })
  return cardElement;
}

//Create Initial Card Section
initialCards.forEach(createCard);


//New Item Modal - Add New Image Card

newItemSaveButton.addEventListener("submit", (evt)=>{
  evt.preventDefault();
  
  const newCard = {
    "name": newItemName.value,
    "link": newItemLink.value
  }
  
  initialCards.push(newCard);
  createCard(newCard);
  toggleModalWindow(popUpNewItem);
  popUpNewItem.querySelector(".popup__form").reset();
  
});



//picture popup
//image src should = data.link
//image caption = data.name