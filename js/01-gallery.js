import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryElem = document.querySelector('.gallery');
const galleryInsertHtml = createNewGallery(galleryItems)


 
function createNewGallery(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
  						<a class="gallery__link" href="${original}">
    					<img class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
							/>
						</a>
						</div>`;
	}).join("");	
}

 
galleryElem.insertAdjacentHTML("beforeend", galleryInsertHtml)

const openModal = (e) => {
	e.preventDefault();
};
galleryElem.addEventListener('click', openModal)
 
console.log(galleryInsertHtml);