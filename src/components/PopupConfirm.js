import Popup from "./Popup.js";

export default class PopupConfirm extends Popup{
    constructor(selector, renderer) {
        super(selector);
        this._renderer = renderer;
        this._buttonExit = this._popup.querySelector('.popup__cross');
        this._confirmButton = this._popup.querySelector('.popup__button_action_delete');
    }

    _handleButton(){
        this._renderer(this._cardId, this._card)
            .then(() => {
                this._card.removeCard();
                this._card = null;
                this.close();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
            })
            this._confirmButton.removeEventListener('click', this._unsetListenerButtonConfirm()); // listener не удаляется
    }

    _listenerCallback(){
        return this._handleButton.bind(this);
    }

    _setListenerButtonConfirm(){
        this._confirmButton.addEventListener('click', this._listenerCallback());
    }

    _unsetListenerButtonConfirm(){
        this._confirmButton.addEventListener('click', this._listenerCallback());
    }

    _setListenerButtonExit(){
        this._buttonExit.addEventListener(('click'),  this._unsetListenerButtonConfirm());
    }

    deleteCard(cardId, card){
        this._cardId = cardId;
        this._card = card;
        this._confirmButton.addEventListener('click', this. _setListenerButtonConfirm());
    }
}