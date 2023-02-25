import current from '../calculator/calc/js/current.json';
/* 
Написать код, который нарисует пирамидку из звездочек
*/

function pyramide() {
    const lines = 5;
    let result = ''; 
    
    let star = '*';
    let k = 5;
    let a = 1;

    for (let i = 0; i <= lines; i++) {
        for (let space = 0; space < k; space++) {
            result += ' ';
        }
        for (let starsCount = 0; starsCount < a; starsCount++) {
            result += star;
        }
        result += '\n';
        k--;
        a += 2;
    }
    console.log(result)
}


/* 
Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба. 
Эта функция принимает в себя целое число со значением длины ребра куба. 
Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла
ошибка" 
*/

//!    Number.isInteger() проверка на целое число

function calculateVolumeAndArea(cubeWidth) {
    if (cubeWidth < 0 || typeof(cubeWidth) === 'string' || !Number.isInteger(cubeWidth)) { 
        console.log('При вычислении произошла ошибка')
        return 'При вычислении произошла ошибка'
    } else {
    let cubeVolume = Math.pow(cubeWidth, 3)
    console.log(`Обьем куба: ${cubeVolume}`)

    let cubeSurface = 6 * Math.pow(cubeWidth, 2)
    console.log(`Площадь поверхности куба: ${cubeSurface}`)
    }
}


/* 
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 
Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
*/

function getCoupeNumber(placeNumber) {
    if (!Number.isInteger(placeNumber) || typeof(placeNumber) === 'string' || placeNumber < 0 ) {
        console.log('Ошибка. Проверьте правильность введенного номера места')
    } else if (placeNumber === 0 || placeNumber > 36) {
        console.log('Таких мест в вагоне не существует')
    } else {
        let coupeNumber = Math.ceil(placeNumber / 4)
        console.log(`Ваш номер купе: ${coupeNumber}`)
    }
}


/* 
Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число,
дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
*/

function getTimeFromMinutes(value) {
    if (Number.isInteger(value) && typeof(value) === 'number' && value >=0) {
        let hours = Math.floor(value / 60) 
        let minutes = value % 60
        let lastDigitalHours = hours % 10
        let lastDigitalMinutes = minutes % 10
        let hoursStr, minutesStr
        
        switch (lastDigitalHours) {
            case 1:
                hoursStr = 'час'
                break;
            case 2:
            case 3:
            case 4:
                hoursStr = 'часа'
                break
            default: hoursStr = 'часов'
        }
    
        switch (lastDigitalMinutes) {
            case 1:
                minutesStr = 'минута'
                break;
            case 2:
            case 3:
            case 4:
                minutesStr = 'минуты'
                break
            default: minutesStr = 'минут'
        }
    
        console.log(`Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`)
    } else console.log('Ошибка, проверьте данные')
}


/* 
Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является
числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
*/

function findMaxNumber(num1, num2, num3, num4) {
    if (typeof(num1) === 'number' && typeof(num2) === 'number' && typeof(num3) === 'number' && typeof(num3) === 'number') {
        console.log(Math.max(num1, num2, num3, num4))  
    } else console.log(0)
}


/* 
* ФИБОНАЧЧИ
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в
которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть 'ERROR'. Решать без применения рекурсии.
*/

function fib(count) {
    if (!Number.isInteger(count) || typeof(count) === 'string' || isNaN(count) || count < 1) {
        console.log('ERROR')
    } else if (count === 1) {
        console.log('0')
    } else {
        let array = [0 , 1]
        result = '0 1'
        for (let i = 2; i < count; i++) {
            array[i] = array[i - 1] + array[i - 2];
            result = result + ` ${array[i]}`
        }
        console.log(result)
    }
}



/* 
Напишите функцию, которая вычисляет факториал, используя рекурсию
*/

function factorial(number) {
    if (typeof(number) !== 'number' || !Number.isInteger(number)) {
        return 'Некорректное число'
    }

    if (number >= 1) {
        return number * factorial(number - 1)
    } else {
        return 1
    }
}
console.log(factorial(5))  

function factorialShort(number) { // КОРОТКОЕ РЕШЕНИЕ, НО МОЖЕТ ПРИНЯТЬ ОТРИЦАТЕЛЬНОЕ ЗНАЧЕНИЕ И ТЕКСТ
    return number ? number * factorialShort(number - 1) : 1;
}

console.log(factorialShort(5))



/* 
Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке
*/

const someString = 'This is some strange string';

function reverse(str) {
    let reverseArray = str.split(' ').reverse()
    let reverseStr = ''
    reverseArray.forEach((word) => {
        let reverseWord = word.split('').reverse()
        reverseStr = reverseStr + `${reverseWord.join('')} `
    })
    console.log(reverseStr)
}
reverse(someString)


/* 
У вас есть список учеников, которые хотят поиграть в игру.
Но команд может быть только 3 по 3 человека. Напишите Функцию, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Oleg'];

function sortStudentsByGroups(arr) {
    let team1 = [], team2 = [], team3 = [],
        leftStudents = []

    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            team1.push(arr[i]);
        } else if (i < 6) {
            team2.push(arr[i]);
        } else if (i < 9) {
            team3.push(arr[i]);
        } else {
            leftStudents.push(arr[i]);
        }
    }
    console.log([team1, team2, team3, `Оставшиеся студенты: ${leftStudents.length === 0 ? '-' : leftStudents.join(', ')}`])
}
sortStudentsByGroups(students)


/* ========================Ресторан===================================== */
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};



/* 
    Вывести 'Закрыто', если openNow === true, иначе вывести 'Открыто'
*/
function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}
console.log(isOpen(restorantData.openNow))



/* 
    Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать со средним чеком averageLunchPrice
*/

random1 = Math.floor(Math.floor(Math.random() * 4))
random2 = Math.floor(Math.floor(Math.random() * 4))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    while (random1 === random2) {
        random2 = Math.floor(Math.floor(Math.random() * 4))
    }

    if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[random1], restorantData.menu[random2], restorantData.averageLunchPrice));


/* 
    Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Сейчас эта функция должна менять данные про официантов. 
Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! 
В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
*/

function transferWaitors(data) {
    const copy = Object.assign({}, data);

//  copy.waitors[0] = {name: 'Mike', age: 32}; БЫЛО
    copy.waitors = [{name: 'Mike', age: 32}]; // СТАЛО
    return copy;
}

console.log(transferWaitors(restorantData))



/* ======================================================================== */


/* ================================= Movies ======================================= */

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];


/* 
    У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, 
    а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
*/

function showGoodFilms(arr) {
	return arr.filter(item => item.rating >= 8)
}


/* 
    Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
*/

function showListOfFilms(arr) {
	return arr.map(item => item.name).join(', ')
}


/* 
    Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, 
    но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
*/

function setFilmsIds(arr) {
    return arr.map((item, i) => {
        item.id = i
        return item
    })
}


/* 
    Запишите результат предыдущей функции в переменную tranformedArray. 
    Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true
*/


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => ('id' in item))
}

/* ======================================================================== */


/* ============================== Markets ========================================== */

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];


/* 
    У вас есть небольшой массив с данными о доходах каждой торговой точки. 
    Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
*/

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, current) => acc + current.amount, 0)
};


/* 
    Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. 
    Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений (число). 
    Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
*/

const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, current) => acc + current.amount, 0) : getPositiveIncomeAmount(data)
};

/* ======================================================================== */


/* 
    В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется 
    путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге.
*/


function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;

        if (result.length === summary) {
            n = i;
            break;
        }
    }

    return n;
}



/* 
    Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. 
    Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
    Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.
*/

function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}


/* 
    Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, 
    включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет
*/

function deepCount(a){
    let count = a.length;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            count += deepCount(a[i]);
        }
    }

    return count;
}