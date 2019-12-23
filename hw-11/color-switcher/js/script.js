const elements = {
	body: document.querySelector('body'),
	startBtn: document.querySelector('button[data-action="start"]'),
	stopBtn: document.querySelector('button[data-action="stop"]'),
	random: 0,
	interval: null,
	changeColor() {
		this.startBtn.addEventListener('click', () => {
			this.interval = setInterval(() => {
				this.body.style.backgroundColor = colors[this.random];
				this.random = randomIntegerFromInterval(0, 5);
				this.startBtn.setAttribute('disabled', 'disabled');
			}, 1000);
		});
	},
	stopChanging() {
		this.stopBtn.addEventListener('click', () => {
			clearInterval(this.interval);
			this.startBtn.removeAttribute("disabled");
		});
	}
};

const colors = [
	'#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

elements.changeColor();
elements.stopChanging();







