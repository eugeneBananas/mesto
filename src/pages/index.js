import '../pages/index.css';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import {parameterToConfig, initialCards, popupEdit, popupEditEnter, popupAddEnter, inputName, inputStatus, formEditPopup, formAddPopup} from "../scripts/Constant.js";

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
});
popupWithFormProfile.setEventListeners();
popupWithFormCreate.setEventListeners();;
popupWithImage.setEventListeners();

popupEditEnter.addEventListener('click', function(){
  const { name, info } = userInfo.getUserInfo();
  inputName.value = name;
  inputStatus.value = info;
  const form = popupEdit.querySelector('.popup__form');
  formValidateEditPopup.resetButton();
  formValidateEditPopup.resetErrors(popupWithFormProfile._inputs, popupWithFormProfile._popup);
  popupWithFormProfile.open();
});

popupAddEnter.addEventListener("click", () => {
  popupWithFormCreate.open();
  formValidateAddPopup.resetButton();
  formValidateAddPopup.resetErrors(popupWithFormCreate._inputs, popupWithFormCreate._popup);
});


function createCard(title, link, selector){
  const card = new Card(title, link, selector, popupWithImage.open.bind(popupWithImage));
  const cardElement = card.createCard();
  return cardElement;
}

function prependCard(card){
  section.addItemPrepend(card);
}

const formValidateEditPopup = new FormValidator(parameterToConfig, formEditPopup);
const formValidateAddPopup = new FormValidator(parameterToConfig, formAddPopup);

formValidateEditPopup.enableValidation();
formValidateAddPopup.enableValidation();