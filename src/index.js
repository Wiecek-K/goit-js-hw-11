import { Notify } from "notiflix";
import axios from "axios";

const searchForm = document.querySelector("#search-form");
const { searchQuery } = searchForm;
;

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(searchQuery.value);
});
