const task02 = () => {

	const calculateEngravingPrice = (message, pricePerWord) => {
		message = message.split(' ');
		let price =  message.length * pricePerWord;
		return price;
		
	}
	console.log(
		calculateEngravingPrice(
			'Proin sociis natoque et magnis parturient montes mus',
			10,
		),
	); // 80
	
	console.log(
		calculateEngravingPrice(
			'Proin sociis natoque et magnis parturient montes mus',
			20,
		),
	); // 160
	
	console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
	
	console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
		
	
}