export default class Card {
  constructor(data){
    this._title = data.title;
    this._link = data.link;
    this._selector = data.selector;
    this.likes = data.likes;
    this._handleCardClick = data.handleCardClick;
    this._id = data.id;
    this._profileId = data.profileId;
    this._handleLikeOn = data.handleLikeOn;
    this._handleLikeOff = data.handleLikeOff;
    this._ownerId = data.ownerId;
    this._handleOpenPopupDelete = data.handleOpenPopupDelete;
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
    this._likeCard.textContent = this.likes.length;
    this._imageCard.alt = "На фото " + this._title;
  }

  _checkUserLike(){
    for (let i = 0; i < this.likes.length; i++){
      if (this.likes[i]['_id'] === this._profileId){
        return true;
      }
    }
    return false;
  }

  _isLiked(){
    if (this._checkUserLike()){
      this._heartCard.classList.toggle('elements__heart_active');
    }
  }

  _toggleDisablingLike(value){
    this._heartCard.disabled = value;
  }

  toggleTapHeart(){
    this._heartCard.classList.toggle('elements__heart_active');
  }

  toggleCounter(a){
    this._countLikeCard.textContent = parseInt(this._countLikeCard.textContent) + a;
  }

  _toggleLike(){
    this._toggleDisablingLike(true);
    if (!this._checkUserLike()){
      this._handleLikeOn(this._id)
    }
    else{
      this._handleLikeOff(this._id)

    }
  }

  _setHeartEventListener(){
    this._heartCard.addEventListener('click', () => {
      this._toggleLike();
    });
  }

  _setTrashEventListener(){
    this._trashCard.addEventListener('click', (evt) => { 
      this._handleOpenPopupDelete(this._id, this);
  });
  }

  _setImageEventListener(){
    this._imageCard.addEventListener('click',(event) => {
      this._handleCardClick({src: this._link, alt: this._imageCard.alt, textContent: this._title});
    })
  }

  _setEventListeners(){
    this._setHeartEventListener();
    this._setTrashEventListener();
    this._setImageEventListener();

  }

  _checkTrashDisplay(){
    if (this._ownerId === this._profileId){
      this._trashCard.classList.remove('elements__trash_display_none');
    }
  }

  removeCard(){
    this._cardElement.remove();
    this._cardElement = null;
  }

  createCard(){
    this._cardElement = this._createTemplateElement();
    this._textCard = this._cardElement.querySelector('.elements__text');
    this._imageCard = this._cardElement.querySelector('.elements__image');
    this._countLikeCard = this._cardElement.querySelector('.elements__likes');
    this._likeCard = this._cardElement.querySelector('.elements__likes');
    this._trashCard = this._cardElement.querySelector('.elements__trash');
    this._heartCard = this._cardElement.querySelector('.elements__heart');
    this._isLiked()
    this._checkTrashDisplay();
    this._fillTemplateElement();
    this._setEventListeners();
    return this._cardElement;
  }
}