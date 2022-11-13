import {closeModal, openModal} from './modal'
import {postData} from '../services/services'

function forms(formSelector, modalTimerId) {

	// Forms

	const forms = document.querySelectorAll(formSelector);

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...',
	};

	forms.forEach((item) => {
		bindPostData(item);
	});

	function bindPostData(form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
			// form.append(statusMessage)
			form.insertAdjacentElement('afterend', statusMessage);

			/* const request= new XMLHttpRequest() // вместо XMLHttpRequest используем fetch
            request.open('POST', 'server.php') */

			// request.setRequestHeader('Content-type', 'multipart/form-data') // если формат отправки не JSON, то заголовок не нужен
			// request.setRequestHeader('Content-type', 'application/json')  // заголовки пишутся внутри fetch()

			const formData = new FormData(form);

			/* const object = {}
            formData.forEach((value, key) => { // переводим из formData в JSON формат
                object[key] = value
            }) */

			const json = JSON.stringify(Object.fromEntries(formData.entries())); // переводим из formData в JSON формат

			// request.send(formData)
			// request.send(json)

			postData('http://localhost:3000/requests', json)
				.then((data) => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal('.modal', modalTimerId);

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal('.modal');
		}, 2000);
	}
}

export default forms;
