class Card {
  constructor(data, cardTemplate, { handleCardClick }) {
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

  getCard() {

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
