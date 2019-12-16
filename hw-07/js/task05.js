const userName = document.getElementById('name-output');
const inputName = document.getElementById('name-input');

const changeValue = () => {
	inputName.value ? userName.innerHTML = inputName.value : userName.innerHTML = 'незнакомец';
}
inputName.addEventListener('input', changeValue);



