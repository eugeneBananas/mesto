export {parameterToConfig, initialCards, popupEdit, profile, popupEditEnter, popupAddEnter, inputName, inputStatus, userName, userStatus, formEditPopup, formAddPopup, containerWithElements};

const parameterToConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
  }

const initialCards = [
    {
      name: 'Горный Алтай',
      link: 'https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80'
    },
    {
      name: 'Якутск',
      link: 'https://images.unsplash.com/photo-1657070969523-f59f91f9c3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Мурманск',
      link: 'https://images.unsplash.com/photo-1611214260857-6b49693a2582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80'
    },
    {
      name: 'Анапа',
      link: 'https://images.unsplash.com/photo-1664357954860-0a80efc547c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Уральские горы',
      link: 'https://images.unsplash.com/photo-1542091607-0545b109d5e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80'
    },
    {
      name: 'Чехов',
      link: 'https://images.unsplash.com/photo-1596278833852-31cedd0b9cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    }
]

const popupEdit = document.querySelector('.popup_action_edit');
// const popupAdd = document.querySelector('.popup_action_add');
const containerWithElements = document.querySelector('.elements');
const profile = document.querySelector('.profile');
const popupEditEnter = profile.querySelector('.profile__edit-button')
const popupAddEnter = profile.querySelector('.profile__add-button')
const inputName = popupEdit.querySelector('.popup__input_enter_name');
const inputStatus = popupEdit.querySelector('.popup__input_enter_status');
const userName = profile.querySelector('.profile__name');
const userStatus = profile.querySelector('.profile__status');
const formEditPopup = document.querySelector('form[name="popup-edit"]');
const formAddPopup = document.querySelector('form[name="popup-add"]');