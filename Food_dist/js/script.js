window.addEventListener('DOMContentLoaded', () => {

    // Tabs
    
    const tabs = document.querySelectorAll('.tabheader__item')
    const tabsContent = document.querySelectorAll('.tabcontent')
    const tabsParent = document.querySelector('.tabheader__items')


    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })
    }
    
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })



    // Timer

    const deadLine = '2025-07-20'

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(t / (1000 *  60 * 60 * 24))
        const hours = Math.floor((t / (1000 * 60 * 60) % 24))
        const minutes = Math.floor((t / 1000 / 60) % 60)
        const seconds = Math.floor((t / 1000) % 60)

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setZero(number) {
        if (number >=0 && number < 10 ) {
            return `0${number}`
        } else {
            return number
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector)
        const days = timer.querySelector('#days')
        const hours = timer.querySelector('#hours')
        const minutes = timer.querySelector('#minutes')
        const seconds = timer.querySelector('#seconds')

        let timeInterval =  setInterval(updateClock, 1000)

        updateClock() // вызываем функцию тут, чтобы не было моргания при загрузке страницы

        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerText = setZero(t.days)
            hours.innerText = setZero(t.hours) 
            minutes.innerText = setZero(t.minutes) 
            seconds.innerText = setZero(t.seconds) 

            if (t.total <= 0) {
                clearInterval(timeInterval)

                days.innerText = '00'
                hours.innerText = '00'
                minutes.innerText = '00'
                seconds.innerText = '00'
            }
        }
    }
    setClock('.timer', deadLine)



    // Pop-up (Modal)

    const modalTrigger = document.querySelectorAll('[data-modal]')
    const modal = document.querySelector('.modal')


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'overlay'
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    })
    

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal()
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) { // проверка на нажатие кнопки Escape на клавиатуре && модальное окно открыто
            closeModal()
        }
    })


    const modalTimerId = setTimeout(openModal, 50000)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) { // пользователь долистал до конца страницы
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)


    // Classes for cards

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.parent = document.querySelector(parentSelector)
            this.classes = classes

            this.transfer = 27 // курс валюты
        }

        changeToUAH() {
            this.price = this.price * this.transfer
        }

        render() {
            this.changeToUAH()
            const element = document.createElement('div')
            if(this.classes.length === 0) {
                this.element = 'menu__item'
                element.classList.add(this.element )
            } else (
                this.classes.forEach(className => element.classList.add(className))
            )
            
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`

            this.parent.append(element)
        }
    }

    const getResources = async (url) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
            })
        })

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


    // Forms

    const forms = document.querySelectorAll('form')

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    forms.forEach((item) => {
        bindPostData(item)
    })

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })

        return await res.json()
    }

    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            const statusMessage = document.createElement('img')
            statusMessage.src = message.loading
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage)
            form.insertAdjacentElement('afterend', statusMessage)

            /* const request= new XMLHttpRequest() // вместо XMLHttpRequest используем fetch
            request.open('POST', 'server.php') */

            // request.setRequestHeader('Content-type', 'multipart/form-data') // если формат отправки не JSON, то заголовок не нужен
            // request.setRequestHeader('Content-type', 'application/json')  // заголовки пишутся внутри fetch()

            const formData = new FormData(form)

            /* const object = {}
            formData.forEach((value, key) => { // переводим из formData в JSON формат
                object[key] = value
            }) */

            const json = JSON.stringify(Object.fromEntries(formData.entries())) // переводим из formData в JSON формат

            // request.send(formData)
            // request.send(json)

            postData('http://localhost:3000/requests', json)
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
        })
    }


    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')

        prevModalDialog.classList.add('hide')
        openModal()

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;


        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
            closeModal()
        }, 2000)
    }


    // Slider

    const slider = document.querySelector('.offer__slider')
    const slides = document.querySelectorAll('.offer__slide')
    const prev = document.querySelector('.offer__slider-prev')
    const next = document.querySelector('.offer__slider-next')

    const total = document.querySelector('#total')
    const current = document.querySelector('#current')

    const slidesWrapper = document.querySelector('.offer__slider-wrapper')
    const slidesField = document.querySelector('.offer__slider-inner')
    const width = window.getComputedStyle(slidesWrapper).width


    let slideIndex = 1
    let offset = 0

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = slideIndex
    }

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(slide => {
        slide.style.width
    })

    slider.style.position = 'relative'
    
    const indicators = document.createElement('ol')
    const dots = []

    indicators.classList.add('carousel-indicators')
    slider.append(indicators)

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('dot')
        if (i === 0) {
            dot.style.opacity = 1
        }
        indicators.append(dot)
        dots.push(dot)
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '')
    }

    next.addEventListener('click', () => {
        if (offset === deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += deleteNotDigits(width)
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex === slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slideIndex  < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
        
        dots.forEach((dot) => dot.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
    })

    prev.addEventListener('click', () => {
        if (offset === 0) {
            offset = deleteNotDigits(width) * (slides.length - 1)
        } else {
            offset -= deleteNotDigits(width)
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex === 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }

        dots.forEach((dot) => dot.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
    })

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            slideIndex = slideTo
            offset = deleteNotDigits(width) * (slideTo - 1)
            slidesField.style.transform = `translateX(-${offset}px)`

            if (slideIndex < 10) {
                current.textContent = `0${slideIndex}`
            } else {
                current.textContent = slideIndex
            }    

            dots.forEach((dot) => dot.style.opacity = '.5')
            dots[slideIndex - 1].style.opacity = 1
        })
    })


    // Calculator

    const result = document.querySelector('.calculating__result span')

    let sex, height, weight, age, ratio

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex')
    } else {
        sex = 'female'
        localStorage.setItem('sex', 'female')
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio')
    } else {
        ratio = 1.375
        localStorage.setItem('ratio', 1.375)
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector)

        elements.forEach((elem) => {
            elem.classList.remove(activeClass)
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass)
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass)
            }
        })
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active')
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active')

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '0'
            return
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
        }
    }
    calcTotal()

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector)

        elements.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-ratio')) {
                    ratio = +event.target.getAttribute('data-ratio')
                    localStorage.setItem('ratio', ratio)
                } else {
                    sex = event.target.getAttribute('id')
                    localStorage.setItem('sex', sex)
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass)
                })
                event.target.classList.add(activeClass)
    
                calcTotal()
            })
        })
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active')
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active')

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector)

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '2px solid red'
            } else {
                input.style.border = 'none'
            }

            switch (input.getAttribute('id')) {
                case 'height': height = +input.value
                    break;
                case 'weight': weight = +input.value
                    break;
                case 'age': age = +input.value
                    break;
            }
            calcTotal()
        })
    }
    getDynamicInformation('#height')
    getDynamicInformation('#weight')
    getDynamicInformation('#age')







})