function showErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}){
  const error = document.querySelector(`#${input.id}-error`)
  error.textContent = input.validationMessage;
  
  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

function hideErrorMessage (input, form, {errorClass, inputErrorClass, ...rest}){
  const error = document.querySelector(`#${input.id}-error`)
  error.textContent = "";

  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

function toggleButtonState(inputs, button, {inactiveButtonClass, ...rest}){
  const isValid = inputs.every((input) => input.validity.valid);
  if (isValid){
    button.classList.remove(inactiveButtonClass)
    button.disabled = false;
  }
  else{
    button.classList.add(inactiveButtonClass)
    button.disabled = true;
  }
}


function checkInputValidity(input, form, rest){
  if (input.validity.valid){
    hideErrorMessage(input, form, rest);
  }
  else showErrorMessage(input, form, rest);

}



function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form)=> {
    form.addEventListener("submit", evt => {
      evt.preventDefault();
    });
    //for each form, select the input fields and button
    //If input is invalid, display error message and make submit button inactive.
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);
    toggleButtonState(inputs, button, rest);
    

    inputs.forEach((input)=>{
      input.addEventListener("input", ()=>{
        //Check input validity
        checkInputValidity(input, form, rest)
        //toggle button state
        toggleButtonState(inputs, button, rest);

      })
    })
  })
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__error_visible"
});