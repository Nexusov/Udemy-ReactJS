const btn = document.querySelector('.btn')
let myTimer;
let i = 0;

const timer= setTimeout(function(text) {
    console.log(text)
}, 2000, 'Hello')




const timerId = setTimeout(logger, 2000)

clearInterval(timerId) // очищаем таймер

function logger() {
    if (i === 3) {
        clearInterval(myTimer)
    }
    console.log('text')
    i++
}

btn.addEventListener('click', () => {
    // const myTimer = setTimeout(logger, 2000)
    myTimer = setInterval(logger, 2000) 
})

// рекурсивный setTimeout

let id = setTimeout(function log() {
    console.log('log')
    id = setTimeout(log, 500)
}, 500)




// анимация

function myAnimation() {
    const elem = document.querySelector('.box')
    let pos = 0

    const id = setInterval(frame, 10)

    function frame() {
        if (pos === 300) {
            clearInterval(id)
        } else {
            pos++
            elem.style.top = `${pos}px`
            elem.style.left = `${pos}px`
        }
    }
}

btn.addEventListener('click', myAnimation)