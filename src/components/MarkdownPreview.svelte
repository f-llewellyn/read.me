<script>
	import "github-markdown-css";
	import markdownText from "../stores/markdownText";
	import SvelteMarkdown from "svelte-markdown";
</script>

<h1 class="text-2xl font-bold mb-4">Preview</h1>

<div
	class="markdown-body overflow-scroll h-full border-2 border-slate-600 rounded-lg p-6 scrollable"
>
	<SvelteMarkdown source={$markdownText} />
</div>

<style>
</style>
