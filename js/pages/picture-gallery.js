// js/pages/picture-gallery.js — page-unique behavior for picture-gallery.html.
// One shared Bootstrap modal (#galleryModal) is reused for every thumbnail; this just swaps its
// image src/alt from the trigger button's data-full-src/data-full-alt before the modal shows.

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;

  const modalImage = document.getElementById("galleryModalImage");

  modal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    if (!trigger) return;

    modalImage.src = trigger.getAttribute("data-full-src") || "images/placeholder.svg";
    modalImage.alt = trigger.getAttribute("data-full-alt") || "";
  });
});
