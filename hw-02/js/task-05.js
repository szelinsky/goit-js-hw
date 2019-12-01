const task05 = () => {

	const checkForSpam = (str) => {
		str = str.toLowerCase();
		str = (str.includes('spam') || str.includes('sale')) ? true : false; 
		return str;
	}

	console.log(checkForSpam('Latest technology news')); // false

	console.log(checkForSpam('JavaScript weekly newsletter')); // false

	console.log(checkForSpam('Get best sale offers now!')); // true

	console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

}