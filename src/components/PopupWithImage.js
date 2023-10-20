import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
        this._imageCard = this._popup.querySelector('.popup__illustration');
        this._textCard = this._popup.querySelector('.popup__hint');
    }
    
    open(data){
        this._imageCard.src = data.src;
        this._imageCard.alt = data.alt;
        this._textCard.textContent = data.textContent
        super.open(); // ❤❤❤
    }
}