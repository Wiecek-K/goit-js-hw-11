//const btnLoadMore = document.querySelector(".load-more");

//btnLoadMore.classList.add("hidden");

// if (data.total > PHOTOS_PER_PAGE) {
// 	btnLoadMore.classList.remove("hidden");
// }

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
