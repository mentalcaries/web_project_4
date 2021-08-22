const popUpPicture = document.querySelector(".popup_type_picture");
const popUpPictureImage = popUpPicture.querySelector(".popup__image");
const popUpPictureCaption = popUpPicture.querySelector(".popup__caption");


const openPopup = (modal)=> {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", escHandler)

}

const closePopup = (modal)=> {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", escHandler)
}


const escHandler = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
 }


class Card {
  constructor(data, cardTemplate, {handleCardClick}) {
    this._text = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._cardTemplate.querySelector(".card").cloneNode(true);
  }

  _setEventListeners() {

    const likeButton = this._card.querySelector(".card__like-button");
    const deleteButton = this._card.querySelector(".card__delete-button");

    //Like Card
    likeButton.addEventListener("click", (evt) => {

      evt.target.classList.toggle("card__like-button_active");
    });

    //Delete Card
    deleteButton.addEventListener("click", () => {
      this._card.remove();
    })
  }

  createCard() {

    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector(".card__image");
    this._setEventListeners();
    const cardTitle = this._card.querySelector(".card__title");
    cardTitle.textContent = this._text;
    this._cardImage.src = this._link;
    this._cardImage.alt = "Picture of " + this._text;
    this._cardImage.addEventListener("click", this._handleCardClick)
    return this._card;
  }

 }

export default Card;


    // //Maximise Picture
    // this._cardImage.addEventListener("click", () => {


    //   openPopup(popUpPicture);
    //   popUpPictureImage.src = this._link;
    //   popUpPictureImage.alt = `Picture of ${this._text}`;
    //   popUpPictureCaption.textContent = this._text;
    // })