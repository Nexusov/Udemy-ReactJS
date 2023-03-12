
// String: '', "", ``
// Number: NaN, infinity, 10, 0.5, 0.0001, -50, 4e10
// Boolean: true, false

let isBirthday: boolean = true
let age: number = 40
let userName: string = 'John'

if (isBirthday) {
   console.log(`Congrats ${userName}, age: ${age + 1}`)
}