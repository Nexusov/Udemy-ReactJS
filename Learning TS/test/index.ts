

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