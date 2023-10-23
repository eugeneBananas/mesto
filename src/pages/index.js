import '../pages/index.css';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {parameterToConfig, initialCards, popupEdit, popupEditEnter, popupAddEnter, inputName, inputStatus, formEditPopup, formAddPopup, formAvatarPopup, popupAvatarEnter} from "../scripts/Constant.js";

const userInfo = new UserInfo({ elementName: ".profile__name", elementInfo: ".profile__status", elementAvatar: ".profile__avatar"});
const popupWithImage = new PopupWithImage('.popup_action_depict');

const api = new Api((card, flag) => createCard(card.name, card.link, '#card', card.likes, card._id, flag), '.elements');

const popupWithFormProfile = new PopupWithForm('.popup_action_edit', 
(data) => {setLoading(1, 'popup-edit__input-button'); api.editProfile(data['popup-edit__input-name'], data['popup-edit__input-status'])
  .then((profileInfo) => {
    userInfo.setUserInfo(profileInfo.name, profileInfo.about, profileInfo.avatar);
  })
  .finally( () => {
    setLoading(0, 'popup-edit__input-button');
  })}
);

const popupWithFormCreate = new PopupWithForm('.popup_action_add', (data) => {
  setLoading(3, 'popup-add__input-button');
  prependCard(createCard(data['popup-add__input-title'], data['popup-add__input-link'], '#card', [], 1));
  api.addCard(data['popup-add__input-title'], data['popup-add__input-link'], profileId, userInfo.getUserInfo())
  .finally( () => {
    setLoading(2, 'popup-add__input-button');
  })}
);
const popupWithFormDelete = new PopupWithForm('.popup_action_delete', 
  ({}, evt) => { setLoading(1, 'popup-delete__input-button');
    console.log(evt);
    evt.target.closest('.elements__element').remove();
    setLoading(0, 'popup-delete__input-button');
});
const popupWithFormAvatar = new PopupWithForm('.popup_action_vary', (data) => {
  setLoading(3, 'popup-vary__input-button');
  api.changeAvatar(data['popup-vary__input-url'])
  .then((data) => {
    userInfo.setAvatar(data.avatar);
  })
  .finally( () => {
    setLoading(2, 'popup-vary__input-button');
  }
  )
});
  
popupWithFormProfile.setEventListeners();
popupWithFormCreate.setEventListeners();;
popupWithFormDelete.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithImage.setEventListeners();

popupEditEnter.addEventListener('click', function(){
  const { name, info } = userInfo.getUserInfo();
  inputName.value = name;
  inputStatus.value = info;
  const form = popupEdit.querySelector('.popup__form');
  formValidateEditPopup.resetButton();
  formValidateEditPopup.resetErrors();
  popupWithFormProfile.open();
});

popupAddEnter.addEventListener("click", () => {
  popupWithFormCreate.open();
  formValidateAddPopup.resetButton();
  formValidateAddPopup.resetErrors();
});

popupAvatarEnter.addEventListener("click", () => {
  popupWithFormAvatar.open();
  formValidateAvatarPopup.resetButton();
  formValidateAvatarPopup.resetErrors();
});

function createCard(title, link, selector, likes, id, flag){
  const card = new Card(title, link, selector, popupWithImage.open.bind(popupWithImage), 
  likes, popupWithFormDelete.open.bind(popupWithFormDelete), 
  // api.likeCard(id), api.unlikeCard(id),
  flag
  // const target = evt.target;
  // const setEventListenerDelete = () => {this._deleteCards(target)};
  // popupWithFormDelete.addEventListener('submit', () => {setEventListenerDelete()});
  // const _closeButton = popupWithFormDelete.querySelector('.popup__cross');
  // _closeButton.removeEventListener('submit', () => {setEventListenerDelete()});
);
  const cardElement = card.createCard();
  return cardElement;
}

function setLoading(flag, Name){
  const button = document.getElementsByName(Name);
  switch(flag){
  case 0:
      button.textContent = "Сохранение..."
  case 1:
      button.textContent = "Сохранить"
  case 2:
      button.textContent = "Создание..."
  case 2:
      button.textContent = "Создать"
}
}

const section = new Section({
  items: initialCards,
  renderer: (card) => createCard(card.name, card.link, '#card', popupWithImage.open.bind(popupWithImage), card.likes, popupWithFormDelete.open.bind(popupWithFormDelete), 1)
}, '.elements')

function prependCard(card){
  section.addItemPrepend(card);
}

const formValidateEditPopup = new FormValidator(parameterToConfig, formEditPopup);
const formValidateAddPopup = new FormValidator(parameterToConfig, formAddPopup);
const formValidateAvatarPopup = new FormValidator(parameterToConfig, formAvatarPopup);

formValidateEditPopup.enableValidation();
formValidateAddPopup.enableValidation();
formValidateAvatarPopup.enableValidation();

let profileId = '';

api.getProfileInfo()
  .then((profileInfo) => {
    profileId = profileInfo._id;
    userInfo.setUserInfo(profileInfo.name, profileInfo.about);
})

api.loadCards();