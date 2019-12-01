"use strict"

function task6() {
// 	let input = Number(prompt('Введите число'));
// 	let total = 0;

// 	if(Number.isNaN(input)) {
// 		alert('Было введено не число, попробуйте еще раз');
// 	} else {
// 		while(input) {
// 			total += input;
// 			input = Number(prompt('Введите число'));	
// 		}
// 		alert(`Общая сумма чисел равна ${total}.`);
// 	}


// второй способ, но не работает выход из цикла (строка 28)
// хотел сделать, чтобы после alart (строка 24) появлялся prompt

	let input;
	let total = 0;

	do {
		input = Number(prompt('Введите число'));

		if (input === null) {
			break;
		} else if (!Number.isNaN(input)) {
			total += input;
		} else {
			alert('Было введено не число, попробуйте еще раз');
		}

	} while (true); 
	alert(`Общая сумма чисел равна ${total}.`);

}