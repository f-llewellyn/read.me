import { writable } from "svelte/store";
import { browser } from "$app/env";

const checkStorage = () => {
	if (browser && localStorage.getItem("markdownText")) {
		let markdownText = writable(localStorage.getItem("markdownText"));
		return markdownText;
	} else {
		let markdownText = writable("# Hello World!");
		return markdownText;
	}
};

let markdownText = checkStorage();
export default markdownText;
