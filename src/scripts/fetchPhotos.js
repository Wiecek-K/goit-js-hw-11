import axios from "axios";
import { Notify } from "notiflix";
export async function fetchPhotos(name, page = 1) {
	try {
		const request = await axios.get(
			`https://pixabay.com/api/?key=34392060-359edd6d0360047c3a2486bc3&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&q=${name}&page=${page}`,
		);
		return request.data;
	} catch (err) {
		Notify.failure("ERROR", err);
	}
}
