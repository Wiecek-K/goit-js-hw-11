import { Notify } from "notiflix";
import { fetchPhotos } from "./scripts/fetchPhotos";
import { createPhotoMarkup } from "./scripts/createPhotoMarkup";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const PHOTOS_PER_PAGE = 40;

const searchForm = document.querySelector("#search-form");
const { searchQuery } = searchForm;
const gallery = document.querySelector(".gallery");
//const btnLoadMore = document.querySelector(".load-more");

let pageNum = 1;
let currentWord = "";
let galleryLightBox = new SimpleLightbox(".gallery a", {
	showCounter: false,
});

searchForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	pageNum = 1;
	currentWord = searchQuery.value;
	const data = await fetchPhotos(currentWord);
	gallery.innerHTML = "";
	//btnLoadMore.classList.add("hidden");
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
	galleryLightBox.refresh();
	// if (data.total > PHOTOS_PER_PAGE) {
	// 	btnLoadMore.classList.remove("hidden");
	// }
});

window.addEventListener("scroll", async () => {
	//console.log("scrolled", window.scrollY); //aktualna pozycja
	//console.log(window.innerHeight); //wysokosc okna
	//console.log(document.documentElement.scrollHeight)//wysokosc(dlugosc)calego dokumentu
	if (
		window.scrollY + 1.25 * window.innerHeight >=
		document.documentElement.scrollHeight
	) {
		pageNum++;
		const data = await fetchPhotos(searchQuery.value, pageNum);
		data.hits.forEach((photo) => {
			gallery.insertAdjacentHTML("beforeend", createPhotoMarkup(photo));
		});
		galleryLightBox.refresh();
		if (pageNum * PHOTOS_PER_PAGE >= data.total) {
			Notify.info("We're sorry, but you've reached the end of search results.");
		}
	}
});
//btnLoadMore.addEventListener("click", async () => {
// 	pageNum++;
// 	const data = await fetchPhotos(searchQuery.value, pageNum);
// 	data.hits.forEach((photo) => {
// 		gallery.insertAdjacentHTML("beforeend", createPhotoMarkup(photo));
// 	});
// 	galleryLightBox.refresh();
// 	if (pageNum * PHOTOS_PER_PAGE >= data.total) {
// 		btnLoadMore.classList.add("hidden");
// 		Notify.info("We're sorry, but you've reached the end of search results.");
// 	}
// 	setTimeout(() => {
// 		window.scroll({
// 			top: window.scrollY + 500,
// 			behavior: "smooth",
// 		});
// 	}, 500);
// });
