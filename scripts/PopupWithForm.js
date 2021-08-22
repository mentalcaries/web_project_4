import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ submitFormHandler }, popupSelector) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__field");
    this._inputValues = {};
    this._inputList.forEach(input => this._inputValues[input.name] = input.value);

    return this._inputValues;
  }

  setEventListeners() {
    //add click event listener to the close icon
    //add submit event handler to submit button
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
      this.close(evt.target);

    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._popupForm.reset();
    //modify to reset the form once popup is closed
  }

}

export default PopupWithForm;