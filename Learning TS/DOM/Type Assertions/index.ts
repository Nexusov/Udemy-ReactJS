const box = document.querySelector('.box') as HTMLElement
box.style // no error
box?.classList // no error

const input = document.querySelector('input') as HTMLInputElement
const someNumber: number =  +input.value
console.log(someNumber) // 55

const someNumber2: number = input.value as any as number
console.log(someNumber2) // 55
console.log(someNumber2 * 2) // 110

const input2 = <HTMLInputElement>document.querySelector('input')