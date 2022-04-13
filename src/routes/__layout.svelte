<script>
	import "../app.css";
	import Header from "../components/Header.svelte";

	let dark = true;
</script>

<div class:dark>
	<main class="min-h-screen min-w-full bg-white dark:bg-slate-700">
		<Header bind:dark />
		<div class="container mx-auto py-4">
			<slot />
		</div>
	</main>
</div>

<style>
</style>
