const popupEdit = document.querySelector('.popup_action_edit');
const popupAdd = document.querySelector('.popup_action_add');
const popupImage = document.querySelector('.popup_action_depict');
const profile = document.querySelector('.profile');
const elements = document.querySelector('.elements');

const popupEditQuit = popupEdit.querySelector('.popup__cross');
const popupEditEnter = profile.querySelector('.profile__edit-button')

const popupAddQuit = popupAdd.querySelector('.popup__cross');
const popupAddEnter = profile.querySelector('.profile__add-button')

const popupImageQuit = popupImage.querySelector('.popup__cross');

const userName = profile.querySelector('.profile__name');
const userStatus = profile.querySelector('.profile__status');

const inputName = popupEdit.querySelector('.popup__input_enter_name');
const inputStatus = popupEdit.querySelector('.popup__input_enter_status');

const inputTitle = popupAdd.querySelector('.popup__input_enter_title');
const inputLink = popupAdd.querySelector('.popup__input_enter_link');

const formEditElement = popupEdit.querySelector('.popup__form');
const formAddElement = popupAdd.querySelector('.popup__form');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function openPopup(popup){
    popup.classList.add('popup_opened');
    inputName.value = userName.textContent; 
    inputStatus.value = userStatus.textContent;
    inputTitle.value = ''; 
    inputLink.value = ''; 
}

 
function closePopup(popup){ 
    popup.classList.remove('popup_opened') 
} 
 
function handleFormEditSubmit(evt) { 
    evt.preventDefault(); 
    userName.textContent = inputName.value; 
    userStatus.textContent = inputStatus.value; 
    closePopup(popupEdit); 
} 

function handleFormAddSubmit(evt) { 
    evt.preventDefault(); 
    const cardTemplate = elements.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
    const heartCard = cardElement.querySelector('.elements__heart');
    const trashCard = cardElement.querySelector('.elements__trash');
    const textCard = cardElement.querySelector('.elements__text');
    const imageCard = cardElement.querySelector('.elements__image');

    cardElement.querySelector('.elements__text').textContent = inputTitle.value; 
    cardElement.querySelector('.elements__image').src = inputLink.value; 
    heartCard.addEventListener('click', function (event) { event.target.classList.toggle('elements__heart_active')});
    trashCard.addEventListener('click', function (event) { 
        const currentCard = event.target.closest('.elements__element');
        currentCard.remove();
    });
    imageCard.addEventListener('click', function (event) {
        popupImage.querySelector('.popup__illustration').src = imageCard.src;
        popupImage.querySelector('.popup__hint').textContent = textCard.textContent;
        openPopup(popupImage);
    });
    elements.prepend(cardElement);
    closePopup(popupAdd);
}

function loadCards(){
    initialCards.forEach(function(item){
        const cardTemplate = elements.querySelector('#card').content;
        const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
        const imageCard = cardElement.querySelector('.elements__image');
        const textCard = cardElement.querySelector('.elements__text');
        const heartCard = cardElement.querySelector('.elements__heart');
        const trashCard = cardElement.querySelector('.elements__trash');

        heartCard.addEventListener('click', function (event) { event.target.classList.toggle('elements__heart_active')});
        trashCard.addEventListener('click', function (event) { 
            const currentCard = event.target.closest('.elements__element');
            currentCard.remove();
        });
        imageCard.addEventListener('click', function (event) {
            popupImage.querySelector('.popup__illustration').src = imageCard.src;
            popupImage.querySelector('.popup__hint').textContent = textCard.textContent;
            openPopup(popupImage);
        });
        textCard.textContent = item.name;
        imageCard.src = item.link;
        elements.append(cardElement);
    });
}
loadCards();
 
let heartCards = Array.from(elements.querySelectorAll('.elements__heart'));
let trashCards = Array.from(elements.querySelectorAll('.elements__trash'));

popupEditQuit.addEventListener('click', function(){closePopup(popupEdit)}); 
popupEditEnter.addEventListener('click', function(){openPopup(popupEdit)}); 
formEditElement.addEventListener('submit', handleFormEditSubmit); 

popupAddQuit.addEventListener('click', function(){closePopup(popupAdd)}); 
popupAddEnter.addEventListener('click', function(){openPopup(popupAdd)}); 
formAddElement.addEventListener('submit', handleFormAddSubmit); 

popupImageQuit.addEventListener('click', function(){closePopup(popupImage)}); 

// heartCards.forEach(function(heart) {
//     heart.addEventListener('click', function(evt){
//         const currentHeart = evt.target;
//         currentHeart.classList.toggle('elements__heart_active');
//     });
// });

// trashCards.forEach(function(trash) {
//     trash.addEventListener('click', function(evt){
//         const currentTrash = evt.target;
//         const currentCard = currentTrash.closest('.elements__element');
//         currentCard.remove();
//         heartCards = Array.from(elements.querySelectorAll('.elements__heart'));
//     });
// });