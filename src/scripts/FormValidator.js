class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
  }



  _toggleButtonState(button) {
     const isValid = this._inputList.every((input) => input.validity.valid);


    if (isValid) {
      button.classList.remove(this._inactiveButtonClass)
      button.disabled = false;
    }
    else {
      button.classList.add(this._inactiveButtonClass)
      button.disabled = true;
    }
  }

  _resetValidation(button) {

    this._toggleButtonState(button);
    this._inputList.forEach((input) => {
      this._hideErrorMessage(input);
    })
  }

  _showErrorMessage(input) {

    const error = this._form.querySelector(`#${input.id}-error`)
    error.textContent = input.validationMessage;

    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }


  _hideErrorMessage(input) {
    const error = this._form.querySelector(`#${input.id}-error`)
    error.textContent = " ";

    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input);
    }
    else this._showErrorMessage(input);
  }

  _setEventListeners() {

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(this._button);

      })
    })
  }



  enableValidation() {

    this._form.addEventListener("submit", evt => {
      evt.preventDefault();
      this._resetValidation(this._button);
    });

    this._setEventListeners();
    this._toggleButtonState(this._button);

  }
}

export default FormValidator;
