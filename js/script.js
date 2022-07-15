let numberOfFilms

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function start() {
    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
    let x = document.getElementsByTagName(body)
    x.style.color = red;
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.private)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}

writeYourGenres()

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovieName = prompt('Один из последних просмотренных фильмов?', '')
        let howRate = +prompt('На сколько оцените его?', '')
    
        if (lastMovieName != null && lastMovieName != '' && howRate != null && howRate != '' && lastMovieName.length < 50) {
            personalMovieDB.movies[lastMovieName] = howRate
            console.log('DONE')
        } else {
            console.log('ERROR')
            i--
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман')
    } else {
        console.log('LEVEL ERROR')
    }
}

start()
remeberMyFilms()
detectPersonalLevel()







