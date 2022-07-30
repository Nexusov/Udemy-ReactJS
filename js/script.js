document.addEventListener('DOMContentLoaded', () => {
	let ads = document.querySelectorAll('.promo__adv img');
	let poster = document.querySelector('.promo__bg');
	let genre = poster.querySelector('.promo__genre');
	let moviesList = document.querySelector('.promo__interactive-list');

	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...',
		],
	};


	/* Удалить все рекламные блоки */
    const deleteAdv = (arg) => {
        arg.forEach((item) => {
            item.remove();
        });
    }



    const makeChanges = () => {
        genre.textContent = 'Драма'; // Поменять жанр на "Драма"
        poster.style.backgroundImage = 'url("/img/bg.jpg")'; // Заменить постер 
    }


    /* сортировка фильмов */
    const sortArr = (arr) => {
        arr.sort(); // сортируем фильмы по алфавиту
    }

    /* добавить новый фильм пользователя в список */

	let addForm = document.querySelector('form.add');
	let addInput = addForm.querySelector('.adding__input'); 
    let checkbox = addForm.querySelector('[type = "checkbox"]')

	addForm.addEventListener('submit', (event) => { 
		event.preventDefault();
        
        let movieName = addInput.value

        if (movieName) { // проверка на пустую строку || value = '' - это false

            if (movieName.length > 21) { // троеточие в конце названия фильма, если в нем >21 символов
                movieName = `${movieName.substring(0, 22)}...`
            }

            const favorite = checkbox.checked
            if (favorite) {
                console.log('Фильм добавлен в любимые')
            }

            movieDB.movies.push(movieName);
            sortArr(movieDB.movies)
            createMovieList(movieDB.movies, moviesList)
        }
        event.target.reset() // очистка формы
	});


    createMovieList = (movies, parent) => { //  Формируем список фильмов на основании объекта movieDB и отсортировываем их по алфавиту. Добавляем нумерацию 
        parent.innerHTML = ''; // очищаем список фильмов

        sortArr(movieDB.movies)

        movies.forEach((movie, i) => {
			parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${movie}
                <div class="delete"></div>
            </li>
            `;
		});

        
        /* Удаление фильма, при нажатии на иконку мусорки */
        document.querySelectorAll('.delete').forEach((icon, i) => {
            icon.addEventListener('click', () => {
                icon.parentElement.remove(); // удаляем родительский элмент иконки - сам фильм
                movieDB.movies.splice(i, 1); // удаляем строчку из массива-бд ||| 1 - количество удаляемых элементов

                createMovieList(movies, parent)
            })
        })
    } 

    deleteAdv(ads)
    makeChanges()
    createMovieList(movieDB.movies, moviesList)




});
