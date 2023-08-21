function showError(errorElement, inputElement, errorMessage){
    inputElement.classList.add('popup__input_type_error');
    errorElement.classList.add('popup__error_active');
    errorElement.textContent = errorMessage;
}

function hideError(errorElement, inputElement){
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__error_active');
    errorElement.textContent = "";
}

//Функция проверки одного инпута
function checkValidity(errorElement, inputElement){
    if (inputElement.validity.valid){
        hideError(errorElement, inputElement);
    }
    else{
        showError(errorElement, inputElement, inputElement.validationMessage);
    }
}

function hasInvalidInput(inputs){
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputs, buttonElement) => {
    if (hasInvalidInput(inputs)) {
        toggleEnablingButton(buttonElement, true);
        buttonElement.classList.add('popup__button_inactive');
    } 
    else {
        toggleEnablingButton(buttonElement, false);
        buttonElement.classList.remove('popup__button_inactive');
    }
}; 

function toggleEnablingButton(buttonElement, booleanValue){
    buttonElement.disabled = booleanValue;
}

//Функция проверки одной формы
function goThroughForm(form){
    const inputs = Array.from(form.querySelectorAll('.popup__input'));
    const buttonSubmit = form.querySelector('.popup__button');
    toggleButtonState(inputs, buttonSubmit);
    inputs.forEach(function(inputElement){
        const errorElement = form.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = "";
        inputElement.addEventListener('input', function(){
            checkValidity(errorElement, inputElement);
            toggleButtonState(inputs, buttonSubmit)});
    })
};

const enableValidation = () => {
    const forms = Array.from(document.querySelectorAll('.popup__form'));
    forms.forEach(function(form){
        goThroughForm(form);
    })
};
  
enableValidation();