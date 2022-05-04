<script>
	import "../styles/md.css";
	import markdownText from "../stores/markdownText";
	import SvelteMarkdown from "svelte-markdown";
	import dark from "../stores/dark";

	// $: if (theme === "dark") {
	// 	dark = true;
	// 	console.log(theme);
	// } else {
	// 	dark = false;
	// }
</script>

<div
	class="{$dark
		? 'markdown-body-dark'
		: 'markdown-body-light'} h-full transition-all markdown-body overflow-scroll border-2 border-slate-600 rounded-lg p-6"
>
	<SvelteMarkdown source={$markdownText} />
</div>

<style>
</style>
