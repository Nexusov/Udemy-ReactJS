/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Food_dist/js/modules/calculator.js":
/*!********************************************!*\
  !*** ./Food_dist/js/modules/calculator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator(params) {
	
    // Calculator

	const result = document.querySelector('.calculating__result span');

	let sex, height, weight, age, ratio;

	if (localStorage.getItem('sex')) {
		sex = localStorage.getItem('sex');
	} else {
		sex = 'female';
		localStorage.setItem('sex', 'female');
	}

	if (localStorage.getItem('ratio')) {
		ratio = localStorage.getItem('ratio');
	} else {
		ratio = 1.375;
		localStorage.setItem('ratio', 1.375);
	}

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach((elem) => {
			elem.classList.remove(activeClass);
			if (elem.getAttribute('id') === localStorage.getItem('sex')) {
				elem.classList.add(activeClass);
			}
			if (
				elem.getAttribute('data-ratio') ===
				localStorage.getItem('ratio')
			) {
				elem.classList.add(activeClass);
			}
		});
	}
	initLocalSettings('#gender div', 'calculating__choose-item_active');
	initLocalSettings(
		'.calculating__choose_big div',
		'calculating__choose-item_active'
	);

	function calcTotal() {
		if (!sex || !height || !weight || !age || !ratio) {
			result.textContent = '0';
			return;
		}

		if (sex === 'female') {
			result.textContent = Math.round(
				(447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
			);
		} else {
			result.textContent = Math.round(
				(88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
			);
		}
	}
	calcTotal();

	function getStaticInformation(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach((elem) => {
			elem.addEventListener('click', (event) => {
				if (event.target.getAttribute('data-ratio')) {
					ratio = +event.target.getAttribute('data-ratio');
					localStorage.setItem('ratio', ratio);
				} else {
					sex = event.target.getAttribute('id');
					localStorage.setItem('sex', sex);
				}

				elements.forEach((elem) => {
					elem.classList.remove(activeClass);
				});
				event.target.classList.add(activeClass);

				calcTotal();
			});
		});
	}
	getStaticInformation('#gender div', 'calculating__choose-item_active');
	getStaticInformation(
		'.calculating__choose_big div',
		'calculating__choose-item_active'
	);

	function getDynamicInformation(selector) {
		const input = document.querySelector(selector);

		input.addEventListener('input', () => {
			if (input.value.match(/\D/g)) {
				input.style.border = '2px solid red';
			} else {
				input.style.border = 'none';
			}

			switch (input.getAttribute('id')) {
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}
			calcTotal();
		});
	}
	getDynamicInformation('#height');
	getDynamicInformation('#weight');
	getDynamicInformation('#age');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);


/***/ }),

/***/ "./Food_dist/js/modules/cards.js":
/*!***************************************!*\
  !*** ./Food_dist/js/modules/cards.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./Food_dist/js/services/services.js");


function cards() {
    
	// Classes for cards

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;

			this.transfer = 27; // курс валюты
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			this.changeToUAH();
			const element = document.createElement('div');
			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else
				this.classes.forEach((className) =>
					element.classList.add(className)
				);

			element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;

			this.parent.append(element);
		}
	}

	axios.get('http://localhost:3000/menu').then((data) => {
		data.data.forEach(({ img, altimg, title, descr, price }) => {
			new MenuCard(
				img,
				altimg,
				title,
				descr,
				price,
				'.menu .container'
			).render();
		});
	});

	/* getResources('http://localhost:3000/menu')
            .then(data => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
                })
            })  */

	// Способ создания карточек без шаблонизации

	/* getResources('http://localhost:3000/menu')
            .then(data => createCard(data))
    
        function createCard(data) {
            data.forEach(({img, altimg, title, descr, price}) => {
                const element = document.createElement('div')
    
                element.classList.add('menu__item')
    
                element.innerHTML = `
                    <img src=${img} alt=${altimg}>
                    <h3 class="menu__item-subtitle">${title}</h3>
                    <div class="menu__item-descr">${descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${price}</span> грн/день</div>
                    </div>
                `;
    
                document.querySelector('.menu .container').append(element)
            })
        } */
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./Food_dist/js/modules/forms.js":
/*!***************************************!*\
  !*** ./Food_dist/js/modules/forms.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./Food_dist/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./Food_dist/js/services/services.js");



function forms(formSelector, modalTimerId) {

	// Forms

	const forms = document.querySelectorAll(formSelector);

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...',
	};

	forms.forEach((item) => {
		bindPostData(item);
	});

	function bindPostData(form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
			// form.append(statusMessage)
			form.insertAdjacentElement('afterend', statusMessage);

			/* const request= new XMLHttpRequest() // вместо XMLHttpRequest используем fetch
            request.open('POST', 'server.php') */

			// request.setRequestHeader('Content-type', 'multipart/form-data') // если формат отправки не JSON, то заголовок не нужен
			// request.setRequestHeader('Content-type', 'application/json')  // заголовки пишутся внутри fetch()

			const formData = new FormData(form);

			/* const object = {}
            formData.forEach((value, key) => { // переводим из formData в JSON формат
                object[key] = value
            }) */

			const json = JSON.stringify(Object.fromEntries(formData.entries())); // переводим из formData в JSON формат

			// request.send(formData)
			// request.send(json)

			(0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
				.then((data) => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
		}, 2000);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./Food_dist/js/modules/modal.js":
/*!***************************************!*\
  !*** ./Food_dist/js/modules/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);

	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);

	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = 'overlay';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    
	// Pop-up (Modal)

	const modalTrigger = document.querySelectorAll(triggerSelector);
	const modal = document.querySelector(modalSelector);

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
	});

	modal.addEventListener('click', (event) => {
		if (
			event.target === modal ||
			event.target.getAttribute('data-close') == ''
		) {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			// проверка на нажатие кнопки Escape на клавиатуре && модальное окно открыто
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			// пользователь долистал до конца страницы
			openModal(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./Food_dist/js/modules/slider.js":
/*!****************************************!*\
  !*** ./Food_dist/js/modules/slider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
	
    // Slider

	const slides = document.querySelectorAll(slide);
	const slider = document.querySelector(container);
	const prev = document.querySelector(prevArrow);
	const next = document.querySelector(nextArrow);

	const total = document.querySelector(totalCounter);
	const current = document.querySelector(currentCounter);

	const slidesWrapper = document.querySelector(wrapper);
	const slidesField = document.querySelector(field);
	const width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach((slide) => {
		slide.style.width;
	});

	slider.style.position = 'relative';

	const indicators = document.createElement('ol');
	const dots = [];

	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		if (i === 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, '');
	}

	next.addEventListener('click', () => {
		if (offset === deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex === slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slideIndex < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach((dot) => (dot.style.opacity = '.5'));
		dots[slideIndex - 1].style.opacity = 1;
	});

	prev.addEventListener('click', () => {
		if (offset === 0) {
			offset = deleteNotDigits(width) * (slides.length - 1);
		} else {
			offset -= deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex === 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slideIndex < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach((dot) => (dot.style.opacity = '.5'));
		dots[slideIndex - 1].style.opacity = 1;
	});

	dots.forEach((dot) => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = deleteNotDigits(width) * (slideTo - 1);
			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slideIndex < 10) {
				current.textContent = `0${slideIndex}`;
			} else {
				current.textContent = slideIndex;
			}

			dots.forEach((dot) => (dot.style.opacity = '.5'));
			dots[slideIndex - 1].style.opacity = 1;
		});
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./Food_dist/js/modules/tabs.js":
/*!**************************************!*\
  !*** ./Food_dist/js/modules/tabs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	// Tabs

	const tabs = document.querySelectorAll(tabsSelector);
	const tabsContent = document.querySelectorAll(tabsContentSelector);
	const tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach((item) => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains(tabsSelector.slice(1))) { // .slice(1) убираем точку у селектора
			tabs.forEach((item, i) => {
				if (target === item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./Food_dist/js/modules/timer.js":
/*!***************************************!*\
  !*** ./Food_dist/js/modules/timer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {

	// Timer

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function setZero(number) {
		if (number >= 0 && number < 10) {
			return `0${number}`;
		} else {
			return number;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector);
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');

		let timeInterval = setInterval(updateClock, 1000);

		updateClock(); // вызываем функцию тут, чтобы не было моргания при загрузке страницы

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerText = setZero(t.days);
			hours.innerText = setZero(t.hours);
			minutes.innerText = setZero(t.minutes);
			seconds.innerText = setZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);

				days.innerText = '00';
				hours.innerText = '00';
				minutes.innerText = '00';
				seconds.innerText = '00';
			}
		}
	}
	setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "./Food_dist/js/services/services.js":
/*!*******************************************!*\
  !*** ./Food_dist/js/services/services.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResources": () => (/* binding */ getResources),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: data,
    });

    return await res.json();
};

const getResources = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./Food_dist/js/script.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./Food_dist/js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./Food_dist/js/modules/modal.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculator */ "./Food_dist/js/modules/calculator.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./Food_dist/js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./Food_dist/js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./Food_dist/js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./Food_dist/js/modules/timer.js");










window.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 50000);

	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
	(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_2__["default"])();
	(0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
	(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
	(0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2025-07-20');
	(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
	});
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map