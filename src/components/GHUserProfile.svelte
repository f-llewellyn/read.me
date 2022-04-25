<script>
	export let avatar_url;
</script>

<div class="flex text-white gap-4 px-4 items-center justify-between">
	{#if avatar_url}
		<a href="/account">
			<div class="flex items-center gap-4">
				<img
					src={avatar_url}
					alt=""
					class="transition-all aspect-square w-12 rounded-full hover:-translate-y-1"
				/>
			</div>
		</a>
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
