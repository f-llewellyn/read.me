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
	import "../app.css";
	import Header from "../components/Header.svelte";

	export let avatar_url;
	let dark = true;
</script>

<div class:dark>
	<main
		class="transition-all min-h-screen min-w-full bg-white dark:bg-slate-700"
	>
		<Header bind:dark {avatar_url} />
		<div class="container mx-auto py-4">
			<slot />
		</div>
	</main>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");

	* :not(.markdonw-body) {
		font-family: "Ubuntu Mono", monospace;
	}
</style>
