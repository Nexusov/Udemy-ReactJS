const sum = (a, b) => a + b // pure function

console.log(sum(5, 10)) // 15
console.log(sum(5, 10)) // 15
console.log(sum(5, 10)) // 15


let num = 10

const sum2 = a => num += a // dirty function

console.log(sum2(5)) // 5
console.log(sum2(5)) // 10
console.log(sum2(5)) // 15