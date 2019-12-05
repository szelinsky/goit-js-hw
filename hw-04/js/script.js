import task01 from "./task-01.js";
import task02 from "./task-02.js";

let message = prompt('Модуль 4: Введите номер задания 1 или 2');

switch (message) {
	case '1':
		task01();
		break;

	case '2':
		task02();
		break;

	default:
		alert('Введите 1 или 2');
		break;
}

