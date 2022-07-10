let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastMovieName = prompt('Один из последних просмотренных фильмов?', '')
let howRate = +prompt('На сколько оцените его?', '')
let lastMovieName2 = prompt('Один из последних просмотренных фильмов?', '')
let howRate2 = +prompt('На сколько оцените его?', '')

personalMovieDB.movies[lastMovieName] = howRate
personalMovieDB.movies[lastMovieName2] = howRate2
