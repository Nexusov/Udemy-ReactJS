/* ==================== null and undefined ==================== */

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

/* =========================================================== */


/* ==================== symbol and bigint ==================== */

let id: symbol = Symbol('id')

const myData = {
   [id]: 1
} 

console.log(myData[id])


let num1: bigint = 1n
let num2: bigint = 2n

console.log(num1 + num2) // 3n
console.log(num1 + 5) // error

/* =========================================================== */


/* ==================== arrays ==================== */

const departments: string[] = ['dev', 'design', 'marketing']
const department = departments[0]
const report = departments.filter((item: string )=> item !== 'dev').map((item: string) => `${item} - done`)

const [first] = report
console.log(first) // design - done

const nums: number[] = [3, 5, 6]
const matrix: number[][] = [[3, 5, 6], [7, 8, 9,]]


/* ================================================= */


/* ==================== Union ==================== */

const message: string | number = 5
const messages: string[] | number[] = ['a', 'b']

function printMsg (msg: string | number): void {
   console.log(msg)
}
printMsg(4)
printMsg('hello')

/* ================================================= */