const test: null = null
const test2: any = null
const test3: string = null // error
const test4: number = null // error

const test5: undefined = undefined
const test6: any = undefined
const test7: string = undefined // error

function getRndData() {
   if (Math.random() < 0.5) {
      return null
   } else  {
      return '   Some data   '
   }
}

const data = getRndData()
const trimmedData = data.trim() // error, coz can be null
const trimmedDataWorks = data ? data.trim() : null



let id: symbol = Symbol('id')

const myData = {
   [id]: 1
} 

console.log(myData[id])


let num1: bigint = 1n
let num2: bigint = 2n

console.log(num1 + num2) // 3n
console.log(num1 + 5) // error

