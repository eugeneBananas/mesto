import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
        console.log(this._popup);
        this._imageCard = this._popup.querySelector('.elements__image');
        this._textCard = this._popup.querySelector('.elements__text');
    }
    
    open(data){
        // console.log(this);
        this._imagePopup.classList.add('popup_opened');
        this._imageCard.src = data.src;
        this._imageCard.alt = data.alt;
        this._textCard.textContent = data.textContent
        // super.open(); _popup - undefined 
    }
}