<script>
	export let avatar_url;
</script>

<div class="flex text-white gap-4 px-4 items-center justify-between">
	{#if avatar_url}
		<div class="flex items-center gap-4">
			<img
				src={avatar_url}
				alt=""
				class="aspect-square w-14 border-4 border-slate-600 rounded-full"
			/>
		</div>
	{:else}
		<a
			href="/login"
			class="transition py-2 px-4 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-xl rounded-lg"
			>Log In</a
		>
	{/if}
</div>

<style>
</style>
