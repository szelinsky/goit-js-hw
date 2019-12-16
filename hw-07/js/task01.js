const itemsList = document.querySelectorAll('.item');
console.log(`В списке ${itemsList.length} категории.`);

itemsList.forEach(item =>
	console.log(`Категория: ${item.firstElementChild.innerHTML} \nКоличество элементов: ${item.lastElementChild.children.length}`));