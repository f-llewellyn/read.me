<script>
	export let user, avatar_url;
</script>

<div
	class="flex bg-slate-900 text-white p-4 gap-4 items-center justify-between rounded-lg ml-auto"
>
	<div class="flex items-center gap-4">
		<img src={avatar_url} alt="" class="aspect-square w-12 rounded-full" />
		<h1 class="text-4xl font-bold text-white">Hello {user}</h1>
	</div>
	<a
		href="/logout"
		class="transition py-1 px-5 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-2xl rounded-lg flex items-center gap-4"
		>Logout</a
	>
</div>

<style>
</style>
