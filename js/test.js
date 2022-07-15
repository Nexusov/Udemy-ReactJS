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