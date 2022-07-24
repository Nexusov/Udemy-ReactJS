const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('TEST')
    }
}
options.makeTest()
console.log(Object.keys(options).length) // Сколько свойств в объекте

const {border, bg} = options.colors
console.log(border) // black

for (let key in options) {
	
	if (typeof options[key] === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
}

let counter = 0;

for (let key in options) {
    counter++
}
console.log(counter) // Сколько свойств в объекте с помощью цикла 




let array = [4, 6, 34, 100, 1]

array.sort((a, b) => { // сортировка массива по возрастанию
    return a - b
})
console.log(array) 

array.pop() // удалить последний элемент массива
array.push(521) // добавить новый элемент массива в конец

for (let i = 0; i < array.length; i++) { // вывод элементов массива с помощью for
    console.log(array[i])
}

for (let value of array) { // вывод элементов массива с помощью for of
    console.log(value)
}

array.forEach((item, i, array) => {
    console.log(`Индекс ${i}: элемент ${item} внутри массива ${array}`)
})

const str = prompt("", "")
const products = str.split(", ") // указываем разделитель
console.log(products)
console.log(products.join(';')) // указываем разделитель для создания строки
console.log(products.sort()) // сортировка по алфавиту