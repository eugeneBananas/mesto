(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n}var n,r;return n=t,(r=[{key:"_showError",value:function(t,e){t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkValidity",value:function(t,e){t.validity.valid?this._hideError(t,e):this._showError(t,e)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._toggleEnablingButton(!0),this._buttonSubmit.classList.add(this._inactiveButtonClass)):(this._toggleEnablingButton(!1),this._buttonSubmit.classList.remove(this._inactiveButtonClass))}},{key:"_toggleEnablingButton",value:function(t){this._buttonSubmit.disabled=t}},{key:"_setEventListeners",value:function(t,e){var n=this;t.addEventListener("input",(function(){n._checkValidity(t,e),n._toggleButtonState()}))}},{key:"disableButton",value:function(){this._toggleEnablingButton(!0)}},{key:"resetButton",value:function(){this.disableButton(),this._buttonSubmit.classList.add(this._inactiveButtonClass)}},{key:"resetErrors",value:function(){var t=this;this._inputs.forEach((function(e){var n=t._form.querySelector(".".concat(e.id,"-error"));t._hideError(e,n)}))}},{key:"enableValidation",value:function(){var t=this;this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonSubmit=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputs.forEach((function(e){var n=t._form.querySelector(".".concat(e.id,"-error"));n.textContent="",t._setEventListeners(e,n)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e,this._link=n,this._selector=r,this._handleCardClick=o}var e,n;return e=t,(n=[{key:"_createTemplateElement",value:function(){return document.querySelector(this._selector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"_fillTemplateElement",value:function(){this._textCard.textContent=this._title,this._imageCard.src=this._link,this._imageCard.src=this._link,this._imageCard.alt="На фото "+this._title}},{key:"_toggleLike",value:function(){this._heartCard.classList.toggle("elements__heart_active")}},{key:"_deleteCards",value:function(t){t.closest(".elements__element").remove()}},{key:"_setHeartEventListener",value:function(){var t=this;this._heartCard.addEventListener("click",(function(){t._toggleLike()}))}},{key:"_setTrashEventListener",value:function(){var t=this;this._trashCard.addEventListener("click",(function(e){t._deleteCards(e.target)}))}},{key:"_setImageEventListener",value:function(){var t=this;this._imageCard.addEventListener("click",(function(e){var n=t._imageCard.src,r=t._imageCard.alt,o=t._textCard.textContent;t._handleCardClick({src:n,alt:r,textContent:o})}))}},{key:"_setEventListeners",value:function(){this._heartCard=this._cardElement.querySelector(".elements__heart"),this._trashCard=this._cardElement.querySelector(".elements__trash"),this._setHeartEventListener(),this._setTrashEventListener(),this._setImageEventListener()}},{key:"createCard",value:function(){return this._cardElement=this._createTemplateElement(),this._textCard=this._cardElement.querySelector(".elements__text"),this._imageCard=this._cardElement.querySelector(".elements__image"),this._fillTemplateElement(),this._setEventListeners(),this._cardElement}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function l(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),l(this,"_handleButtonClose",(function(){n.close()})),l(this,"_handleOverlayClose",(function(t){t.target.classList.contains("popup")&&n.close()})),this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__cross").addEventListener("click",(function(){t._handleButtonClose()})),this._popup.addEventListener("click",(function(e){t._handleOverlayClose(e)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callback=e,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;y(_(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callback(t._getInputValues()),t.close()}))}},{key:"close",value:function(){y(_(u.prototype),"close",this).call(this),this._form.reset()}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageCard=e._popup.querySelector(".popup__illustration"),e._textCard=e._popup.querySelector(".popup__hint"),e}return e=u,(n=[{key:"open",value:function(t){this._imageCard.src=t.src,this._imageCard.alt=t.alt,this._textCard.textContent=t.textContent,h(S(u.prototype),"open",this).call(this)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t.addItem(t._renderer(e))}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var O=function(){function t(e){var n=e.elementName,r=e.elementInfo;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._info=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._info.textContent}}},{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._info.textContent=e}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"},B=document.querySelector(".popup_action_edit"),L=document.querySelector(".profile"),q=L.querySelector(".profile__edit-button"),D=L.querySelector(".profile__add-button"),T=B.querySelector(".popup__input_enter_name"),H=B.querySelector(".popup__input_enter_status"),I=document.querySelector('form[name="popup-edit"]'),M=document.querySelector('form[name="popup-add"]'),R=new O({elementName:".profile__name",elementInfo:".profile__status"}),A=new w(".popup_action_depict"),V=new k({items:[{name:"Горный Алтай",link:"https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"},{name:"Якутск",link:"https://images.unsplash.com/photo-1657070969523-f59f91f9c3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},{name:"Мурманск",link:"https://images.unsplash.com/photo-1611214260857-6b49693a2582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"},{name:"Анапа",link:"https://images.unsplash.com/photo-1664357954860-0a80efc547c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},{name:"Уральские горы",link:"https://images.unsplash.com/photo-1542091607-0545b109d5e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"},{name:"Чехов",link:"https://images.unsplash.com/photo-1596278833852-31cedd0b9cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}],renderer:function(t){return Y(t.name,t.link,"#card")}},".elements");V.renderItems();var G=new v(".popup_action_edit",(function(t){R.setUserInfo(t["popup-edit__input-name"],t["popup-edit__input-status"])})),W=new v(".popup_action_add",(function(t){var e;e=Y(t["popup-add__input-title"],t["popup-add__input-link"],"#card"),V.addItemPrepend(e)}));function Y(t,e,n){return new i(t,e,n,A.open.bind(A)).createCard()}G.setEventListeners(),W.setEventListeners(),A.setEventListeners(),q.addEventListener("click",(function(){var t=R.getUserInfo(),e=t.name,n=t.info;T.value=e,H.value=n,B.querySelector(".popup__form"),U.resetButton(),U.resetErrors(),G.open()})),D.addEventListener("click",(function(){W.open(),N.resetButton(),N.resetErrors()}));var U=new n(P,I),N=new n(P,M);U.enableValidation(),N.enableValidation()})();