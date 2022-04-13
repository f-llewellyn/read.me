<script>
	import Fa from "svelte-fa/src/fa.svelte";
	import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
	export let dark;

	// const toggleTheme = () => {
	// 	if (theme === "dark") {
	// 		theme = "light";
	// 		localStorage.theme = theme;
	// 	} else {
	// 		theme = "dark";
	// 		localStorage.theme = theme;
	// 	}
	// };
</script>

<button
	class="transition text-white text-4xl {dark
		? 'text-cyan-50'
		: 'text-yellow-500'}"
	on:click|preventDefault={() => {
		dark = !dark;
	}}
>
	{#if dark}
		<Fa icon={faMoon} />
	{:else}
		<Fa icon={faSun} />
	{/if}
</button>
