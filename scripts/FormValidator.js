class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }



  _toggleButtonState(button) {
    const inputsArr = Array.from(this._form.querySelectorAll(this._inputSelector));
    const isValid = inputsArr.every((input) => input.validity.valid);
    

    if (isValid) {
      button.classList.remove(this._inactiveButtonClass)
      button.disabled = false;
    }
    else {
      button.classList.add(this._inactiveButtonClass)
      button.disabled = true;
    }
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
    const inputField = this._form.querySelector(this._inputSelector);
    if (inputField.validity.valid) {
      this._hideErrorMessage(input);
    }
    else this._showErrorMessage(input);
  }

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    const button = this._form.querySelector(this._submitButtonSelector);


    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(button);

      })
    })
  }



  enableValidation() {
    const button = this._form.querySelector(this._submitButtonSelector);
    this._form.addEventListener("submit", evt => {
      evt.preventDefault();

    });

    this._setEventListeners();
    this._toggleButtonState(button);

  }
}

export default FormValidator;
