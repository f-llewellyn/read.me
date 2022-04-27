<script>
	import { page } from "$app/stores";
	import ThemeToggle from "./ThemeToggle.svelte";
	import GHUserProfile from "./GHUserProfile.svelte";
	import Fa from "svelte-fa/src/fa.svelte";
	import {
		faBars,
		faCross,
		faTimes,
	} from "@fortawesome/free-solid-svg-icons";

	export let avatar_url;
	let showDropdown = false;

	const toggleDropdown = () => {
		showDropdown = !showDropdown;
	};
</script>

<nav
	class="transition-all w-full py-4 px-4 md:px-0 z-10 {showDropdown &&
		'bg-slate-700 dark:bg-slate-900'} {$page.url.pathname === '/'
		? 'bg-transparent'
		: 'bg-slate-700 dark:bg-slate-900'}"
>
	<div
		class="md:px-4 mx-auto md:flex items-center gap-5 dark:text-white {$page
			.url.pathname === '/'
			? 'text-slate-700'
			: 'text-white'}"
	>
		<div class="flex items-center">
			<a
				class="transition flex items-center gap-3 hover:-translate-y-1"
				href="/"
			>
				<img class="w-11" src="/logo.svg" alt="logo" />
				<h1 class="text-3xl font-bold text-cyan-400">read.me</h1>
			</a>
			<div
				class="md:hidden ml-auto text-2xl cursor-pointer mt-1"
				on:click={toggleDropdown}
			>
				{#if showDropdown}
					<Fa icon={faTimes} />
				{:else}
					<Fa icon={faBars} />
				{/if}
			</div>
		</div>
		<div
			class="{showDropdown
				? 'flex'
				: 'hidden'} md:pt-0  pt-2 gap-4 items-center md:flex md:items-center md:flex-1"
		>
			<a
				class="text-xl hover:text-cyan-400 transition mt-1 hover:-translate-y-1"
				href="/editor">editor</a
			>
			<div class="ml-auto flex">
				<GHUserProfile {avatar_url} />
				<ThemeToggle />
			</div>
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
