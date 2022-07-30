const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('TEST')
    }
}
options.makeTest()
console.log(Object.keys(options).length) // Сколько свойств в объекте

const {border, bg} = options.colors
console.log(border) // black

for (let key in options) {
	if (typeof options[key] === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
}

let counter = 0;

for (let key in options) {
    counter++
}
console.log(counter) // Сколько свойств в объекте с помощью цикла 




let array = [4, 6, 34, 100, 1]

array.sort((a, b) => { // сортировка массива по возрастанию
    return a - b
})
console.log(array) 

array.pop() // удалить последний элемент массива
array.push(521) // добавить новый элемент массива в конец

for (let i = 0; i < array.length; i++) { // вывод элементов массива с помощью for
    console.log(array[i])
}

for (let value of array) { // вывод элементов массива с помощью for of
    console.log(value)
}

array.forEach((item, i, array) => {
    console.log(`Индекс ${i}: элемент ${item} внутри массива ${array}`)
})

const str = prompt("", "")
const products = str.split(", ") // указываем разделитель
console.log(products)
console.log(products.join(';')) // указываем разделитель для создания строки
console.log(products.sort()) // сортировка по алфавиту



let a = 5
    b = a;

b = b + 5
console.log(b) // 10
console.log(a) // 5

const obj = {
    a: 5,
    b: 1
}

const copy = obj
copy.a = 10

console.log(obj) 
console.log(copy) // copy и obj идентичны, хотя меняли а только в copy

function copyObj(mainObj) {
    let objCopy = {}
    
    for (const key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copyObj(numbers)
numbers.a = 50
numbers.c.x = 100
console.log(numbers) // a = 50, х = 100
console.log(newNumbers) // a = 2, но тоже х = 100 (получилась поверхностная копия)


const add = {
    d: 17,
    e: 20
}
console.log(Object.assign(numbers, add)) // соединили 2 объекта


const clone = Object.assign({}, add)
clone.d = 20

console.log(add) // d = 17, e = 20
console.log(clone) // d = 20, e = 20



const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice()
console.log(newArray) // копия oldArray

const letters = ['a', 'b']
const newLetters = [...letters] // копия letters вместо метода .slice()


newArray[1] = 'klsdflkds'
console.log(newArray) // [ 'a', 'klsdflkds', 'c' ]
console.log(oldArray) // [ 'a', 'b', 'c' ]


const video = ['YouTube', 'Vimeo', 'Twitch']
const blogs = ['WordPress', 'LiveJournal', 'blogger']
const internet = [...video, ...blogs, 'instagram', 'telegram']
console.log(internet) // соединили 2 массива в 3й и еще добавили свои данные


function log(a, b, c) {
    console.log(a, b, c)
}
const num = [2, 5, 7]

log(num) // [ 2, 5, 7 ] undefined undefined
log(...num) // 2 5 7

const numbersObject = {
    one: 1,
    two: 2
}

const newNumbersObject = {...numbersObject}
console.log(newNumbersObject) // копия numbersObject без всяких там циклов и тп



const soldier = {
    health: 400,
    armor: 50
}

const Oleg = {
    health: 100,
}

Oleg.__proto__ = soldier; // устаревший формат создания прототипа

// СОВРЕМЕННЫЙ ФОРМАТ ПРОТОТИПИРОВАНИЯ:
Object.setPrototypeOf(Oleg, soldier) // прототипируем, уже имеющийся объект Oleg

const Vasya = Object.create(soldier) // создали новоый объект Vasya, который прототипно наследуется от solier 

console.log(Oleg.health) // 400
console.log(Vasya.armor) // 50


/* Рекурсия */

function pow(number, power) { // функция возведения в степень без рекурсии
    let result = 1

    for (let i = 0; i < power; i++) {
        result = number * result
    }
    return result

}
function pow(number, power) { // функция возведения в степень с помощью рекурсии
    if (power === 1) {
        return number
    } else {
        return number * pow(number, power - 1)
    }
}


let students = {
    js: [
        {
            name: 'John',
            progress: 100
        },
        {
            name: 'Ivan',
            progress: 60
        }
    ],

    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20
            }, 
            {
                name: 'Ann',
                progress: 18
            }
        ],
        pro: [
            {
                name: 'Sam',
                progress: 10
            }
        ]
    }
}

function getTotalProgressByIteration(data) { // получаем средний результат студентов без рекурсии
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) { // проверяем на массив
            students += course.length

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress
            }
        } else {
            for (let subScourse of Object.values(course)) {
                students += subScourse.length

                for (let i = 0; i < subScourse.length; i++) {
                    total += subScourse[i].progress
                }
            }
        }
    }

    return total / students
}
console.log(getTotalProgressByIteration(students))

function getTotalProgressByRecursion(data) { // получаем средний результат студентов c помощью рекурсии
    if (Array.isArray(data)) { 
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress
        }

        return [total, data.length]
    } else {
        let total = [0, 0]

        for (let subData of Object.values(data)) {
            const subDataArray = getTotalProgressByRecursion(subData)
            total[0] += subDataArray[0]
            total[1] += subDataArray[1]
        }
        return total
    }
}
const result = getTotalProgressByRecursion(students)
console.log(result[0] / result[1])