let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
let lastMovieName, howRate

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 1; i <= 2; i++) {
    lastMovieName = prompt('Один из последних просмотренных фильмов?', '')
    howRate = +prompt('На сколько оцените его?', '')

    if (lastMovieName != null && lastMovieName != '' && howRate !== null && howRate !== '' && lastMovieName.length > 50 && howRate.length > 50 ) {
        personalMovieDB.movies[lastMovieName] = howRate
    } else {
        console.log('ERROR')
        i--
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB >= 10 && personalMovieDB <= 30) {
    console.log('Вы классический зритель')
} else if (personalMovieDB > 30) {
    console.log('Вы киноман')
} else {
    console.log('ERROR')
}

