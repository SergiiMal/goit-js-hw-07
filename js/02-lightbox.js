import { galleryItems } from './gallery-items.js';
// Change code below this line


 const galleryElem = document.querySelector('.gallery');
 const galleryInsertHtml = createNewGallery(galleryItems);

 function createNewGallery(galleryItems){
	
	 return galleryItems
		 .map(({ preview, original, description }) => {
			 return `
		<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		 }).join('');
	 
 }
galleryElem.innerHTML = galleryInsertHtml;

galleryElem.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  
  function closeModal(event) {
    if (event.code === 'Escape') {
      simpleBox.close();
    }
  }  
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});