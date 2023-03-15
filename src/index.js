import { Notify } from "notiflix";
import axios from "axios";
import { fetchPhotos } from "./scripts/fetchPhotos";
import { createPhotoMarkup } from "./scripts/createGallery";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector("#search-form");
const { searchQuery } = searchForm;
const gallery = document.querySelector(".gallery");
searchQuery.value = "dog";

searchForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const data = await fetchPhotos(searchQuery.value);
	gallery.innerHTML = "";

	if (data.hits.length === 0) {
		Notify.failure(
			"Sorry, there are no images matching your search query. Please try again.",
		);
		return;
	}
	Notify.info(`Hooray! We found ${data.total} images.`);
	data.hits.forEach((photo) => {
		gallery.insertAdjacentHTML("beforeend", createPhotoMarkup(photo));
	});
	let galleryLightbox = new SimpleLightbox(".gallery a");
});
