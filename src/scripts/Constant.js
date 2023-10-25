export {parameterToConfig, popupEdit, popupEditEnter, popupAddEnter, inputName, inputStatus, userName, userStatus, formEditPopup, formAddPopup, formAvatarPopup, popupAvatarEnter, container};

const parameterToConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
}

const popupEdit = document.querySelector('.popup_action_edit');
const profile = document.querySelector('.profile');
const container = document.querySelector('.elements');
const popupEditEnter = profile.querySelector('.profile__edit-button')
const popupAddEnter = profile.querySelector('.profile__add-button');
const popupAvatarEnter = profile.querySelector('.profile__edit-avatar')
const inputName = popupEdit.querySelector('.popup__input_enter_name');
const inputStatus = popupEdit.querySelector('.popup__input_enter_status');
const userName = profile.querySelector('.profile__name');
const userStatus = profile.querySelector('.profile__status');
const formEditPopup = document.querySelector('form[name="popup-edit"]');
const formAddPopup = document.querySelector('form[name="popup-add"]');
const formAvatarPopup = document.querySelector('form[name="popup-vary"]');