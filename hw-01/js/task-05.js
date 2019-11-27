let country = prompt('Введите страну').toLowerCase();
let cost;

//земеняет первую букву в словах на прописную
function upperFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

switch (country) {
	case 'китай':
		cost = 100;
		break;

	case 'чили':
		cost = 250;
		break;

	case 'австралия':
		cost = 170;
		country = 'австралию';
		break;

	case 'индия':
		cost = 80;
		country = 'индию';
		break;

	case 'ямайка':
		cost = 120;
		country = 'ямайку';
		break;

	default:
		alert('В вашей стране доставка не доступна');
}

country = upperFirstLetter(country);

if (cost) {
	alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
}