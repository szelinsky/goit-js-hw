const inputText = document.getElementById('validation-input');
const inputSybols = Number(inputText.dataset.length);

const checkLength = () => {
	console.log(inputText.value.length);
	if (inputText.value.length === inputSybols) {
		inputText.classList.add("valid");	
	} else {
		inputText.classList.add("invalid");	
	}
}
inputText.addEventListener('blur', checkLength);
console.log(inputSybols);
