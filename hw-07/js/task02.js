const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItems = document.getElementById('ingredients');
const listString = ingredients.reduce((acc, item) => acc += `<li>${item}</li>`, '');

listItems.insertAdjacentHTML('beforeend', listString);



