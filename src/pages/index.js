import '../pages/index.css';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupConfirm from "../components/PopupConfirm.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import api from '../components/Api.js';
import {parameterToConfig, 
        popupEdit, 
        popupEditEnter, 
        popupAddEnter, 
        inputName, 
        inputStatus, 
        formEditPopup, 
        formAddPopup, 
        formAvatarPopup, 
        popupAvatarEnter,
        container
        } from "../scripts/Constant.js";

const userInfo = new UserInfo({ elementName: ".profile__name", elementInfo: ".profile__status", elementAvatar: ".profile__avatar"});
const popupWithImage = new PopupWithImage('.popup_action_depict');

const popupWithFormProfile = new PopupWithForm('.popup_action_edit', (data) => {
  setLoading("Сохранение...", 'popup-edit__input-button');
  api.editProfile(data['popup-edit__input-name'], data['popup-edit__input-status'])
    .then((profileInfo) => {
      userInfo.setUserInfo(profileInfo.name, profileInfo.about, profileInfo.avatar);
      popupWithFormProfile.close();
    })
    .catch(err => 
      console.log(`Ошибка.....: ${err}`)
    )
    .finally(() => {
      setLoading("Сохранить", 'popup-edit__input-button');
    });
});

const popupWithFormCreate = new PopupWithForm('.popup_action_add', (data) => {
  setLoading("Создание...", 'popup-add__input-button');
  api.addCard(data['popup-add__input-title'], data['popup-add__input-link'])
  .then((res) => {
    popupWithFormCreate.close();
    prependCard(createCard({title: res.name, 
                          link: res.link, 
                          selector: '#card', 
                          likes: res.likes,
                          id: res._id,
                          ownerId: profileId}))})
  .catch(err => 
    console.log(`Ошибка.....: ${err}`)
  )
  .finally(() => {
    setLoading("Создать", 'popup-add__input-button');
})})

const popupWithFormDelete = new PopupConfirm('.popup_action_delete', 
  (cardId) => {
    api.deleteCard(cardId)
      .then(() => {
        popupWithFormDelete._card.removeCard();
        popupWithFormDelete._card = null;
        popupWithFormDelete.close();
    })
    .catch((error) => {
        console.log(error);
    })
  }
)

const popupWithFormAvatar = new PopupWithForm('.popup_action_vary', (data) => {
  setLoading("Сохранение...", 'popup-vary__input-button');
  api.changeAvatar(data['popup-vary__input-url'])
  .then((data) => {
    popupWithFormAvatar.close();
    userInfo.setAvatar(data.avatar);
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally( () => {
    setLoading("Сохранить", 'popup-vary__input-button');
  }
  )
});

popupWithFormProfile.setEventListeners();
popupWithFormCreate.setEventListeners();
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

function createCard({title, link, selector, likes, id, ownerId = profileId}){
  const handleCardClick = popupWithImage.open.bind(popupWithImage);
  const handleOpenPopupDelete = (cardId, card) => popupWithFormDelete.open.bind(popupWithFormDelete)(cardId, card)
  const handleLikeOn = () => {api.likeCard(id)
                              .then( (res) => {
                                card.likes = res.likes;
                                card.toggleTapHeart();
                                card.toggleCounter(1)
                              })
                              .catch(err => console.log(`Ошибка.....: ${err}`))
                              .finally( () => card._toggleDisablingLike(false))
  }
  const handleLikeOff = () => {api.unlikeCard(id)
                              .then( (res) => {
                                card.likes = res.likes;
                                card.toggleTapHeart();
                                card.toggleCounter(-1);
                              })
                              .catch(err => console.log(`Ошибка.....: ${err}`))
                              .finally(() => card._toggleDisablingLike(false))
  };
  const card = new Card({
    title, link, selector, handleCardClick, 
    likes, handleLikeOn, handleLikeOff, id, profileId,
    ownerId, handleOpenPopupDelete
  });
  const cardElement = card.createCard();
  return cardElement;
}

function setLoading(content, Name){
  const button = document.getElementsByName(Name);
  button[0].textContent = content
}

const section = new Section(
  (card) => createCard({title: card.name,
                        link: card.link, 
                        selector: '#card', 
                        likes: card.likes,
                        id: card._id,
                        ownerId: card.owner._id}), 
  '.elements')

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

Promise.all([
  api.getProfileInfo(), 
  api.loadCards() 
]) 
.then(([profileInfo, initialCards]) => {
  profileId = profileInfo._id;
  userInfo.setUserInfo(profileInfo.name, profileInfo.about);
  userInfo.setAvatar(profileInfo.avatar);
  section.renderItems(initialCards)
})
.catch((err)=>{
console.log(err);
 }) 
