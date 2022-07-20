import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = createGalleryLi(galleryItems);

gallery.addEventListener('click', handleGalleryItemClick);





// FUNCTION ==================================

function createGalleryLi(array) {
    return array
    .map(item => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`
    })
    .join('');
}

function handleGalleryItemClick(event) {
    event.preventDefault();
    
    const galleryItem = event.target;
    // console.log(galleryItem);
    const urlImgBig = galleryItem.dataset.source;
    // console.log(urlImgBig);

    openModalGallery(urlImgBig);
}

function openModalGallery(url) {
    const modalItem = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
    return modalItem.show();
}









