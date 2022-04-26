<script>
	import "../styles/md.css";
	import markdownText from "../stores/markdownText";
	import SvelteMarkdown from "svelte-markdown";
	import { browser } from "$app/env";
	import dark from "../stores/dark";

	// $: if (theme === "dark") {
	// 	dark = true;
	// 	console.log(theme);
	// } else {
	// 	dark = false;
	// }
</script>

<h1 class="text-2xl font-bold mb-4">Preview</h1>

<div
	class="{$dark
		? 'markdown-body-dark'
		: 'markdown-body-light'} transition-all markdown-body overflow-scroll border-2 border-slate-600 rounded-lg p-6"
>
	<SvelteMarkdown source={$markdownText} />
</div>

<style>
	.markdown-body {
		height: 600px;
	}
</style>
