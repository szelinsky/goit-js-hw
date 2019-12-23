untilDays = document.querySelector('span[data-value="days"]');
untilHours = document.querySelector('span[data-value="hours"]');
untilMins = document.querySelector('span[data-value="mins"]');
untilSecs = document.querySelector('span[data-value="secs"]');
class CountdownTimer {
	constructor({selector,targetDate}) {
		this.selector = selector,
			this.targetDate = targetDate
	}
}
const countdown = new CountdownTimer({
	selector: '#timer-1',
	targetDate: new Date('Jan 1, 2020'),
});






let timer = setInterval(() => {
	const currentTime = new Date();

	const time = countdown.targetDate.getTime() - currentTime.getTime();
	/*
	 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
	 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
	 */
	const days = Math.floor(time / (1000 * 60 * 60 * 24));
	untilDays.innerHTML = days;

	/*
	 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
	 * остатка % и делим его на количество миллисекунд в одном часе
	 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
	 */
	const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	untilHours.innerHTML = hours;
	/*
	 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
	 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
	 */
	const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
	untilMins.innerHTML = mins;
	/*
	 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
	 * миллисекунд в одной секунде (1000)
	 */
	const secs = Math.floor((time % (1000 * 60)) / 1000);
	untilSecs.innerHTML = secs;

}, 1000);