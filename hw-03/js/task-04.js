const task04 = () => {
	const countTotalSalary = (employees) => {
		const salary = Object.values(employees);
		let sum = 0;
		for (let i = 0; i < salary.length; i++) {
			sum += salary[i];
		}
		return sum;
	}
	console.log(countTotalSalary({})); // 0

	console.log(
		countTotalSalary({
			mango: 100,
			poly: 150,
			alfred: 80,
		}),
	); // 330

	console.log(
		countTotalSalary({
			kiwi: 200,
			lux: 50,
			chelsy: 150,
		}),
	); // 400

}