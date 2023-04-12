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


/* ==================== Union and Narrowing ==================== */

const message: string | number = 5
const messages: string[] | number[] = ['a', 'b']

function printMsg(msg: string | number): void {
   if (typeof msg === 'string') {
      console.log(msg.toLowerCase())
   } else {
      console.log(msg.toExponential())
   }
}
printMsg(4)
printMsg('hello')

function printMsg2(msg: string[] | number | boolean): void {
   if (Array.isArray(msg)) {
      msg.forEach(item => console.log(item))
   } else if (typeof msg === 'number') {
      console.log(msg.toFixed())
   } else {
      console.log(msg)
   }
}


const printReadings = (a: number | string, b: number | boolean) => {
   if (a === b) {
      console.log(a, b)
   }
}

const printReadings2 = (a: number[] | string) => {
   console.log(a.slice(0, 3))
}

const checkReadings = (readings: {system: number} | {user: number}): void => {
   if ('system' in readings) {
      console.log(readings.system)
   } else {
      console.log(readings.user)
   }
}

function logValue(x: string | Date) {
   if (x instanceof Date) {
      console.log(x.getDate())
   } else {
      console.log(x.toLowerCase())
   }
}


/* ================================================= */


/* ==================== Litral types ==================== */

let msg: 'Hello' = 'Hello'
msg = 'Hello'

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
   console.log(`Server started on ${protocol}://server:${port}`)
   return 'Server started'
}
startServer('https', 3001)


function createAnimation(id: string | number, animationName: string, timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease', duration: number, iterCount: 'infinite' | number): void {
   const elem = document.querySelector(`#${id}`) as HTMLElement
   
   if (elem) {
      console.log(elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`) 
   }
}

createAnimation('id', 'fade', 'ease-in', 5, 1)

/* ================================================= */
