<script>
	import Fa from "svelte-fa/src/fa.svelte";
	import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
	import dark from "../stores/dark";

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
	class="transition-all text-white text-4xl hover:-translate-y-1 {$dark
		? 'text-cyan-50'
		: 'text-yellow-500'}"
	on:click|preventDefault={() => {
		$dark = !$dark;
		// console.log($dark);
		if ($dark) {
			localStorage.setItem("theme", "dark");
		} else {
			localStorage.setItem("theme", "light");
		}
	}}
>
	{#if $dark}
		<Fa icon={faMoon} />
	{:else}
		<Fa icon={faSun} />
	{/if}
</button>
