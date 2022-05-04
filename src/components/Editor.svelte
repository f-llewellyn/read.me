<script>
	import { onDestroy } from "svelte";
	import { browser } from "$app/env";

	import markdownText from "../stores/markdownText";

	onDestroy(() => {
		if (browser) localStorage.setItem("markdownText", $markdownText);
	});
</script>

<textarea
	class="w-full h-full bg-slate-700 dark:bg-slate-900 text-cyan-400 rounded-lg resize-none focus:outline-none p-6 scrollable"
	bind:value={$markdownText}
/>

<style>
</style>
