export class FormValidator {
    constructor(parameterToConfig, form){
        this._formSelector = parameterToConfig.formSelector;
        this._inputSelector = parameterToConfig.inputSelector;
        this._submitButtonSelector = parameterToConfig.submitButtonSelector;
        this._inactiveButtonClass = parameterToConfig.inactiveButtonClass;
        this._inputErrorClass = parameterToConfig.inputErrorClass;
        this._errorClass = parameterToConfig.errorClass;

        this._form = form;
      }

    _showError(inputElement, errorElement){
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideError(inputElement, errorElement){
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    }

    _checkValidity(inputElement, errorElement){
        if (inputElement.validity.valid){
            this._hideError(inputElement, errorElement);
        }
        else{
            this._showError(inputElement, errorElement);
        }
    }

    _hasInvalidInput(){
        return this.inputs.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _toggleButtonState(){
        if (this._hasInvalidInput()) {
            this._toggleEnablingButton(true);
            this.buttonSubmit.classList.add(this._inactiveButtonClass);
        } 
        else {
            this._toggleEnablingButton(false);
            this.buttonSubmit.classList.remove(this._inactiveButtonClass);
        }
    }; 

    _toggleEnablingButton(booleanValue){
        this.buttonSubmit.disabled = booleanValue;
    }

    _setEventListeners(inputElement, errorElement){
        inputElement.addEventListener('input', () => {
            this._checkValidity(inputElement, errorElement);
            this._toggleButtonState();
        });
    }

    enableValidation(){
        this.inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        this.buttonSubmit = this._form.querySelector(this._submitButtonSelector);
        this._toggleButtonState();
        this.inputs.forEach((inputElement) => {
            const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
            errorElement.textContent = "";
            this._setEventListeners(inputElement, errorElement);
        })
    }
}

// function showError(errorElement, inputElement, inputErrorClass, errorClass, errorMessage){
//     inputElement.classList.add(inputErrorClass);
//     errorElement.classList.add(errorClass);
//     errorElement.textContent = errorMessage;
// }

// function hideError(errorElement, inputElement, inputErrorClass, errorClass){
//     inputElement.classList.remove(inputErrorClass);
//     errorElement.classList.remove(errorClass);
//     errorElement.textContent = "";
// }

//Функция проверки одного инпута
// function checkValidity(errorElement, inputElement, inputErrorClass, errorClass){
//     if (inputElement.validity.valid){
//         hideError(errorElement, inputElement, inputErrorClass, errorClass);
//     }
//     else{
//         showError(errorElement, inputElement, inputErrorClass, errorClass, inputElement.validationMessage);
//     }
// }

// function hasInvalidInput(inputs){
//     return inputs.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// }

// const toggleButtonState = (inputs, buttonElement, inactiveButtonClass) => {
//     if (hasInvalidInput(inputs)) {
//         toggleEnablingButton(buttonElement, true);
//         buttonElement.classList.add(inactiveButtonClass);
//     } 
//     else {
//         toggleEnablingButton(buttonElement, false);
//         buttonElement.classList.remove(inactiveButtonClass);
//     }
// }; 

// function toggleEnablingButton(buttonElement, booleanValue){
//     buttonElement.disabled = booleanValue;
// }

// const enableValidation = (config) => {
//     const forms = Array.from(document.querySelectorAll(config.formSelector));
//     forms.forEach(function(form){
//         const inputs = Array.from(form.querySelectorAll(config.inputSelector));
//         const buttonSubmit = form.querySelector(config.submitButtonSelector);
//         toggleButtonState(inputs, buttonSubmit, config.inactiveButtonClass);
//         inputs.forEach(function(inputElement){
//             const errorElement = form.querySelector(`.${inputElement.id}-error`);
//             errorElement.textContent = "";
//             inputElement.addEventListener('input', function(){
//                 checkValidity(errorElement, inputElement, config.inputErrorClass, config.errorClass);
//                 toggleButtonState(inputs, buttonSubmit, config.inactiveButtonClass)});
//         })
//     })
// };
  
// enableValidation(parameterToConfig);