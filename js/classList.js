const btns = document.querySelectorAll('button')
const wrapper = document.querySelector('.btn-block')

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) { // проверка на отсутствие класса 'red' у кнопки
        btns[1].classList.add('red')
    }else {
        btns[1].classList.remove('red')
    }
})

// Тоже самое через .classList.toggle()
btns[1].addEventListener('click', () => {
    btns[2].classList.toggle('red')
})

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') { // если кликаю на кнопку, то выведи текст в консоль
        console.log('Hello')
    }
})

//тоже самое, что и сверху, только через matches()
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) { 
        console.log('matches')
    }
})

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('blue')) { // если я кликаю на кнопку с классом 'blue', то выведи текст в консоль
        console.log('BLUE uwu')
    }
})

btns.forEach(button => {
    button.addEventListener('click', () =>  {
        console.log('forEach for every element')
    })
});

const btn = document.createElement('button')
btn.classList.add('yellow')
wrapper.append(btn)