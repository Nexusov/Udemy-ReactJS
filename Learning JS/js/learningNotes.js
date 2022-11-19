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


//* =========== ДЕСКРИПТОРЫ СВОЙСТВ И ПОЛЕЗНЫЕ МЕТОДЫ ОБЪЕКТОВ ========================== */

// writable (если true, то свойство в объекте можно изменить)

// enumerable (если true, то свойство будет перечисляться в циклах)

// configurable (если true, то свойство можно удалить, а его атрибуты изменить)
const myUser = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(myUser, 'name')) // выводим флаги у name

Object.defineProperty(myUser, 'name', {writable: false}) // делаем флаг writable = false у объекта и теперь мы не можем поменять name у объекта
Object.defineProperty(myUser, 'gender', {value: 'male'}) // все флаги по дефолту false, потому что мы не указали их


Object.defineProperty(myUser, 'nickname', {value: prompt('Write your nickname here...'), enumerable: true, configurable: true}) // создали новое свойство у объекта со своими настройками флагов



Object.defineProperty(myUser, 'showMyPublicData', {enumerable: false}) // теперь showMyPublicData не показывается при перечислении свойств объекта циклом

for (const key in myUser) {
    console.log(key) // name, surname, birthday, НО НЕ ВЫВЕДЕТ showMyPublicData
}


Object.defineProperty(Math, 'PI') // у числа пи все флаги false по дефолту и его нельзя никак изменить


Object.defineProperties(myUser, {
    name: {writable: false},
    surname: {writable: true}
}) // сразу нескольким свойствам меняем флаги

//* ===================================================================================== */


//* =================================== MAP (КАРТА) =============================================== */


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50},
]

const myMap = new Map()


// Map.set() Создает ключ-значение, где ключ может быть объектом

myMap.set(shops[0], 5000)
console.log(myMap) // { { rice: 500 } => 5000 }


const budget = [9999, 3923, 1111]

shops.forEach((shop, i) => {
    myMap.set(shop, budget[i]) // заполнили карту с помощью цикла
});


// Map.get() получаем значение ключа

console.log(myMap.get(shops[0])) // 9999

// Map.has() проверяет на наличие внутри карты

console.log(myMap.has(shops[0])) // true
console.log(myMap.has(shops[10])) // false

// Map.size свойство карты, которое вернет кол-во элементов внутри карты

console.log(myMap.size ) // 3

// Map.delete() удяляет из карты по ключу

myMap.delete(shops[0])

// Map.clear() полностью очищает карту

myMap.clear()

// Map.keys() возвращает итерируемый объект по ключам

for (let key of myMap.keys()) {
    console.log(key)
}



const goods = []
for (let key of myMap.keys()) {
    goods.push(Object.keys(key)[0])
}
console.log(goods) //  rice, oil, bread


// Map.values() возвращает значение

for (let price of myMap.values()) {
    console.log(price) // 999, 3923, 1111
}

// Map.entries() возвращает итерируемый объект по парам вида [ключ, значение]

for (let price of myMap.entries()) {
    console.log(price) 
}

for (let [shop, price] of myMap.entries()) {
    console.log(shop, price) 
}



myMap.forEach((value, key, map) => {
    console.log(key, value) // еще способ перебора карты
})



const custoMap = new Map([
    [{paper: 400}, 8000] // так устроена Map внутри. Массив с массивами
])


// ПРЕВРАЩАЕМ ОБЪЕКТ В КАРТУ

const myPerson = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`)
    }
}

const personMap = new Map(Object.entries(myPerson))
console.log(personMap)


// ПРЕВРАЩАЕМ КАРТУ В ОБЪЕКТ

const newPersonObj = Object.fromEntries(personMap)
console.log(newPersonObj)

//* ===================================================================================== */



//* =================================== SET =============================================== */

const arr = [1, 1, 2, 2, 4, 5, 6, 5]

const mySet = new Set(arr) 
console.log(mySet) // { 1, 2, 4, 5, 6 } Значения без повторений! 


const names = ['Alex', 'Ann', 'Oleg', 'Alex', 'Oleg', 'Ann']

const myNameSet = new Set(names) 
console.log(myNameSet) // { 'Alex', 'Ann', 'Oleg' } Значения без повторений! 


// Фильтруем массив на повторы с помощью Set и обратно превращаем в массив
function unique(arr) {
    return Array.from(new Set(arr))
}
console.log(unique(arr)) // [ 1, 2, 4, 5, 6 ]


// Set.add() Добавляет новое уникальное значение

myNameSet.add('Ivan')
myNameSet.add('Alex')
console.log(myNameSet) // { 'Alex', 'Ann', 'Oleg', 'Ivan' }

// Set.delete() удаляет значение

myNameSet.delete('Alex')
console.log(myNameSet) // { 'Ann', 'Oleg', 'Ivan' } 

// Set.has() проверяет на наличие значения

console.log(myNameSet.has('Ann')) // true

// Set.size свойство, которое возвращает размер set

console.log(myNameSet.size) // 3

// Set.clear() полностью очищает set

myNameSet.clear()
console.log(myNameSet) // myNameSet пустой

// ПЕРЕБОР SET'a

for (const value of myNameSet) {
    console.log(value)
}

myNameSet.forEach((value, value2, set) => {
    console.log(value, value2) // Ann Ann, Oleg Oleg, Ivan Ivan
    console.log(value) // Ann, Oleg, Ivan
})


// Set.values() и Set.keys() возвращают значения set

console.log(myNameSet.values()) // { 'Ann', 'Oleg', 'Ivan' }

console.log(myNameSet.keys()) // { 'Ann', 'Oleg', 'Ivan' }


//* ======================================================================================= */


//* ======================================= WeakMap ======================================= */

let user = {
    name:'Ivan'
}

let myNewMap = new kMap()

myNewMap.set(user,'data')

user = null // удаляем объект из памяти

console.log(myNewMap.has(user)) // true (объект не удалился)



let weakUser = {
    name:'Ivan'
}

let myWeakMap = new WeakMap()

myWeakMap.set(weakUser,'data')

weakUser = null // удаляем объект из памяти

console.log(myWeakMap.has(weakUser)) // false (объект удалился)




let cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) { // если пользователя нет внутри кэша
        cache.set(user, Date.now())
    }

    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena)) // false 
console.log(cache.has(alex)) // true




//* =============== WeakSet ============== */

// WeakSet поддерживает только .add(), .has(), .delete()

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Anton'},
    {text: 'okay', from: 'Yegor'},
]

let readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])

readMessages.add(messages[0]) // не добавится еще раз в weakSet 


messages.shift() // удаляем первый объект

//* ======================================================================================= */




//* ======================================= Date ======================================= */

// месяцы считаются с нуля. То есть январь - нулевой месяц

const now = new Date()

console.log(now) // 2022-10-24T17:50:04.602Z

console.log(now.getFullYear()) // 2022
console.log(now.getMonth()) // 9
console.log(now.getDate()) // 24
console.log(now.getDay()) // 2 (день недели, начиная с воскресенья = 0)
console.log(now.getHours()) // 17
console.log(now.getUTCHours()) // 21
console.log(now.getTime()) // 1666646880550 (время в милисекундах с 1970)
console.log(now.getTimezoneOffset()) // -180 (разница между часовым поясом и UTC в минутах) 

now.setHours(18) // поменял часы на 18
now.setMinutes(45) // поменял минуты на 45
now.setHours(18, 45) // поменял время на 18ч 45м


const customDate = new Date('2222-12-22')
console.log(customDate) // 2222-12-22T00:00:00.000Z

const commaDate = new Date(2020, 5, 1, 20)
console.log(commaDate) // 2020-06-01T17:00:00.000Z

const oldDate = new Date(0)
console.log(oldDate) // 1970-01-01T00:00:00.000Z

const veryOldDate = new Date(-9999999999)
console.log(veryOldDate) // 1969-09-07T06:13:20.001Z



let start = new Date()

for (let i = 0; i < 100000; i++) {
    let some = i ** 3
}

let end = new Date()
console.log(`Цикл отработал за ${end - start} милисекунд`)

//* ==================================================================================== */


//* =================================== Classes & Constructors & this ===================================== */

// classes
function User(name, id) {
    this.name = name
    this.id = id
    this.human = true

    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

class User { // тоже самое на классах
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true
    }

    hello() {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.join = function() {
    console.log(`User ${this.name} is here`)
}

const ivan = new User('Ivan', 28)
const anton = new User('Anton', 22)

console.log(ivan)
console.log(anton)

ivan.hello()
anton.hello()

ivan.join()
anton.join()


class Rectangle {
    constructor(height, width) { // в конструктор аргументы приходят из вне
        this.height = height
        this.width = width
    }

    calcArea() {
        return this.height * this.width
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width) // super для того, чтобы не копировать this.height = height и this.width = width еще раз из родительского класса Rectangle

        this.text = text
        this.bgColor = bgColor
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red')
div.showMyProps() 
console.log(div.calcArea()) // метод calcArea тоже есть у div

const square = new Rectangle(10, 10)
console.log(square.calcArea()) // 100

const long = new Rectangle(20, 100)
console.log(long.calcArea()) // 2000

// this

/* 
    1) Если мы используем метод внутри объекта, то контекст вызова this будет ссылаться на сам объект (т.е. контекст = сам объект)
    2) this в конструкторах и классах - это новый экземпляр объекта
    3) Ручная привязка this: call, apply, bind
*/

function showThis() {
    console.log(this)
}

showThis() // Window, если нет строго режима || undefined, если есть 'use strict'

function showThis2(a, b) {
    console.log('Контекст вызова функции showThis2: ' + this) // Window, если нет строго режима || undefined, если есть 'use strict'
    function sum() {
        console.log('Контекст вызова функции sum: ' + this) // Window, если нет строго режима || undefined, если есть 'use strict'
        return a + b
    }
    console.log(sum())
}
showThis2(5, 1)

const myObject = {
    a: 20,
    b: 15,

    sum : function() {
        console.log(this) // выведет весь объект
        function shout() {
            console.log(this) // Window, если нет строго режима || undefined, если есть 'use strict'
        }
        shout()
    }
}
myObject.sum()



function sayName(surname) {
    console.log(this) // {name" 'John'}
    console.log(this.name) // John
    console.log(this.name + surname) // JohnGrashin
}

const human = {
    name: 'John'
}  

sayName.call(human, 'Grashin') // передаем контекст вызова 
sayName.apply(human, ['Grashin']) 

/* .call и .apply делают одно и тоже, но в apply аргументы пишутся в массиве */

function count(num) {
    return this * num
}

const double = count.bind(2) // double - новая функция с жестко привязанным контекстом

console.log(double(3)) // 6


const myObj = {
    number: 5,

    sayNumber: function name() {
        const say = () => console.log(this) // { number: 5, sayNumber: [Function: name] } вернет объект, так как у стрелочной функции нет своего контекста
        console.log(this.number) // 5
        say()
    }
}

myObj.sayNumber() 

const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    console.log(this) // <button></button>, (то есть сам элемент, на котором произошло событие, так как функция не стрелочная)
    this.style.backgroundColor = 'red' // цвет кнопки поменяется на красный
})

btn.addEventListener('click', () => {
    this.style.backgroundColor = 'red' // undefined и цвет не поменяется, так как у стрелочной функции нет контекста
})


const newDouble = a =>  a * 2 // const newDouble = (a) => { return a * 2 } - длинная запись

//* =========================================================================================== */



//* ===================================== Rest ================================================ */

/* 
    1) rest записывается всегда последним в параметрах
*/

const log = function(a, b, ...rest) { 
    console.log(a, b, rest)
}

log('aa', 'bb', 'rest1', 'rest2') // aa bb [ 'rest1', 'rest2' ]


function calcOrDuoble(number, basis = 2) { // basis по умолчанию имеет значение 2
    console.log(number * basis)
}
calcOrDuoble(3, 5) // 15
calcOrDuoble(3) // 6

//* =========================================================================================== */


//* ===================================== JSON ================================================ */

/* 
    1) в JSON все ключи и значения пишутся обязятаельно в ДВОЙНЫХ КАВЫЧКАХ! 
*/

const person = {
    name : 'Alex',
    tel : '+79999999999'
}

let objToJSON = JSON.stringify(person) // конвертируем js-объект в json 
console.log(objToJSON) // {"name":"Alex","tel":"+79999999999"}

let JSONtoObj = JSON.parse(objToJSON) // конвертируем JSON в js-объект
console.log(JSONtoObj) // { name: 'Alex', tel: '+79999999999' }

const deepPerson = {
    name : 'Alex',
    tel : '+79999999999',
    parents: {
        mom: 'Olga',
        dad: 'Ivan'
    }
}

const clone = JSON.parse(JSON.stringify(deepPerson)) // глубокое копирование объекта с помощью JSON

clone.parents.mom = 'Kate'

console.log(deepPerson) // {name: 'Alex',tel: '+79999999999',parents: { mom: 'Olga', dad: 'Ivan' }} mom не поменялся
console.log(clone) // {name: 'Alex',tel: '+79999999999',parents: { mom: 'Kate', dad: 'Ivan' }}  mom поменялся

//* =========================================================================================== */



//* ===================================== Promise ================================================ */

// resolve

console.log('Запрос данных')

const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			prcie: 2000,
		};

        resolve(product)
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 2000);
	});
}).then((data) => {
    data.modify = true
    return data
}).then((data) => {
    console.log(data);
}).finally(() => {
    console.log('Finilly')
})


// reject
const reqJ = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			prcie: 2000,
		};
        reject(product)
	}, 2000);
});

reqJ.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			reject(product);
		}, 2000);
	});
}).then((data) => {
    data.modify = true
    return data
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка!')
})


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    })
}
test(1000).then(() => console.log('1000 ms'))
test(2000).then(() => console.log('2000 ms'))



Promise.all([test(1000), test(2000)]).then(() => { // выведет All, если все промисы в массиве сработали
    console.log('All')
})

Promise.race([test(1000), test(2000)]).then(() => { // выведет All, если любой промис сработает
    console.log('All')
})


//* ============================================================================================== */


//* ======================================== Fetch API ====================================================== */

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(response => response.json()) // .json встроенный в fetch метод, который парсит json в js-объект
    .then(json => console.log(json))



//* ========================================================================================================= */




//* ======================================== Array Iteration (extra) ====================================================== */

// filter

const myNames = ['Ivan', 'Ann', 'Ksenia', 'Voldemart']

const shortNames = myNames.filter((name) => {
    return name.length < 5
})
console.log(shortNames) // [ 'Ivan', 'Ann' ]


// map

const answers = ['IvAn', 'AnNA', 'Hello']

const mapAnswers = answers.map((item) => {
    return item.toLowerCase()
}) 
console.log(mapAnswers) // [ 'ivan', 'anna', 'hello' ]


// some

const something = [4, 'qdas', 'fsdfsd']

console.log(something.some(item => { // true (возвращает true, если хоть один элемент попадает под условие)
    return typeof(item) === 'number'
}))


// every

const something2 = [4, 'qdas', 'fsdfsd']

console.log(something2.every(item => { // false (возвращает true, если все элементы попадают под условие)
    return typeof(item) === 'number'
}))


// reduce 

const myArr = [4, 5, 1, 3, 2, 6]

const res = myArr.reduce((sum , current) => sum + current)
console.log(res) // 21 (сумма всех элементов массива)



const fruits = ['apple', 'pear', 'orange']

// const fruitsRes = fruits.reduce((sum , current) => sum + ', ' + current)
const fruitsRes = fruits.reduce((sum , current) => `${sum}, ${current}`)
console.log(fruitsRes) // apple, pear, orange

const fruitsRes2 = fruits.reduce((sum , current) => `${sum}, ${current}`, 'Default') // 2й аргумент задает начальное значение
console.log(fruitsRes2) // Default, apple, pear, orange



const testObj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
}

const newArray = Object.entries(testObj)
    .filter(item => {
        return item[1] === 'person'
    })
    .map(item => {
        return item[0]
    })
console.log(newArray) // [ 'ivan', 'ann' ] (отфильтровали person от animal)



//* ============================================================================================================================ */


//* ===================================================  LocalStorage ========================================================================= */

localStorage.setItem('number', 5) 

localStorage.getItem('number')
console.log(localStorage.getItem('number')) // 5

localStorage.removeItem('number')

localStorage.clear()


const localPerson = {
    name: 'Alex',
    age: 25
}

const serializedPerson = JSON.stringify(localPerson)
localStorage.setItem('alex', serializedPerson)

console.log(JSON.parse(localStorage.getItem('alex'))) // {name: 'Alex', age: 25}

//* =========================================================================================================================================== */



//* ========================================================= RegExp ================================================================================== */

/* 
    search() всегда ищет только первое совпадение    
    test() вернет true, если найдет хоть одно совпаденеи

    . - все элементы, которые попадут в строку

    Флаги:
    1) i - внезависимости от регистра
    2) g - поиск сразу нескольких вхождений
    3) m - многострочный режим

    Классы: 
    1) \d - цифры
    2) \w - буквы
    3) \s - пробелы

    4) \D - не числа
    5) \W - не буквы
*/

new RegExp('pattern', 'flags')
/pattern/f // короткая запись


const testName = 'Ann'
const testName1 = 'ANN'
const testName2 = 'Olga'

const reg = /n/ 

console.log(testName.search(reg)) // 1
console.log(testName2.search(reg)) // -1

const regI = /n/i
const regIG = /n/ig

console.log(testName1.search(regI)) // 1

console.log(testName1.match(regIG)) // [ 'N', 'N' ]


// replace()

const pass = 'Password'
const passDot = 'P.a.s.s.w.o.r.d'

console.log(pass.replace(/./g, "*")) // ********
console.log(passDot.replace(/\./g, "*")) // P*a*s*s*w*o*r*d


console.log('12-34-56'.replace(/-/g, ':')) // 12:34:56


// test()

const regTest = /n/ig
const nameTest = 'Anton'
const nameTest2 = 'Yegor'

console.log(regTest.test(nameTest)) // true
console.log(regTest.test(nameTest2)) // false


// match()

const regNumbers = /\d/ig
const numbersReg = '1dfdf434232dghLKLklg'

console.log(numbersReg.match(regNumbers)) // ['1', '4', '3', '4', '2', '3', '2']


const strr = 'My name is R2D2'

console.log(strr.match(/\w\d\w\d/i)) // [ 'R2D2', index: 11, input: 'My name is R2D2', groups: undefined ]

//* =================================================================================================================================================== */



//* ============================================ Getters and Setters ================================================================ */

const man = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age
    },
    
    set userAge(num) {
        this.age = num
    }
}
console.log(man.userAge) // 25 (если внутри функции get/set, то скобки у функции не нужны)
console.log(man.userAge = 30) // 30 



//* ================================================================================================================================= */



//* ================================================= Encapsulation ================================================================= */

function Man(name, age) {
    this.name = name
    let userAge = age

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст ${userAge}`)
    }

    this.getAge = function() {
        return userAge
    }

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age
        } else {
            console.log('Недопустимое значение!')
        }
    }
}

const oleg = new Man('Oleg', 27)
console.log(oleg.name) // Oleg
console.log(oleg.getAge()) // 27

oleg.setAge(30) 
oleg.setAge(300) // Недопустимое значение!
console.log(oleg.getAge()) // 30

oleg.say() // Имя пользователя Oleg, возраст 30


// инкапсуляция на классах
class Woman {
    constructor(name, age) {
        this.name = name
        this._age = age
    }
    
    #surname = 'Smirnova'

    say = () => {
        console.log(`Имя пользователя ${this.name}${this.#surname}, возраст ${this._age}`)
    }

    get age() {
        return this._age
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age
        } else {
            console.log('Недопустимое значение!')
        }
    }
}

const katya = new Woman('Katya', 27)
console.log(katya.surname) // undefined
katya.say() // Имя пользователя KatyaSmirnova, возраст 27

//* ================================================================================================================================= */


//* ========================================================== Error Handling ======================================================================= */

try {
    console.log('Normal')
    console.log(vardoesntExist)
    console.log('result')
} catch (error) {
    console.log(error) // ReferenceError: vardoesntExist is not defined
    console.log(error.name) // ReferenceError
    console.log(error.message) // vardoesntExist is not defined
    console.log(error.stack) // ReferenceError: vardoesntExist is not defined
} finally {
    console.log('it works anyway')
}


console.log('Still okay')

//* ================================================================================================================================================= */


//* =========================================================== Generator Function ================================================================== */

function* generator() {
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const genStr = generator()

console.log(genStr.next()) // { value: 'S', done: false }
console.log(genStr.next()) // { value: 'c', done: false }
console.log(genStr.next()) // { value: 'r', done: false }
console.log(genStr.next()) // { value: 'i', done: false }
console.log(genStr.next()) // { value: 'p', done: false }
console.log(genStr.next()) // { value: 't', done: false }
console.log(genStr.next()) // { value: undefined, done: true }

console.log(genStr.next().value) // получаем только значение value, без done



function* count(number) {
    for (let i = 0; i < number; i++) {
        yield i
    }
}

const genCounter = count(7)

console.log(genCounter.next().value) // 0
console.log(genCounter.next().value) // 1 
console.log(genCounter.next().value) // 2 


for (let k of count(7)) {
    console.log(k) // 0 1 2 3 4 5 6 
}

//* ================================================================================================================================================= */

