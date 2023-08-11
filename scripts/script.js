let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');

let popupQuit = popup.querySelector('.popup__cross');
let popupEnter = profile.querySelector('.profile__edit-button')

let userName = profile.querySelector('.profile__name');
let userStatus = profile.querySelector('.profile__status');
let inputName = popup.querySelector('.popup__input_name');
let inputStatus = popup.querySelector('.popup__input_status');
let formElement = popup.querySelector('.popup__form');

function openPopup(){
    popup.classList.add('popup_opened')
}

function closePopup(){
    popup.classList.remove('popup_opened')
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = inputName.value;
    userStatus.textContent = inputStatus.value;
    closePopup();
}

popupQuit.addEventListener('click', closePopup);
popupEnter.addEventListener('click', openPopup);
formElement.addEventListener('submit', handleFormSubmit);