//Button variables
let popupForm = document.querySelector(".popup");
let editBtn = document.querySelector(".profile__edit-btn");
let closeBtn = document.querySelector(".popup__close-btn");
let saveBtn = document.querySelector(".popup__save-btn");
let likeBtn = document.querySelector(".card__icon");

//Page Text
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__subtitle");

//Form Text
let popupName = document.querySelector("#popup_name");
let popupTitle = document.querySelector("#popup_title");

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

// On form opening:
// Form text fields should have values from HTML input
// profile__name === popupName 
// profile__title === popupTitle

//On form saving:
//    Text from form fields should be added back to HTML
  // popupName = profile__name
  // popUptitle = profile__title
