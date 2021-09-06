import Popup from "./Popup.js";

class PopupConfirmDelete extends Popup {
  constructor({ handleDelete }, popupSelector) {
    super(popupSelector);
    this._handleDelete = handleDelete;
    this._submitButton = this._popupElement.querySelector(".popup__save-btn");
  }

  setEventListeners() {
    //add click event listener to the close icon
    //add submit event handler to submit button
    this._submitButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleDelete();
      this.close();

    });
    super.setEventListeners();
  }
}

export default PopupConfirmDelete;