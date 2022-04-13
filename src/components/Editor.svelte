<script>
	import markdownText from "../stores/markdownText";
</script>

<h1 class="text-2xl font-bold mb-4">Editor</h1>

<textarea
	class="h-full w-full bg-slate-700 dark:bg-slate-900 text-cyan-400 rounded-lg resize-none focus:outline-none p-6 scrollable"
	bind:value={$markdownText}
/>
