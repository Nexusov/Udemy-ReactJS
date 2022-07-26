
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim()

        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim()
        }
    },
    remeberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            let lastMovieName = prompt('Один из последних просмотренных фильмов?', '').trim()
            let howRate = +prompt('На сколько оцените его?', '')
        
            if (lastMovieName != null && lastMovieName != '' && howRate != null && howRate != '' && lastMovieName.length < 50) {
                personalMovieDB.movies[lastMovieName] = howRate
                console.log('DONE')
            } else {
                console.log('ERROR')
                i--
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман')
        } else {
            console.log('LEVEL ERROR')
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.private) {
            personalMovieDB.private = false
        } else {
            personalMovieDB.private = true
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase()
            if (genres === '' || genres === null) {
                console.log('Вы ввели некорректные данные')
                i--
            } else {
                personalMovieDB.genres = genres.split(', ')
                personalMovieDB.genres.sort()
            }
        } 

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    }
};


personalMovieDB.start()
personalMovieDB.writeYourGenres()
personalMovieDB.remeberMyFilms()
personalMovieDB.detectPersonalLevel()
personalMovieDB.showMyDB(personalMovieDB.private)






