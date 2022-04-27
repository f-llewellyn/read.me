<script context="module">
	export async function load({ session }) {
		return {
			props: {
				user: session.user,
				repos_url: session.repos_url,
				avatar_url: session.avatar_url,
				token: session.token,
			},
		};
	}
</script>

<script>
	import { onMount } from "svelte";
	import dark from "../stores/dark";
	import Header from "../components/Header.svelte";
	import "../app.css";

	export let avatar_url;

	onMount(() => {
		if (localStorage.getItem("theme") === "dark") {
			$dark = true;
		} else {
			$dark = false;
			localStorage.setItem("theme", "light");
		}
	});
</script>

<div class={$dark ? "dark" : ""}>
	<main
		class="transition-all min-h-screen min-w-full bg-white dark:bg-slate-700"
	>
		<Header {avatar_url} />
		<div class="flex-grow mx-auto md:p-6 p-2">
			<slot {dark} />
		</div>
	</main>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");

	* :not(.markdonw-body) {
		font-family: "Ubuntu Mono", monospace;
	}
</style>
