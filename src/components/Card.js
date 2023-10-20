export default class Card {
  constructor(title, link, selector, handleCardClick){
    this._title = title;
    this._link = link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
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
      this._deleteCards(evt.target);
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
    this._heartCard = this._cardElement.querySelector('.elements__heart');
    this._trashCard = this._cardElement.querySelector('.elements__trash');
    this._setHeartEventListener();
    this._setTrashEventListener();
    this._setImageEventListener();
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