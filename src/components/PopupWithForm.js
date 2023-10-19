import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(name, callback) {
        super(name);
        this._callback = callback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues(){
        //?????? renderer
        this.data = {};
        this._inputs.forEach((input)=>{
            this.data[input.name] = input.value;
        })
        return this.data;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._callback(this._getInputValues());
            this.close();
        })
    }

    close(){
        super.close();
        this._form.reset();
    }
}