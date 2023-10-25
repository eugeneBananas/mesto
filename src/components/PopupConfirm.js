import Popup from "./Popup.js";

export default class PopupConfirm extends Popup{
    constructor(selector, renderer) {
        super(selector);
        this._renderer = renderer;
        this._confirmButton = this._popup.querySelector('.popup__button_action_delete');
    }

    _handleButton(){
        this._renderer(this._cardId, this._card)
    }

    _listenerCallback = () => {
        return this._handleButton();
    }

    open(cardId, card){
        super.open();
        this._cardId = cardId;
        this._card = card;
    }

    setEventListeners(){
        super.setEventListeners();
        this._confirmButton.addEventListener('click', this._listenerCallback);
    }

}