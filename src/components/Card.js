export default class Card {
  constructor(title, link, selector, handleCardClick){
    this._title = title;
    this._link = link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._imagePopup = document.querySelector('.popup_action_depict');
    this._illustrationIndication = this._imagePopup.querySelector('.popup__illustration');
    this._hintIndication = this._imagePopup.querySelector('.popup__hint');
  }

  _createTemplateElement(){
    const _cardTemplate = document.querySelector(this._selector).content;
    const _cardContent = _cardTemplate.querySelector('.elements__element').cloneNode(true);
    return _cardContent;
  }

  _fillTemplateElement(){
    this._textCard.textContent = this._title;
    this._imageCard.src = this._link;
    this._imageCard.alt = "На фото " + this._title;
  }

  _toggleLike(){
    this._heartCard.classList.toggle('elements__heart_active'); 
  }

  _deleteCards(target){
    const currentCard = target.closest('.elements__element');
    currentCard.remove();
  } 

  _handleImageClick(_imageCard, _textCard){
    this._imageCard.addEventListener('click',(event) => {
      this._illustrationIndication.src = this._imageCard.src;
      const src = this._imageCard.src;
      this._illustrationIndication.alt = this._imageCard.alt;
      const alt = this._imageCard.alt
      this._hintIndication.textContent = this._textCard.textContent;
      const textContent = this._textCard.textContent;
      this._handleCardClick({src, alt, textContent});
    })
  }

  _setHeartEventListener(){
    this._heartCard.addEventListener('click', () => {
      this._toggleLike();
    });
  }

  _setTrashEventListener(){
    this._trashCard.addEventListener('click', (evt) => { 
      this._deleteCards(evt.target);
  });
  }

  _setImageEventListener(_imageCard,  _textCard){
    this._handleImageClick(_imageCard, _textCard);
  }

  _setEventListeners(){
    this._heartCard = this._cardElement.querySelector('.elements__heart');
    this._trashCard = this._cardElement.querySelector('.elements__trash');
    this._setHeartEventListener();
    this._setTrashEventListener();
    this._setImageEventListener(this._imageCard, this._textCard);
  }

  createCard(){
    this._cardElement = this._createTemplateElement();
    this._textCard = this._cardElement.querySelector('.elements__text');
    this._imageCard = this._cardElement.querySelector('.elements__image');
    this._fillTemplateElement();
    this._setEventListeners();
    return this._cardElement;
  }

}