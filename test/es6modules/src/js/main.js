export let one = 1 // один вариант экспорта

let two = 2 

export {two} // второй вариант экспорта

export function sayHi() { // третий вариант экспорта
    console.log('Hello')
}

export default function sayBye() { // четвертый вариант экспорта
    console.log('Bye')
}