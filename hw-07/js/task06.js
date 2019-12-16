const inputText = document.getElementById('validation-input');

const checkLength = () => {
	console.log(inputText.value.length);
	if (inputText.value.length === 6) {
		inputText.classList.add("valid");	
	} else {
		inputText.classList.add("invalid");	
	}
}
inputText.addEventListener('blur', checkLength);
