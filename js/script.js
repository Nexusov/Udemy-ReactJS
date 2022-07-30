let ads = document.querySelectorAll('.promo__adv img')
let poster = document.querySelector('.promo__bg')
let genre = poster.querySelector('.promo__genre')
let moviesList = document.querySelector('.promo__interactive-list')

console.log(moviesList)

/* Удалить все рекламные блоки */
ads.forEach((item) => {
    item.remove()
})

/* Поменять жанр на "Драма" */
genre.textContent = 'Драма'

/* Заменить постер */
poster.style.backgroundImage = 'url("/img/bg.jpg")'

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};


/* Сформировать список фильмов на основании объекта movieDB и отсортировать их по алфавиту. Добавить нумерацию */

moviesList.innerHTML = '' // очищаем список фильмов

movieDB.movies.sort() // сортируем фильмы по алфавиту

movieDB.movies.forEach((movie, i) => {
	moviesList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${movie}
        <div class="delete"></div>
    </li>
    `;
});


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