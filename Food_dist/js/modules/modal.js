function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);

	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);

	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = 'overlay';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    
	// Pop-up (Modal)

	const modalTrigger = document.querySelectorAll(triggerSelector);
	const modal = document.querySelector(modalSelector);

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
	});

	modal.addEventListener('click', (event) => {
		if (
			event.target === modal ||
			event.target.getAttribute('data-close') == ''
		) {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			// проверка на нажатие кнопки Escape на клавиатуре && модальное окно открыто
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			// пользователь долистал до конца страницы
			openModal(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal}
export {openModal}