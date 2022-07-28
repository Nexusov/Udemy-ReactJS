const box = document.getElementById('box')
const btns = document.getElementsByTagName('button')
const btn2 = document.getElementsByTagName('button')[1] // получаем вторую кнопку

const circles = document.getElementsByClassName('circle')

const hearts = document.querySelectorAll('.heart')

hearts.forEach(item => {
    console.log(item)
})

const oneHeart = document.querySelector('.heart')


box.style.backgroundColor = 'blue'
box.style.width = '500px' ;

box.style.cssText = 'background-color: blue; width: 500px' // inline стиль

btns[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red'


/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue'
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
})

const div = document.createElement('div')
const text = document.createTextNode('ТУТ БЫЛ Я')

div.classList.add('black')


const wrapper = document.querySelector('.wrapper')

document.body.append(div)
wrapper.append(div) // добавляет блок в конец
wrapper.prepend(div) // добавляет блок в начало

hearts[0].before(div)
hearts[0].after(div)

circles[0].remove()

hearts[0].replaceWith(circles[0])



/* УСТАРЕВШИЕ МЕТОДЫ */

// wrapper.appendChild(div) ТОЖЕ САМОЕ, ЧТО И wrapper.append(div)

// wrapper.insertBefore(div, heart[0]) ТОЖЕ САМОЕ, ЧТО И hearts[0].before

// wrapper.removeChild(hearts[1])  ТОЖЕ САМОЕ, ЧТО И wrapper[1].remove()

// wrapper.replaceChild(circles[0], hearts[0]) ТОЖЕ САМОЕ, ЧТО И hearts[0].replaceWith(circles[0])

/* */

div.innerHTML = 'Hello World'
div.innerHTML = '<h3>Hello World 2</h3>'

div.textContent = 'hello' // РАБОТАЕТ ТОЛЬКО С ТЕКСТОМ. HTML тег не поместить

div.insertAdjacentElement('afterbegin', '<h2>HELLO</h2>');
div.insertAdjacentElement('afterend', '<h2>HELLO</h2>');
div.insertAdjacentElement('beforebegin', '<h2>HELLO</h2>');
div.insertAdjacentElement('beforeend', '<h2>HELLO</h2>');