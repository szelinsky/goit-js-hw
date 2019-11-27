"use strict"
let credits = 23580;
let pricePerDroid = 3000;
let quantityOfDroids = prompt('Введите количество дройдов, которое хотите купить');
let message, totalPrice, droidWordEnd;

quantityOfDroids = Number.parseInt(quantityOfDroids);

//склонение слова дройд, для читабельности
switch (quantityOfDroids) {
  case 1:
		droidWordEnd = 'дроид';
    break;
  case 2:
		droidWordEnd = 'дроида';
    break;

  case 3:
		droidWordEnd = 'дроида';
		break;
		
	case 4:
		droidWordEnd = 'дроида';
		break;

  default:
		droidWordEnd = 'дроидов';
}

if(!quantityOfDroids) {
	message = 'Отменено пользователем';
} else {
	totalPrice = quantityOfDroids * pricePerDroid;
	if(quantityOfDroids && credits > totalPrice) {
		credits -= totalPrice;
		message = `Вы купили ${quantityOfDroids} ${droidWordEnd}, на счету осталось ${credits} кредитов.`;
	} else {
		message = 'Недостаточно средств на счету!';
	}
}

alert(message); 


