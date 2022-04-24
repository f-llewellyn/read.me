<script>
	import { onDestroy } from "svelte";
	import { browser } from "$app/env";

	import markdownText from "../stores/markdownText";

	onDestroy(() => {
		if (browser) localStorage.setItem("markdownText", $markdownText);
	});
</script>

<h1 class="text-2xl font-bold mb-4">Editor</h1>

<textarea
	class="w-full bg-slate-700 dark:bg-slate-900 text-cyan-400 rounded-lg resize-none focus:outline-none p-6 scrollable"
	bind:value={$markdownText}
/>

<style>
	textarea {
		height: 600px;
	}
</style>
