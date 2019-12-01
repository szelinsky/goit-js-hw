const task03 = () => {

	const findLongestWord = (string) => {
	
		let words = string.split(' ');
		let longestWord = "";

		for (let i = 0; i < words.length; i++) {

			const currentWord = words[i];
			if (currentWord.length > longestWord.length) {
				longestWord = currentWord;
			}
		}
		return longestWord;
	}

	console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //jumped

	console.log(findLongestWord('Google do a roll')); // 'Google'

	console.log(findLongestWord('May the force be with you')); // 'force'
}