const task06 = () => {

	let input;
	const numbers = [];
	let total = 0; 
	

	do {
		input = Number(prompt('Введите число'));

		if(Number.isNaN(input)) {
			alert('Было введено не число, попробуйте еще раз');
		}
	
		if (!input) {
			break;
		}

		numbers.push(input);
	
	} while(input || isNaN(input));
	
	for (let i = 0; i < numbers.length; i++ ) {
		total += numbers[i];
	}
	if (Number.isNaN(input) === false) {
		console.log(`Общая сумма чисел равна ${total}`);
	}


	
}