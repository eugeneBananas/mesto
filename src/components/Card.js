export default class Card {
  constructor(title, link, selector, handleCardClick, likes, handleCardDelete, 
    // handleLikeOn, handleLikeOff, 
    flag){
    this._title = title;
    this._link = link;
    this._selector = selector;
    this._likes = likes;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    // this._id = id;
    // this._handleLikeOn = handleLikeOn;
    // this._handleLikeOff = handleLikeOff;
    this._flag = flag;
  }

  _createTemplateElement(){
    const _cardTemplate = document.querySelector(this._selector).content;
    const _cardContent = _cardTemplate.querySelector('.elements__element').cloneNode(true);
    return _cardContent;
  }

  _fillTemplateElement(){
    this._textCard.textContent = this._title;
    this._imageCard.src = this._link;
    this._imageCard.src = this._link;
    this._likeCard.textContent = this._likes.length;
    this._imageCard.alt = "На фото " + this._title;
  }

  _toggleLike(){
    this._heartCard.classList.toggle('elements__heart_active');
    
  }

  _deleteCards(target){
    const currentCard = target.closest('.elements__element');
    currentCard.remove();
  } 

  _setHeartEventListener(){
    this._heartCard.addEventListener('click', () => {
      this._toggleLike();
    });
  }

  _setTrashEventListener(){
    this._trashCard.addEventListener('click', (evt) => { 
      this._handleCardDelete();
      // const target = evt.target;
      // const setEventListenerDelete = () => {this._deleteCards(target)};
      // popupWithFormDelete.addEventListener('submit', () => {setEventListenerDelete()});
      // const _closeButton = popupWithFormDelete.querySelector('.popup__cross');
      // _closeButton.removeEventListener('submit', () => {setEventListenerDelete()});

      console.log(evt.target)
  });
  }

  _setImageEventListener(){
    this._imageCard.addEventListener('click',(event) => {
      const src = this._imageCard.src;
      const alt = this._imageCard.alt
      const textContent = this._textCard.textContent;
      this._handleCardClick({src, alt, textContent});
    })
  }

  _setEventListeners(){
    this._setHeartEventListener();
    this._setTrashEventListener();
    this._setImageEventListener(this._imageCard, this._textCard);
  }

  _checkTrashDisplay(){
    if (this._flag){
      this._trashCard.classList.remove('elements__trash_display_none');
    }
    console.log(this._flag);
  }

  createCard(){
    this._cardElement = this._createTemplateElement();
    this._textCard = this._cardElement.querySelector('.elements__text');
    this._imageCard = this._cardElement.querySelector('.elements__image');
    this._likeCard = this._cardElement.querySelector('.elements__likes');
    this._trashCard = this._cardElement.querySelector('.elements__trash');
    this._heartCard = this._cardElement.querySelector('.elements__heart');
    this._checkTrashDisplay();
    this._fillTemplateElement();
    this._setEventListeners();
    return this._cardElement;
  }

}