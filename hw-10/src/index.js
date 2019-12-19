import menu from './menu.json';
import listItemTemplate from './templates/list-item.hbs'
import './styles.css';


document.body.classList.add(localStorage.getItem('Theme'))
const body = document.querySelector('body');
//body.classList.add('dark-theme' )
const switcher = document.getElementById('theme-switch-control');

if(localStorage.getItem('Theme') === 'dark-theme'){
	switcher.checked = true
} else {
	switcher.checked = false

}

const refs = {
	list: document.querySelector('.js-menu'),
};


const buildLists = (items) => {
	const markup = items.map(item => listItemTemplate(item)).join(' ');
	return markup;
}

refs.list.insertAdjacentHTML('beforeend', buildLists(menu));


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};




switcher.addEventListener( 'change', function() {

	console.log(this.checked)
	if (this.checked) {
		body.classList.add('dark-theme' );
		body.classList.remove('light-theme');
		localStorage.setItem('Theme', Theme.DARK);
		
	}
	else {
		body.classList.add('light-theme' );
		body.classList.remove('dark-theme');
		localStorage.setItem('Theme', Theme.LIGHT);
	}
});








