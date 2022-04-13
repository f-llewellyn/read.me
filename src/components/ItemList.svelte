<script>
	import MDComponent from "./MDComponent.svelte";

	export let items;
</script>

<h1 class="text-2xl font-bold mb-4">Elements</h1>

<section class="overflow-y-scroll scrollable item-list md:pr-2">
	{#each items as item}
		<MDComponent {...item} />
	{/each}
</section>
