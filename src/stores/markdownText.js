import { writable } from "svelte/store";

let markdownText = writable(`# Hello World`);

export default markdownText;
