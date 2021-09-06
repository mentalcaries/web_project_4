import PopupConfirmDelete from "./PopupConfirmDelete.js";
import Api from "./Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-10",
  headers: {
    authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
    "Content-Type": "application/json"
  }
});

class Card {
  constructor(data, {currentUserId}, cardTemplate, { handleCardClick }) {
    this._text = data.name;
    this._link = data.link;
    this._cardId = data._id
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this.likes = data.likes;
    this.owner = data.owner
    this.deleteButton = this._cardTemplate.querySelector(".card__delete-button")
    this._ownerId = data.owner._id;
    this._currentUserId = currentUserId

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

    //Hide button if card does not belong to current user
    if (this._currentUserId === this._ownerId) {
      this.deleteButton.style.visibility = "visible";
    } else {
      this.deleteButton.style.visibility = "hidden";
    }


    deleteButton.addEventListener("click", () => {
      const confirmDelete = new PopupConfirmDelete({
        handleDelete: () => {
          api.deleteCard(this._cardId)
            .then(() => {
              this._card.remove()
            })
        }
      }, ".popup_type_confirm-delete")
      confirmDelete.setEventListeners();
      confirmDelete.open();
    })
  }

  getCard() {

    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector(".card__image");
    this._setEventListeners();
    const cardTitle = this._card.querySelector(".card__title");
    cardTitle.textContent = this._text;
    this._cardImage.src = this._link;
    this._cardImage.alt = "Picture of " + this._text;
    this._cardImage.addEventListener("click", this._handleCardClick)
    this._card.querySelector(".card__like-count").textContent = this.likes.length;

  

    return this._card;
  }
}

export default Card;
