import { galleryItems } from './gallery-items.js';
// import {SimpleLightbox} from "simplelightbox";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = createGalleryLi(galleryItems);

const simplelightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });


// gallery.addEventListener('click', handleGalleryItemClick);



// FUNCTION ==================================

function createGalleryLi(array) {
    return array
    .map(item => {
        return `
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    })
    .join('');
}

// function handleGalleryItemClick(event) {
//     event.preventDefault();
//     const galleryLink = new SimpleLightbox(".gallery a", {
//             captionsData: "alt",
//             captionDelay: 250,
//         });


// }

