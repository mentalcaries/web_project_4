const popUpPicture = document.querySelector(".popup_type_picture");
const popUpPictureImage = popUpPicture.querySelector(".popup__image");
const popUpPictureCaption = popUpPicture.querySelector(".popup__caption");
const cardImage = document.querySelector(".card__image");
const activePopup = document.querySelector(".popup_opened");
class Card {
  constructor(data, cardTemplate) {
    this._text = data.name;
    this._link = data.link;

    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    return this._cardTemplate.querySelector(".card").cloneNode(true);
  }


  _openPopup(modal) {
    modal.classList.add("popup_opened");

    document.addEventListener("keydown", this._escHandler)

  }

  _closePopup(modal) {
    modal.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._escHandler)
  }

  _escHandler(evt) {
    if (evt.key === "Escape") {
      
      activePopup.classList.remove("popup_opened");
    }
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

    //Maximise Picture
    this._cardImage.addEventListener("click", () => {


      this._openPopup(popUpPicture);
      popUpPictureImage.src = this._link;
      popUpPictureImage.alt = `Picture of ${this._text}`;
      popUpPictureCaption.textContent = this._text;
    })

  }

  createCard() {

    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector(".card__image");
    this._setEventListeners();

    const cardTitle = this._card.querySelector(".card__title");
    // const cardImage = this._card.querySelector(".card__image");
    cardTitle.textContent = this._text;
    this._cardImage.src = this._link;
    this._cardImage.alt = "Picture of " + this._text;

    return this._card;
  }


}

export default Card;
