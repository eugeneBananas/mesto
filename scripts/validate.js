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
      buttonElement.classList.add('popup__button_inactive');
    } 
    else {
        buttonElement.classList.remove('popup__button_inactive');
    }
};

function resetButton(form){
    const button = form.querySelector('.popup__button');
    button.classList.add('popup__button_inactive');
}

function resetErrors(form){
    const inputs = Array.from(form.querySelectorAll('.popup__input'));
    inputs.forEach(function(inputElement){
        const errorElement = form.querySelector(`.${inputElement.id}-error`);
        hideError(errorElement, inputElement);
    })
}

//Функция проверки одной формы
function goThroughForm(form){
    const inputs = Array.from(form.querySelectorAll('.popup__input'));
    toggleButtonState(inputs, form.querySelector('.popup__button'));
    inputs.forEach(function(inputElement){
        const errorElement = form.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = "";
        inputElement.addEventListener('input', function(){
            checkValidity(errorElement, inputElement);
            toggleButtonState(inputs, form.querySelector('.popup__button'))});
    })
};

//Функция проверки всех форм
function goThroughDocument(){
    const forms = Array.from(document.querySelectorAll('.popup__form'));
    forms.forEach(function(form){
        goThroughForm(form);
        form.addEventListener("submit", function(){
            resetButton(form);
        })
        const cross = form.closest('.popup__container').querySelector('.popup__cross');
        cross.addEventListener("click", function(){
            resetButton(form);
            resetErrors(form);
        })
    })
}
goThroughDocument();