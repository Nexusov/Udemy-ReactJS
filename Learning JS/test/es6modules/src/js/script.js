import { one, two } from './main.js'; // первый вариант импорта

console.log(`${one} and ${two}`) 


import * as data from './main.js' // второй вариант импорта

console.log(`${data.one} and ${data.two}`) 
data.sayHi()

import sayBye from './main.js' // импорт дефолтной функции
sayBye()