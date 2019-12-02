const task04 = () => {

	const formatString = (string) => {
		let letters = string.split('');

		if (letters.length > 40) {
			string = string.slice(0, 41);
			return (string + '...');
		} else {
			return string;
		}
	}

	//!!!BEST PRACTICE!!!
	// const str = 'какая-то строка';
	// const rez = str.length<=40?str:str.slice(0,40) + '...';
	// console.log(rez);

	console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
	// вернется оригинальная строка

	console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
	// вернется форматированная строка

	console.log(formatString('Curabitur ligula sapien.'));
	// вернется оригинальная строка

	console.log(
		formatString(
			'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
		),
	);
	// вернется форматированная строка
 }