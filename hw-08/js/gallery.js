import galleryItems from '../gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const bigImage = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.js-lightbox');

let currentPicIdx = 0;

const createGallery = (items) => {
	const galleryList = items.map(item => createItemWithImg(item)).join(' ');
	gallery.insertAdjacentHTML('afterbegin', galleryList);
}

const createItemWithImg = ( {preview, original, description} ) => {
	const item = `
	<li class="gallery__item">
		<a
			class="gallery__link"
			href="${original}"
		>
			<img 
				class="gallery__image" 
				src="${preview}" 
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</li>`;   
	return item;
}

const onImageClick = e => {
	e.preventDefault();
	modal.classList.add('is-open');
	bigImage.src = e.target.dataset.source;
	findBigImageIdx(galleryItems);	
}

const onCloseAndOverlayClick = e => {
	if (e.target === bigImage) {
		return;
	} 
	modal.classList.remove('is-open');
	bigImage.src = "";
}

const onEcsKey = () => {
	if (event.code == 'Escape') {
		modal.classList.remove('is-open');
		bigImage.src = "";
  }
}

const findBigImageIdx = (items) => {
	items.forEach((item, idx) => {
		if (item.original === bigImage.src) {
			currentPicIdx = idx;
		}
	});
}

const onRightKey = () => {
	if (event.code == 'ArrowRight') {
		currentPicIdx++;
	}
	if (currentPicIdx > galleryItems.length -1) {
		currentPicIdx = 0;
	}
	bigImage.src = galleryItems[currentPicIdx].original;
}

const onLeftKey = () => {
	if (event.code == 'ArrowLeft') {
		currentPicIdx--;
	}
	if (currentPicIdx < 0) {
		currentPicIdx = galleryItems.length -1;
	}
	bigImage.src = galleryItems[currentPicIdx].original;
}


createGallery(galleryItems);
gallery.addEventListener("click", onImageClick);
overlay.addEventListener("click", onCloseAndOverlayClick);
document.addEventListener('keydown', onEcsKey);
document.addEventListener('keydown', onLeftKey);
document.addEventListener('keydown', onRightKey);





