import { containerWithElements, illustrationIndication, hintIndication, openPopup, popupImage } from "./index.js";

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

class Card {
  constructor(title, link, selector){
    this._title = title;
    this._link = link;
    this._selector = selector;
  }

  _createTemplateElement(){
    const _cardTemplate = containerWithElements.querySelector(this._selector).content;
    const _cardContent = _cardTemplate.querySelector('.elements__element').cloneNode(true);
    return _cardContent;
  }

  _fillTemplateElement(){
    const _textCard = this._cardElement.querySelector('.elements__text');
    const _imageCard = this._cardElement.querySelector('.elements__image');
    _textCard.textContent = this._title;
    _imageCard.src = this._link; 
    _imageCard.alt = "На фото " + this._title;
  }

  _setHeartEventListener(){
    this._heartCard.addEventListener('click', function (event) {
      event.target.classList.toggle('elements__heart_active');
    });
  }

  _setTrashEventListener(){
    this._trashCard.addEventListener('click', function (event) { 
      const currentCard = event.target.closest('.elements__element');
      currentCard.remove();
  });
  }

  _setImageEventListener(_imageCard){
    const _textCard = this._cardElement.querySelector('.elements__text');
    _imageCard.addEventListener('click', function (event) {
      illustrationIndication.src = _imageCard.src;
      illustrationIndication.alt = _imageCard.alt;
      hintIndication.textContent = _textCard.textContent;
      openPopup(popupImage);
  });
  }

  _setEventListeners(){
    this._heartCard = this._cardElement.querySelector('.elements__heart');
    this._trashCard = this._cardElement.querySelector('.elements__trash');
    this._imageCard = this._cardElement.querySelector('.elements__image');
    this._setHeartEventListener();
    this._setTrashEventListener();
    this._setImageEventListener(this._imageCard);
  }

  createCard(){
    this._cardElement = this._createTemplateElement();
    this._fillTemplateElement();
    this._setEventListeners();
    return this._cardElement;
  }

}

export { initialCards, Card };