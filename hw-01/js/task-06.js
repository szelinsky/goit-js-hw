let input = Number(prompt('Введите число'));
let total = 0;

if(Number.isNaN(input)) {
	alert('Было введено не число, попробуйте еще раз');
} else {
	while(input) {
		total += input;
		input = Number(prompt('Введите число'));	
	}
	alert(`Общая сумма чисел равна ${total}.`);
}


// второй способ, но не работает выход из цикла (строка 28)
// хотел сделать, чтобы после alart (строка 24) появлялся prompt

// let input;
// let total = 0;

// do {
// 	input = Number(prompt('Введите число'));
// 	if (Number.isNaN(input)) {
// 	 	alert('Было введено не число, попробуйте еще раз');
// 	 	break;
// 	} 		
// 	total += input;
// } while (input && !Number.isNaN(input));
// alert(`Общая сумма чисел равна ${total}.`);






