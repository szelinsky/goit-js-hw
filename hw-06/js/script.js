import { task01 } from "./task01.js";
import { task02 } from "./task02.js";
import { task03 } from "./task03.js";
import { task04 } from "./task04.js";
import { task05 } from "./task05.js";
import { task06 } from "./task06.js";
import { task07 } from "./task07.js";
import { task08 } from "./task08.js";
import { task09 } from "./task09.js";
import { task10 } from "./task10.js";


let inputTaskNumber = prompt('Введите номер задания от 1 до 10');


switch (inputTaskNumber) {
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

	case '6':
		task06();
		break;

	case '7':
		task07();
		break;

	case '8':
		task08();
		break;

	case '9':
		task09();
		break;

	case '10':
		task10();
		break;

	default: 
		alert('Ошибка');
		break;
}
