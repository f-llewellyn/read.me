<script>
	import { page } from "$app/stores";
	import ThemeToggle from "./ThemeToggle.svelte";
	import GHUserProfile from "./GHUserProfile.svelte";

	export let avatar_url;
	// export let dark;
</script>

<nav
	class="w-full py-4 px-4 md:px-0 z-10 {$page.url.pathname === '/'
		? 'bg-transparent'
		: 'bg-slate-700 dark:bg-slate-900'}"
>
	<div
		class="container px-4 mx-auto flex items-center gap-5 dark:text-white {$page
			.url.pathname === '/'
			? 'text-slate-700'
			: 'text-white'}"
	>
		<a
			class="transition flex items-center gap-3 hover:-translate-y-1"
			href="/"
		>
			<img class="w-11" src="/logo.svg" alt="logo" />
			<h1 class="text-3xl font-bold text-cyan-400">read.me</h1>
		</a>
		<a
			class="text-xl hover:text-cyan-400 transition mt-1 hover:-translate-y-1"
			href="/editor">editor</a
		>
		<div class="ml-auto flex">
			<GHUserProfile {avatar_url} />
			<ThemeToggle />
		</div>
	</div>
</nav>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");
	* {
		font-family: "Ubuntu Mono", monospace;
	}

	nav {
		position: relative;
	}

	@media (max-width: 768px) {
		/* .dropdown {
			position: absolute;
			left: 0;
			padding: 0.5rem 1rem;
			bottom: -3rem;
			width: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
		} */
	}
</style>
