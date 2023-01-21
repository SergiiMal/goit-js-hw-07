import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryElem = document.querySelector('.gallery');
const galleryInsertHtml = createNewGallery(galleryItems);
 
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
		})
		.join('');	
} 
galleryElem.innerHTML = galleryInsertHtml;
galleryElem.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
}


 


