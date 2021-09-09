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
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());


    });
    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
    //modify to reset the form once popup is closed
  }

}

export default PopupWithForm;