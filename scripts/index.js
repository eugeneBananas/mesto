import { FormValidator } from "./formValidator.js";
import { Card, initialCards } from "./card.js";

const popupEdit = document.querySelector('.popup_action_edit');
const popupAdd = document.querySelector('.popup_action_add');
const popupImage = document.querySelector('.popup_action_depict');
const profile = document.querySelector('.profile');
const containerWithElements = document.querySelector('.elements');
const popups = document.querySelectorAll('.popup');

const popupEditQuit = popupEdit.querySelector('.popup__cross');
const popupEditEnter = profile.querySelector('.profile__edit-button')

const popupAddQuit = popupAdd.querySelector('.popup__cross');
const popupAddEnter = profile.querySelector('.profile__add-button')

const popupImageQuit = popupImage.querySelector('.popup__cross');

const userName = profile.querySelector('.profile__name');
const userStatus = profile.querySelector('.profile__status');

const inputName = popupEdit.querySelector('.popup__input_enter_name');
const inputStatus = popupEdit.querySelector('.popup__input_enter_status');

const inputTitle = popupAdd.querySelector('.popup__input_enter_title');
const inputLink = popupAdd.querySelector('.popup__input_enter_link');

const formEditElement = popupEdit.querySelector('.popup__form');
const formAddElement = popupAdd.querySelector('.popup__form');

const illustrationIndication = popupImage.querySelector('.popup__illustration')
const hintIndication = popupImage.querySelector('.popup__hint');

function openPopup(popup){
  popup.classList.add('popup_opened');
  // popup.addEventListener("click", closePopupOverlay);
  document.addEventListener("keydown", closePopupEscape);
}

function checkAndResetButton(popup){
  const form = popup.querySelector('.popup__form');
  const formValidate = new FormValidator(parameterToConfig, form);
  formValidate.resetButton(popup.querySelector('.popup__button'));
  // popup.querySelector('.popup__button').disabled = true;
  // popup.querySelector('.popup__button').classList.add('popup__button_inactive');
};

function checkAndResetErrors(popup){
  const form = popup.querySelector('.popup__form');
  const formValidate = new FormValidator(parameterToConfig, form);
  const inputs = Array.from(form.querySelectorAll('.popup__input'));
  formValidate.resetErrors(inputs, form);
  // inputs.forEach(function(input){
  //   const errorElement = form.querySelector(`.${input.id}-error`);
  //   errorElement.textContent = '';
  //   input.classList.remove('popup__input_type_error');
  //   errorElement.classList.remove('popup__error_active');
  // });
}

function closePopup(popup){ 
  popup.classList.remove('popup_opened');
  // popup.removeEventListener("click", closePopupOverlay)
  document.removeEventListener("keydown", closePopupEscape);
}

function closePopupOverlay(evt){
  if (evt.target.classList.contains('popup')){
    closePopup(evt.target);
  }
}

function closePopupEscape(evt){
  if (evt.key === "Escape"){
    closePopup(document.querySelector('.popup_opened'));
  }
}
 
function handleFormEditSubmit(evt) { 
    evt.preventDefault(); 
    userName.textContent = inputName.value; 
    userStatus.textContent = inputStatus.value; 
    closePopup(popupEdit);
    const form = popupEdit.querySelector('.popup__form');
    const formValidate = new FormValidator(parameterToConfig, form);
    formValidate.disableButton(popupEdit.querySelector('.popup__button'));
} 

// function createCard(title, link){
//   const cardTemplate = containerWithElements.querySelector('#card').content;
//   const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
//   const heartCard = cardElement.querySelector('.elements__heart');
//   const trashCard = cardElement.querySelector('.elements__trash');
//   const textCard = cardElement.querySelector('.elements__text');
//   const imageCard = cardElement.querySelector('.elements__image');

//   textCard.textContent = title; 
//   imageCard.src = link; 
//   imageCard.alt = "На фото " + title; 
//   heartCard.addEventListener('click', function (event) {
//     event.target.classList.toggle('elements__heart_active');
//   });
//   trashCard.addEventListener('click', function (event) { 
//       const currentCard = event.target.closest('.elements__element');
//       currentCard.remove();
//   });
//   imageCard.addEventListener('click', function (event) {
//       illustrationIndication.src = imageCard.src;
//       illustrationIndication.alt = imageCard.alt;
//       hintIndication.textContent = textCard.textContent;
//       openPopup(popupImage);
//   });
//   return cardElement;
// }

function createCard(name, link, selector){
  const card = new Card(name, link, selector);
  const cardElement = card.createCard();
  return cardElement;
}

function handleFormAddSubmit(evt) { 
  evt.preventDefault();
  const card = createCard(inputTitle.value, inputLink.value, '#card');
  containerWithElements.prepend(card);
  closePopup(popupAdd);
  const form = popupEdit.querySelector('.popup__form');
  const formValidate = new FormValidator(parameterToConfig, form);
  formValidate.disableButton(popupAdd.querySelector('.popup__button'));
}

function loadCards(){
  initialCards.forEach(function(item){
    const card = createCard(item.name, item.link, '#card');
    containerWithElements.append(card);
  });
}
loadCards();

popupEditQuit.addEventListener('click', function(){closePopup(popupEdit)}); 
popupEditEnter.addEventListener('click', function(){
  inputName.value = userName.textContent; 
  inputStatus.value = userStatus.textContent;
  checkAndResetButton(popupEdit);
  checkAndResetErrors(popupEdit);
  openPopup(popupEdit);
}); 
formEditElement.addEventListener('submit', handleFormEditSubmit); 

popupAddQuit.addEventListener('click', function(){closePopup(popupAdd)}); 
popupAddEnter.addEventListener('click', function(){
  inputTitle.value = ""; 
  inputLink.value = "";
  checkAndResetButton(popupAdd);
  checkAndResetErrors(popupAdd);
  openPopup(popupAdd);
}); 
formAddElement.addEventListener('submit', handleFormAddSubmit); 

popupImageQuit.addEventListener('click', function(){closePopup(popupImage)}); 

popups.forEach(function(popup){
  popup.addEventListener("click", function(evt){closePopupOverlay(evt, popup)});
})

const parameterToConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
}

function turnOnValidation(){
  const forms = Array.from(document.querySelectorAll(parameterToConfig.formSelector));
  forms.forEach(function(form){
      const formValidate = new FormValidator(parameterToConfig, form);
      formValidate.enableValidation();
  })

};

turnOnValidation();

export { containerWithElements, illustrationIndication, hintIndication, openPopup, popupImage }