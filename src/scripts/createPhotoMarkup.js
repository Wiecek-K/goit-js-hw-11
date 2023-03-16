export function createPhotoMarkup({
	likes,
	views,
	comments,
	downloads,
	webformatURL,
	tags,
	largeImageURL,
}) {
	return `
    <div class="photo-card">
        <a href=${largeImageURL}>
            <img src=${webformatURL} alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
            <div class="info-item">
                <h5>Likes</h5>
                <p>${likes}</p>
            </div>
            <div class="info-item">
                <h5>Views</h5>
                <p>${views}</p>
            </div>
            <div class="info-item">
                <h5>Comments</h5>
                <p>${comments}</p>
            </div>
            <div class="info-item">
                <h5>Downloads</h5>
                <p>${downloads}</p>
            </div>
        </div>
	</div>`;
}
