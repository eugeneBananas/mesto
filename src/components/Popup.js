export default class Popup{
    constructor(selector){
        this._popup = document.querySelector(selector);
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener("keydown",  this._handleEscClose);
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener("keydown",  this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape"){
            this.close();
          }
    }

    _handleButtonClose = () => {
        this.close();
    }

    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup')){
            this.close();
          }
    }

    setEventListeners(){
        const _closeButton = this._popup.querySelector('.popup__cross');
        _closeButton.addEventListener('click', () => {this._handleButtonClose()});
        this._popup.addEventListener("click", (evt) => {this._handleOverlayClose(evt)});
    }
}