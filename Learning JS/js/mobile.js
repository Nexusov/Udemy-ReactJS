/* События на мобильных устройствах */

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box')

    box.addEventListener('touchstart', (event) => { // touchstart тап по элементу 
        event.preventDefault()

        console.log('TOUCHED')
        console.log(event.touches) // .touches список вообще всех пальцев на экране
        console.log(event.targetTouches) // .targetTouches список пальцев на элементе
    })

    box.addEventListener('touchmove', (event) => { // touchmove движение пальцем по элементу 
        event.preventDefault()

        console.log('MOVE')
        console.log(event.targetTouches[0].pageX) // .targetTouches[] - обращаемся к какому-то пальцу 
    })

    box.addEventListener('touchend', (event) => { // touchend отжатие после тапа
        event.preventDefault()

        console.log('END')
    })
})

/* https://hammerjs.github.io/ - библиотека для мультитачей*/ 