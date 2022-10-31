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

    new MenuCard( 
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
    ).render() 

    new MenuCard( 
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
    ).render() 

    new MenuCard( 
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков',
        21,
        '.menu .container',
    ).render() 


    // Forms

    const forms = document.querySelectorAll('form')

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    forms.forEach((item) => {
        postData(item)
    })

    function postData(form) {
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

            const object = {}
            formData.forEach((value, key) => { // переводим из formData в JSON формат
                object[key] = value
            })

            // request.send(formData)
            // request.send(json)

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data)
                showThanksModal(message.success) 
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure)
            }).finally(() => {
                form.reset()
            })
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






})