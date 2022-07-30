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

