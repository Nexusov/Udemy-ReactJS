function timer() {
	// Timer

	const deadLine = '2025-07-20';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function setZero(number) {
		if (number >= 0 && number < 10) {
			return `0${number}`;
		} else {
			return number;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector);
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');

		let timeInterval = setInterval(updateClock, 1000);

		updateClock(); // вызываем функцию тут, чтобы не было моргания при загрузке страницы

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerText = setZero(t.days);
			hours.innerText = setZero(t.hours);
			minutes.innerText = setZero(t.minutes);
			seconds.innerText = setZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);

				days.innerText = '00';
				hours.innerText = '00';
				minutes.innerText = '00';
				seconds.innerText = '00';
			}
		}
	}
	setClock('.timer', deadLine);
}

module.exports = timer;
