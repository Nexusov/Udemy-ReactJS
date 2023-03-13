
let isBirthdayData: boolean = true
let ageData: number = 40
let userNameData: string = 'John'

const createError = (msg: string): never => { 
   throw new Error(msg)
}

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
   if (isBirthday) {
      return `Congrats ${userName}, age: ${age + 1}`
   } else if (isBirthday === false) {
      return 'Too bad'
   }
   return createError('Error')
}


logBrtMsg(isBirthdayData, userNameData, ageData)
