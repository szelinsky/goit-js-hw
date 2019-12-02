const task03 = () => {
	const findBestEmployee = (employees) => {
		const value =Object.values(employees);
		let maxValue = 0;
		let id = 0
		for (let i = 0; i < value.length; i++) {
			if (value[i] > maxValue) {
				maxValue = value[i];
				id = i;
			}
		}
		const keys = Object.keys(employees);
		return keys[id];
	}

	console.log(
		findBestEmployee({
			ann: 29,
			david: 35,
			helen: 1,
			lorence: 99,
		})
	); // lorence

	console.log(
		findBestEmployee({
			poly: 12,
			mango: 17,
			ajax: 4,
		}),
	); // mango

	console.log(
		findBestEmployee({
			lux: 147,
			david: 21,
			kiwi: 19,
			chelsy: 38,
		}),
	); // lux
}