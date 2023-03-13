
// String: '', "", ``
// Number: NaN, infinity, 10, 0.5, 0.0001, -50, 4e10
// Boolean: true, false

let isBirthdayData: boolean = true
let ageData: number = 40
let userNameData: string = 'John'

function logBrtMsg(isBirthday: boolean, userName: string, age: number): void {
   if (isBirthday) {
      console.log(`Congrats ${userName}, age: ${age + 1}`)
   }
}

function logBrtMsg2(isBirthday: boolean, userName: string, age: number): string {
   if (isBirthday) {
      return `Congrats ${userName}, age: ${age + 1}`
   } else {
      return 'Error'
   }
}

const arrowlogBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
   if (isBirthday) {
      return `Congrats ${userName}, age: ${age + 1}`
   } else {
      return 'Error'
   }
}



logBrtMsg(isBirthdayData, userNameData, ageData)
logBrtMsg2(isBirthdayData, userNameData, ageData)
arrowlogBrtMsg(isBirthdayData, userNameData, ageData)
