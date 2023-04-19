

const userData = {
   isBirthdayData: true,
   ageData: 40,
   userNameData: 'John',
   messages: {
      error: 'Error'
   }
}

const userDateTuple: [boolean, number, string] = [true, 40, 'John'] // кортеж (tuple)
const userDateTupleWithSpread: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex'] 
const createError = (msg: string): never => { 
   throw new Error(msg)
}

function logBrtMsg({isBirthdayData, userNameData, ageData, messages: {error}}: {isBirthdayData: boolean, userNameData: string, ageData: number, messages: {error : string}}): string {
   if (isBirthdayData) {
      return `Congrats ${userNameData}, age: ${ageData + 1}`
   } else {
      return createError(error)
   }
}

logBrtMsg(userData)


/* type Config = { 
   protocol: 'http' | 'https';
   port: 3000 | 3001 
} 
 */
interface IConfig {
   protocol: 'http' | 'https';
   port: 3000 | 3001 
   log: (msg: string) => void
}

interface IROle {
   role: string
}

interface IConfigWithRole extends IConfig, IROle {}

/* 
type Role = {
   role: string
}

type ConfigWithRole = Config & Role
*/
const serverConfig: IConfigWithRole = {
   protocol: 'https',
   port: 3001,
   role: 'admin',
   log: (msg: string): void => console.log(msg)
}
/* 
const backupConfig: Config = {
   protocol: 'http',
   port: 3000
}
*/

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001, log: (msg: string) => void) => string 

const startMyServer: StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001, log: (msg: string) => void): 'Server started' => {
   log(`Server started on ${protocol}://server:${port}`)
   return 'Server started'
}

startMyServer(serverConfig.protocol, serverConfig.port, serverConfig.log)

type AnimationTimingFunction = 'ease' | 'ease-out' | 'ease-in'
type AnimationId = string | number

interface IStyles {
   [key: string]: string
}

const styles: IStyles = {
   position: 'absolute',
   top: '20px',
   left: '50px'
}

function makeAnimation(id: AnimationId, animationName: string, timingFunc: AnimationTimingFunction = 'ease', duration: number, iterCount: 'infinite' | number): void {
   const elem = document.querySelector(`#${id}`) as HTMLElement
   
   if (elem) {
      console.log(elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`) 
   }
}

makeAnimation('id', 'fade', 'ease-in', 5, 1)


interface IUserData {
   isBirthdayData: boolean,
   ageData: number,
   userNameData: string
}

const newUserData = '{isBirthdayData: true, ageData: 40, userNameData: "John"}'

const userObj: IUserData = JSON.parse(newUserData)
console.log(userObj.smt) // error


let isOkay = true
let movement: boolean | string = false

if (isOkay) {
   movement = 'moving'
}


interface IUser {
   readonly login: string,
   password: string,
   age: number,
   addr?: string // ? - means addr is optional 
   parents?: {
      mother?: string;
      father?: string
   }
}

const user: IUser = {
   login: 'first',
   password: 'qwerty',
   age: 50
}

user.login = 'test' // error

const userFreeze: Readonly<IUser> = {
   login: 'first',
   password: 'qwerty',
   age: 50
}

userFreeze.age = 'test' // error
userFreeze.password = 'test' // error

const dbName = '123'

function sendUserData(obj: IUser, db?: string): void {
   console.log(obj, db?.toLocaleLowerCase)
}


const basicPorts: readonly number[] = [3000, 3001, 5555 ]
basicPorts[0] = 5 // error

const basicPorts2: ReadonlyArray<number> = [3000, 3001, 5555 ]
basicPorts2[0]= 5 // error

const basicPortsTuple: readonly [number, ...string[]] = [3000, 'test', 'test']
basicPortsTuple[0] = 5 // error



enum Directions {
   TOP,
   RIGHT,
   LEFT,
   BOTTOM
}

enum TimingFunc {
   EASE = 'ease',
   EASE_IN = 'ease-in',
   LINEAR = 'linear'
}

enum TimingFuncTest {
   EASE = 1,
   EASE_IN = 2,
   LINEAR = EASE * 5
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
   if (dir === Directions.RIGHT) {
      console.log(tFunc) // linear
   }
}

frame('id', Directions.RIGHT, TimingFunc.LINEAR)



let smth: unknown
smth = 'Ivan'

let dataX: string[] = smth // error
dataX.find(e => e)

const someValue: any = 10
someValue.method() // no error

const someValueX: unknown = 10
someValueX.method() // error

function fetchData(data: unknown): void {
   if (typeof data == 'string') {
      console.log(data.toLowerCase) // no error
   }
   data.method() // error
}

const userDataX = '{isBirthdayData: true, ageData: 40, userNameData: "John"}'

function safeParse(s: string): unknown {
   return JSON.parse(s)
}
const parseData = safeParse(userDataX)
function transferData(d: unknown): void {
   if (typeof d === 'string') {
      console.log(d.toLowerCase)
   } else if (typeof d === 'object' && d) {
      console.log(userDataX)
   } else {
      console.error('Some Error')
   }
}

transferData(userDataX)

type T0 = any | unknown
type T1 = number | unknown
type T2 = any & unknown
type T3 = number & unknown