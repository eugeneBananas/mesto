export default class UserInfo{
    constructor({elementName, elementInfo}){
        this._name = document.querySelector(elementName);
        this._info = document.querySelector(elementInfo);
    }

    getUserInfo(){
        return {name: _name.textContent, info: _info.textContent};
    }

    setUserInfo(name, info){
        this._name.textContent = name;
        this._info.textContent = info;
    }
}