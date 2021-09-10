class Card {
  constructor(data, { currentUserId }, cardTemplate, { handleCardClick, handleLikeClick, checkCardsData, handleDeleteClick }) {
    this._cardData = data;
    this._text = data.name;
    this._link = data.link;
    this._cardId = data._id
    this.likes = data.likes;
    this.owner = data.owner
    this._cardTemplate = cardTemplate;
    this.deleteButton = this._cardTemplate.querySelector(".card__delete-button")
    this._ownerId = data.owner._id;
    this._currentUserId = currentUserId;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._checkCardsData = checkCardsData;
    this._handleDeleteClick = handleDeleteClick;
  }


  _getTemplate() {
    return this._cardTemplate.querySelector(".card").cloneNode(true);
  }


  _checkLikeStatus() {
    const isLiked = this.likes.some((like) => like._id === this._currentUserId);
    return isLiked;
  }


  _showLikeStatus() {
    this._countLikes();
    if (this._checkLikeStatus()) {
      this._card.querySelector(".card__like-button").classList.add("card__like-button_active")
    }
  }


  _countLikes() {
    this._card.querySelector(".card__like-count").textContent = this.likes.length;
  }

  _updateLikes(card) {
    this._card.querySelector(".card__like-count").textContent = card.likes.length;
  }


  _setEventListeners() {
    const likeButton = this._card.querySelector(".card__like-button");
    const deleteButton = this._card.querySelector(".card__delete-button");

    //Like Card

    likeButton.addEventListener("click", (evt) => {
      this._handleLikeClick(evt.target.classList.contains("card__like-button_active"))
        .then((card) => {
          evt.target.classList.toggle("card__like-button_active")
          this._updateLikes(card);
        })
        .catch((err)=>console.log(`Something went wrong: ${err}`))
    });

    //Hide button if card does not belong to current user
    if (this._currentUserId === this._ownerId) {
      this.deleteButton.style.visibility = "visible";
    } else {
      this.deleteButton.style.visibility = "hidden";
    }


    deleteButton.addEventListener("click", (evt) => {
        this._handleDeleteClick(evt)
    })
  }


  getCard() {

    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector(".card__image");
    this._setEventListeners();
    this._showLikeStatus();
    const cardTitle = this._card.querySelector(".card__title");
    cardTitle.textContent = this._text;
    this._cardImage.src = this._link;
    this._cardImage.alt = "Picture of " + this._text;
    this._cardImage.addEventListener("click", this._handleCardClick)



    return this._card;
  }
}

export default Card;
