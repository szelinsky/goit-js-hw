"use strict"

function task3() {
	let message = prompt('Введите пароль:');
	const ADMIN_PASSWORD = 'jqueryismyjam';

	if(!message) {
		message = ('Отменено пользователем');
	} else if (message == ADMIN_PASSWORD){
	message = 'Добро пожаловать!'
	} else {
		message = 'Доступ запрещен, неверный пароль!'
	}
	alert(message);
}