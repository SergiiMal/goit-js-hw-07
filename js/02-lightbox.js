import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 const galleryElem = document.querySelector('.gallery');
 const galleryInsertHtml = createNewGallery(galleryItems);

 function createNewGallery(galleryItems){
	return galleryItems
	.map(({preview, original, description}) => {
		return `
		<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
	}).join('')
 }