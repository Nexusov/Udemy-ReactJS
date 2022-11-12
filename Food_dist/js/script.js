window.addEventListener('DOMContentLoaded', () => {
	const tabs = require('./modules/tabs');
	const modal = require('./modules/modal');
	const calculator = require('./modules/calculator');
	const cards = require('./modules/cards');
	const forms = require('./modules/forms');
	const slider = require('./modules/slider');
	const timer = require('./modules/timer');

	tabs();
	modal();
	calculator();
	cards();
	forms();
	slider();
	timer();
});
