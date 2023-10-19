import '../pages/index.css';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import {parameterToConfig, initialCards, popupEdit, profile, popupEditEnter, popupAddEnter, inputName, inputStatus, userName, userStatus, formEditPopup, formAddPopup, containerWithElements} from "../scripts/Constant.js";

const userInfo = new UserInfo({ elementName: ".profile__name", elementInfo: ".profile__status"});
const popupWithImage = new PopupWithImage('.popup_action_depict');

const section = new Section({
  items: initialCards,
  renderer: (card) => createCard(card.name, card.link, '#card')
}, '.elements')
section.renderItems();

const popupWithFormProfile = new PopupWithForm('.popup_action_edit', (data) => {userInfo.setUserInfo(data['popup-edit__input-name'], data['popup-edit__input-status'])});
const popupWithFormCreate = new PopupWithForm('.popup_action_add', (data) => {
  prependCard(createCard(data['popup-add__input-title'], data['popup-add__input-link'], '#card'));
  console.log(data);
});
popupWithFormProfile.setEventListeners();
popupWithFormCreate.setEventListeners();;
popupWithImage.setEventListeners();

popupEditEnter.addEventListener('click', function(){
  inputName.value = userName.textContent; 
  inputStatus.value = userStatus.textContent;
  const form = popupEdit.querySelector('.popup__form');
  formValidateEditPopup.resetButton(form.querySelector('.popup__button'));
  popupWithFormProfile.open();
});

popupAddEnter.addEventListener("click", () => popupWithFormCreate.open());

function createCard(title, link, selector){
  console.log(popupWithImage._popup);
  const card = new Card(title, link, selector, popupWithImage.open);
  const cardElement = card.createCard();
  return cardElement;
}

function prependCard(card){
  containerWithElements.prepend(card);
}

const formValidateEditPopup = new FormValidator(parameterToConfig, formEditPopup);
const formValidateAddPopup = new FormValidator(parameterToConfig, formAddPopup);

formValidateEditPopup.enableValidation();
formValidateAddPopup.enableValidation();


// const popupImage = document.querySelector('.popup_action_depict');
// const containerWithElements = document.querySelector('.elements');
// const popups = document.querySelectorAll('.popup');

// const popupAddQuit = popupAdd.querySelector('.popup__cross');

// const popupImageQuit = popupImage.querySelector('.popup__cross');

// const inputTitle = popupAdd.querySelector('.popup__input_enter_title');
// const inputLink = popupAdd.querySelector('.popup__input_enter_link');

// const formEditElement = popupEdit.querySelector('.popup__form');
// const formAddElement = popupAdd.querySelector('.popup__form');

// const illustrationIndication = popupImage.querySelector('.popup__illustration');
// const hintIndication = popupImage.querySelector('.popup__hint');

// const formEditPopup = document.querySelector('form[name="popup-edit"]');
// const formAddPopup = document.querySelector('form[name="popup-add"]');

// function openPopup(popup){
//   popup.classList.add('popup_opened');
//   // popup.addEventListener("click", closePopupOverlay);
//   document.addEventListener("keydown", closePopupEscape);
// }

// function checkAndResetButton(popup, formClass){
//   const form = popup.querySelector('.popup__form');
//   formClass.resetButton(form.querySelector('.popup__button'));
//   // popup.querySelector('.popup__button').disabled = true;
//   // popup.querySelector('.popup__button').classList.add('popup__button_inactive');
// };

// function checkAndResetErrors(popup, formClass){
//   const form = popup.querySelector('.popup__form');
//   const inputs = Array.from(form.querySelectorAll('.popup__input'));
//   formClass.resetErrors(inputs, popup);
//   // inputs.forEach(function(input){
//   //   const errorElement = form.querySelector(`.${input.id}-error`);
//   //   errorElement.textContent = '';
//   //   input.classList.remove('popup__input_type_error');
//   //   errorElement.classList.remove('popup__error_active');
//   // });
// }

// function closePopup(popup){ 
//   popup.classList.remove('popup_opened');
//   // popup.removeEventListener("click", closePopupOverlay)
//   document.removeEventListener("keydown", closePopupEscape);
// }

// function closePopupOverlay(evt){
//   if (evt.target.classList.contains('popup')){
//     closePopup(evt.target);
//   }
// }

// function closePopupEscape(evt){
//   if (evt.key === "Escape"){
//     closePopup(document.querySelector('.popup_opened'));
//   }
// }
 
// function handleFormEditSubmit(evt) { 
//     evt.preventDefault(); 
//     userName.textContent = inputName.value; 
//     userStatus.textContent = inputStatus.value; 
//     closePopup(popupEdit);
//     formValidateEditPopup.disableButton(popupEdit.querySelector('.popup__button'));
// } 

// // function createCard(title, link){
// //   const cardTemplate = containerWithElements.querySelector('#card').content;
// //   const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
// //   const heartCard = cardElement.querySelector('.elements__heart');
// //   const trashCard = cardElement.querySelector('.elements__trash');
// //   const textCard = cardElement.querySelector('.elements__text');
// //   const imageCard = cardElement.querySelector('.elements__image');

// //   textCard.textContent = title; 
// //   imageCard.src = link; 
// //   imageCard.alt = "На фото " + title; 
// //   heartCard.addEventListener('click', function (event) {
// //     event.target.classList.toggle('elements__heart_active');
// //   });
// //   trashCard.addEventListener('click', function (event) { 
// //       const currentCard = event.target.closest('.elements__element');
// //       currentCard.remove();
// //   });
// //   imageCard.addEventListener('click', function (event) {
// //       illustrationIndication.src = imageCard.src;
// //       illustrationIndication.alt = imageCard.alt;
// //       hintIndication.textContent = textCard.textContent;
// //       openPopup(popupImage);
// //   });
// //   return cardElement;
// // }

// function createCard(name, link, selector){
//   const card = new Card(name, link, selector);
//   const cardElement = card.createCard();
//   return cardElement;
// }

// function handleFormAddSubmit(evt) { 
//   evt.preventDefault();
//   const card = createCard(inputTitle.value, inputLink.value, '#card');
//   containerWithElements.prepend(card);
//   closePopup(popupAdd);
//   formValidateAddPopup.disableButton(popupAdd.querySelector('.popup__button'));
// }

// function loadCards(){
//   initialCards.forEach(function(item){
//     const card = createCard(item.name, item.link, '#card');
//     containerWithElements.append(card);
//   });
// }
// loadCards();

// popupEditQuit.addEventListener('click', function(){closePopup(popupEdit)}); 
// popupEditEnter.addEventListener('click', function(){
//   inputName.value = userName.textContent; 
//   inputStatus.value = userStatus.textContent;
//   checkAndResetButton(popupEdit, formValidateEditPopup);
//   checkAndResetErrors(popupEdit, formValidateEditPopup);
//   openPopup(popupEdit);
// }); 
// formEditElement.addEventListener('submit', handleFormEditSubmit); 

// popupAddQuit.addEventListener('click', function(){closePopup(popupAdd)}); 
// popupAddEnter.addEventListener('click', function(){
//   inputTitle.value = ""; 
//   inputLink.value = "";
//   checkAndResetButton(popupAdd, formValidateAddPopup);
//   checkAndResetErrors(popupAdd, formValidateAddPopup);
//   openPopup(popupAdd);
// }); 
// formAddElement.addEventListener('submit', handleFormAddSubmit); 

// popupImageQuit.addEventListener('click', function(){closePopup(popupImage)}); 

// popups.forEach(function(popup){
//   popup.addEventListener("click", function(evt){closePopupOverlay(evt, popup)});
// })

// export { containerWithElements, illustrationIndication, hintIndication, openPopup, popupImage }