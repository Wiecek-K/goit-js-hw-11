import { Notify } from "notiflix";
import axios from "axios";
import { fetchPhotos } from "./scripts/fetchPhotos";
import { createPhotoMarkup } from "./scripts/createGallery";

const searchForm = document.querySelector("#search-form");
const { searchQuery } = searchForm;
const gallery = document.querySelector(".gallery");
console.log(gallery);
console.log("abc");

searchForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const data = await fetchPhotos(searchQuery.value);
	console.log(data);
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
});
