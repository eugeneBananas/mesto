const parameterToConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
}

function showError(errorElement, inputElement, inputErrorClass, errorClass, errorMessage){
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
}

function hideError(errorElement, inputElement, inputErrorClass, errorClass){
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
}

//Функция проверки одного инпута
function checkValidity(errorElement, inputElement, inputErrorClass, errorClass){
    if (inputElement.validity.valid){
        hideError(errorElement, inputElement, inputErrorClass, errorClass);
    }
    else{
        showError(errorElement, inputElement, inputErrorClass, errorClass, inputElement.validationMessage);
    }
}

function hasInvalidInput(inputs){
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputs, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
        toggleEnablingButton(buttonElement, true);
        buttonElement.classList.add(inactiveButtonClass);
    } 
    else {
        toggleEnablingButton(buttonElement, false);
        buttonElement.classList.remove(inactiveButtonClass);
    }
}; 

function toggleEnablingButton(buttonElement, booleanValue){
    buttonElement.disabled = booleanValue;
}

const enableValidation = (config) => {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach(function(form){
        const inputs = Array.from(form.querySelectorAll(config.inputSelector));
        const buttonSubmit = form.querySelector(config.submitButtonSelector);
        toggleButtonState(inputs, buttonSubmit, config.inactiveButtonClass);
        inputs.forEach(function(inputElement){
            const errorElement = form.querySelector(`.${inputElement.id}-error`);
            errorElement.textContent = "";
            inputElement.addEventListener('input', function(){
                checkValidity(errorElement, inputElement, config.inputErrorClass, config.errorClass);
                toggleButtonState(inputs, buttonSubmit, config.inactiveButtonClass)});
        })
    })
};
  
enableValidation(parameterToConfig);