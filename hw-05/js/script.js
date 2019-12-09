import {task01} from "./task01.js";
import task02 from "./task02.js";
import {task03} from "./task03.js";
import {task04} from "./task04.js";
import {task05} from "./task05.js";


let input = prompt('Введите число от 1 до 5');

switch (input) {
	case '1':
		task01();
		break;

	case '2':
		task02();
		break;

	case '3':
		task03();
		break;

	case '4':
		task04();
		break;

	case '5':
		task05();
		break;

	default:
		alert('Ошибка');
		break;
}