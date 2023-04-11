

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
