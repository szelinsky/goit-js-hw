const task05 = () => {
	
	const getAllPropValues = (arr, prop) => {	
		//console.log(arr[prop]);	
		let newArr = [];
		for (let i = 0; i < arr.length; i++) {		
			if (arr[i][prop] === undefined) {
				return newArr = [];
			}	else {
				newArr.push(arr[i][prop]);
			}
		}
		return newArr;
	}

	const products = [
		{ name: 'Радар', price: 1300, quantity: 4 },
		{ name: 'Сканер', price: 2700, quantity: 3 },
		{ name: 'Дроид', price: 400, quantity: 7 },
		{ name: 'Захват', price: 1200, quantity: 2 },
	];
	
	console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
	
	console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
	
	console.log(getAllPropValues(products, 'category')); // []
}