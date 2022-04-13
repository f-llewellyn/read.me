<script>
	import markdownText from "../stores/markdownText";
	export let name = "Element";
	export let content = `Default content`;

	const addComponent = () => {
		$markdownText += `\n\n${content}`;
	};
</script>

<button
	class="bg-slate-700 dark:bg-slate-900 text-white w-full mb-4 p-2 rounded-lg text-center font-bold hover:bg-slate-400 dark:hover:bg-slate-400 hover:text-slate-900 transition drop-shadow-lg"
	on:click={addComponent}
	>{name}
</button>
