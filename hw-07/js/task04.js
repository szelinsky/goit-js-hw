let counterValue = document.getElementById('value');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counter = 0;

const increment = () => {
	counter++;
	counterValue.innerHTML = counter;
}

const decrement = () => {
	counter--;
	counterValue.innerHTML = counter;
}

incrBtn.addEventListener('click', increment);
decrBtn.addEventListener('click', decrement);
