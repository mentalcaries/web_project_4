import Popup from "./Popup.js";

class PopupConfirmDelete extends Popup {
  constructor({submitHandler}, popupSelector) {
    super(popupSelector);
    this._submitButton = this._popupElement.querySelector(".popup__save-btn");
    this._submitHandler = submitHandler;
  }

  open(cardId,evt){
    this._submitButton.textContent = this._submitButton.name;
    this._card = evt.target.parentElement;
    this._cardId = cardId;
    super.open()
  }

  setEventListeners() {
    this._submitButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = "Deleting...";
      this._submitHandler(this._card, this._cardId);

    });
    super.setEventListeners();
  }
}

export default PopupConfirmDelete;