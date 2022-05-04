<script>
	import MDComponent from "./MDComponent.svelte";

	export let items;
</script>

<section class="overflow-y-auto h-full md:pr-2">
	{#each items as item}
		<MDComponent {...item} />
	{/each}
</section>

<style>
</style>
