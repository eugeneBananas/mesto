import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(selector, callback) {
        super(selector);
        this._callback = callback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues(){
        const data = {};
        this._inputs.forEach((input)=>{
            data[input.name] = input.value;
        })
        return data;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._callback(this._getInputValues());
        })
    }

    close(){
        super.close();
        this._form.reset();
    }
}