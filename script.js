let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');

let quitPopup = popup.querySelector('.popup__cross');
let enterPopup = profile.querySelector('.profile__edit-button')

let userName = profile.querySelector('.profile__name');
let userStatus = profile.querySelector('.profile__status');
let inputName = popup.querySelector('.popup__name');
let inputStatus = popup.querySelector('.popup__status');
let submitButton = popup.querySelector('.popup__form');

function popupToggle(){
    popup.classList.toggle('popup_opened')
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = inputName.value;
    userStatus.textContent = inputStatus.value;
    popupToggle();
}

quitPopup.addEventListener('click', popupToggle);
enterPopup.addEventListener('click', popupToggle);
submitButton.addEventListener('submit', handleFormSubmit);