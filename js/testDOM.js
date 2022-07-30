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



const btn = document.querySelector('button')

btn.onclick = () => { // не очень правильный обработчик событий
    alert('TEXT')
}

btn.addEventListener('click', () => { // правильный обработчки событий, так как их может быть несколько и они сработают 
    alert('TEXT')
})

btn.addEventListener('click', () => { // выполнится сразу после верхнего
    alert('TEXT2')
})

btn.addEventListener('mouseenter', (e) => { 
    console.log(e) // выводим EVENT в консоль
})

btn.addEventListener('mouseenter', (e) => { 
    console.log(e.target.remove()) // удаляем элемент при наведении
})


const deletElement = (e) => { 
    console.log(e.target.remove()) 
}

btn.addEventListener('click', deletElement)  // eventlistener через переменную

btn.removeEventListener('click', deletElement) // удаляем обработчик

let i = 0
const deletElement2 = (e) => { 
    console.log(e.target.remove()) 
    i++
    if (i === 1) {
        btn.removeEventListener('click', deletElement) 
    }
}

let overlay = document.querySelector('.overlay')

const deletElement3 = (e) => { 
    console.log(e.currentTarget) 
    console.log(e.type) 
    i++
    if (i === 1) {
        btn.removeEventListener('click', deletElement) 
    }
}
overlay.addEventListener('click', deletElement3)  



/* отменяем стандартное поведение браузера */

const link = document.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()

    console.log(event.target)
})



/* вешаем обработчки на несколько элементов */

btns.forEach(button => {
    addEventListener('click', deletElement)
});



addEventListener('click', deletElement, {once: true}) // {once: true} - говорит, что выполнить только 1 раз. Можно не цикл со счетчиком и удалять руками

/* child and parent */

console.log(document.body.childNodes) // childNodes возвращает коллекцию дочерних элементов данного элемента.

console.log(document.body.firstChild) // получаем первый элемент страницы из нод-списка
console.log(document.body.firstElementChild) // получаем первый элемент страницы
console.log(document.body.lastChild)  // получаем последний элемент страницы из нод-списка
console.log(document.body.lastElementChild)  // получаем последний элемент страницы

console.log(document.querySelector('#current').parentNode) // .parentNode возвращает родителя определённого элемента DOM дерева.
console.log(document.querySelector('#current').parentNode.parentNode) // поднимаемся выше

console.log(document.querySelector('#current').parentElement) //  возвращает элемент-родитель определённого элемента DOM дерева !! ИМЕННО ЭЛЕМЕНТ

console.log(document.querySelector('[data-current = "3"]')) // [] - получаем data-attribute
console.log(document.querySelector('[data-current = "3"]').nextSibling)  // nextSibling возвращает узел, непосредственно следующий за данным узлом в списке childNodes его родительского элемента
console.log(document.querySelector('[data-current = "3"]').previousSibling)  // получаем предыдущего "соседа"


console.log(document.querySelector('[data-current = "3"]').nextElementSibling)  // получаем след элемент !! ИМЕННО ЭЛЕМЕНТ
console.log(document.querySelector('[data-current = "3"]').previousElementSibling)  // получаем пред элемент !! ИМЕННО ЭЛЕМЕНТ

for (let node of document.body.childNodes) { // избавляемся от текстовых нод
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node)
}