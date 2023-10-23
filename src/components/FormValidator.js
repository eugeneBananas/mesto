export default class FormValidator {
    constructor(parameterToConfig, form){
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
        return this._inputs.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _toggleButtonState(){
        if (this._hasInvalidInput()) {
            this._toggleEnablingButton(true);
            this._buttonSubmit.classList.add(this._inactiveButtonClass);
        } 
        else {
            this._toggleEnablingButton(false);
            this._buttonSubmit.classList.remove(this._inactiveButtonClass);
        }
    }; 

    _toggleEnablingButton(booleanValue){
        this._buttonSubmit.disabled = booleanValue;
    }

    _setEventListeners(inputElement, errorElement){
        inputElement.addEventListener('input', () => {
            this._checkValidity(inputElement, errorElement);
            this._toggleButtonState();
        });
    }

    disableButton(){
        this._toggleEnablingButton(true);
    }

    resetButton(){
        this.disableButton();
        this._buttonSubmit.classList.add(this._inactiveButtonClass);
    }

    resetErrors(){ 
        this._inputs.forEach((input) => { 
            const errorElement = this._form.querySelector(`.${input.id}-error`); 
            this._hideError(input, errorElement) 
        }); 
    }

    enableValidation(){
        this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._form.querySelector(this._submitButtonSelector);
        this._toggleButtonState();
        this._inputs.forEach((inputElement) => {
            const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
            errorElement.textContent = "";
            this._setEventListeners(inputElement, errorElement);
        })
    }
}
