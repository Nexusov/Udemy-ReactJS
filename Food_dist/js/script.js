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
    const modalCloseBtn = document.querySelector('[data-close]')


    function openModal() {
        modal.classList.toggle('show')
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    function closeModal() {
        modal.classList.toggle('show')
        document.body.style.overflow = ''
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    })
    
    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal()
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) { // проверка на нажатие кнопки Escape на клавиатуре && модальное окно открыто
            closeModal()
        }
    })


    const modalTimerId = setTimeout(openModal, 5000)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) { // пользователь долистал до конца страницы
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

window.addEventListener('scroll', showModalByScroll)





    








})