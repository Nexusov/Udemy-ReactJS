'use strict';

const data = [
	{
		id: 'box',
		tag: 'div',
	},
	{
		id: '',
		tag: 'nav',
	},
	{
		id: 'circle',
		tag: 'span',
	},
];

try {
	data.forEach((blockObj, i) => {
		const block = document.createElement(blockObj.tag);

		if (!blockObj.id) {
			throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
		}

		block.setAttribute('id', blockObj.id);
		document.body.append(block);
	});
} catch (error) {
    if (error.name === 'SyntaxError') {
        console.log(error.message)
    } else throw error
    
    console.error(error.name)
    
    console.log(error.stack)
}

/* const err = new Error('Text');
const syntaxErr = new SyntaxError('SText');

console.log(err.name, err.message, err.stack); */
