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

//! Number.isInteger() проверка на целое число

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


