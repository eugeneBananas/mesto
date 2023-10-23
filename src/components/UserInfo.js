export default class UserInfo{
    constructor({elementName, elementInfo, elementAvatar}){
        this._name = document.querySelector(elementName);
        this._info = document.querySelector(elementInfo);
        this._avatar = document.querySelector(elementAvatar);
    }

    getUserInfo(){
        return {name: this._name.textContent, info: this._info.textContent};
    }

    setUserInfo(name, info){
        this._name.textContent = name;
        this._info.textContent = info;
    }

    setAvatar(avatar){
        this._avatar.src = avatar;
    }
}