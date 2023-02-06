import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));
gallery.addEventListener("click", openOriginalImage);

function createGallery(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function openOriginalImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source}>
`);
  instance.show();
  const closer = document.querySelector(".basicLightbox");

  window.addEventListener(`keydown`, (evt) => {
    if (
      evt.code === "Escape" &&
      closer.classList.contains("basicLightbox--visible")
    ) {
      closer.classList.remove("basicLightbox--visible");
    }
  });
}

console.log(galleryItems);
