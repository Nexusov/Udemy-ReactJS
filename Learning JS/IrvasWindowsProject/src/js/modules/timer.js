const timer = (id, deadline) => {
	const getTimeRemaining = (endtime) => {
		const t = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
		};
	}

	const addZero = (number) => {
		if (number <= 9) {
			return `0${number}`;
		} else {
			return number;
		}
	}

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector);
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');

		let timeInterval = setInterval(updateClock, 1000);

		updateClock(); // вызываем функцию тут, чтобы не было моргания при загрузке страницы

		const updateClock = () => {
			const t = getTimeRemaining(endtime);

			days.innerText = addZero(t.days);
			hours.innerText = addZero(t.hours);
			minutes.innerText = addZero(t.minutes);
			seconds.innerText = addZero(t.seconds);

			if (t.total <= 0) {
				days.innerText = '00';
				hours.innerText = '00';
				minutes.innerText = '00';
				seconds.innerText = '00';

            clearInterval(timeInterval);
			}
		}
	}
	setClock(id, deadline);
}

export default timer;
