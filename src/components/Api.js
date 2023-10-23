export default class Api {
    constructor(renderer, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    getProfileInfo() {
        return new Promise((resolve, reject) => {
            fetch('https://mesto.nomoreparties.co/v1/cohort-76/users/me', {
                headers: {
                    authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883'
                }
                })
                .then((res) => {if (res.ok) return res.json() 
                    else {return Promise.reject(res.status)}})
                .then((result) => {
                    resolve(result);
                })
                .catch(error => console.log(`Ошибка: ${error}`));
        });
    }

    loadCards(){
        return new Promise((resolve, reject) => {
            fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
                headers: {
                    authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883'
                }
                })
                .then((res) => {if (res.ok) return res.json() 
                    else {return Promise.reject(res.status)}})
                .then((result) => {
                    let profileId = -1;
                    this.getProfileInfo()
                        .then((profileInfo) => {
                            profileId = profileInfo._id 
                            result.forEach(item => {
                                let flag = 0;
                                if (profileId === item.owner._id){
                                    flag = 1;
                                }
                                this._container.append(this._renderer(item, flag));
                        })
                    });
                })
                .catch(error => console.log(`Ошибка: ${error}`));
        });
    }

    editProfile(name, about){
        return new Promise((resolve, reject) => {
            fetch('https://mesto.nomoreparties.co/v1/cohort-76/users/me', {
                method: 'PATCH',
                headers: {
                    authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    about
                })
            })
                .then((res) => {if (res.ok) return res.json() 
                    else {return Promise.reject(res.status)}})
                .then((result) => {
                    resolve(result);
                })
                .catch(error => console.log(`Ошибка: ${error}`));
        });
    }

    addCard(name, link, id, owner){
        return new Promise((resolve, reject) => {
            fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
                method: 'POST',
                headers: {
                    authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    likes: [],
                    _id: id,
                    name,
                    link,
                    owner: {
                      name: owner.name,
                      about: owner.info,
                      avatar: owner.avatar,
                      _id: owner._id,
                      cohort: "76"
                    },
                    createdAt: "2019-07-05T08:10:57.741Z"
                })
            })
                .then((res) => {if (res.ok) return res.json() 
                    else {return Promise.reject(res.status)}})
                .then((result) => {
                    resolve(result);
                })
                .catch(error => console.log(`Ошибка: ${error}`));
        });
    }

    // likeCard(id){
    //     return new Promise((resolve, reject) => {
    //         fetch(`https://mesto.nomoreparties.co/v1/cohort-76/cards/${id}/likes`, {
    //             method: 'PUT',
    //             headers: {
    //                 authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883'
    //             },
    //         })
    //             .then((res) => {if (res.ok) return res.json() 
    //                 else {return Promise.reject(res.status)}})
    //             .then((result) => {
    //                 resolve(result);
    //             })
    //             .catch(error => console.log(`Ошибка: ${error}`));
    //     });
    // }

    // unlikeCard(id){
    //     return new Promise((resolve, reject) => {
    //         fetch(`https://mesto.nomoreparties.co/v1/cohort-76/cards/${id}/likes`, {
    //             method: 'DELETE',
    //             headers: {
    //                 authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883'
    //             },
    //         })
    //             .then((res) => {if (res.ok) return res.json() 
    //                 else {return Promise.reject(res.status)}})
    //             .then((result) => {
    //                 resolve(result);
    //             })
    //             .catch(error => console.log(`Ошибка: ${error}`));
    //     });
    // }

    changeAvatar(url){
        return new Promise((resolve, reject) => {
            fetch(`https://mesto.nomoreparties.co/v1/cohort-76/users/me/avatar`, {
                method: 'PATCH',
                headers: {
                    authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    avatar: url
                })
            })
                .then((res) => {if (res.ok) return res.json() 
                    else {return Promise.reject(res.status)}})
                .then((result) => {
                    resolve(result);
                })
                .catch(error => console.log(`Ошибка: ${error}`));
        });
    }
}
  
const api = new Api({
baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-76',
headers: {
    authorization: 'c8a10fcc-f2aa-44d9-b608-81dcddb7b883',
    'Content-Type': 'application/json'
}
}); 