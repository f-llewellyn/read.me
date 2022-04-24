<script>
	import { page } from "$app/stores";
	import markdownText from "../stores/markdownText";
	import ThemeToggle from "./ThemeToggle.svelte";
	import Fa from "svelte-fa/src/fa.svelte";
	import { faDownload, faBars } from "@fortawesome/free-solid-svg-icons";
	let toggleDropdown = false;
	export let dark;

	const downloadFile = () => {
		const a = document.createElement("a");
		const file = new Blob([$markdownText]);
		a.href = URL.createObjectURL(file);
		a.download = "README.md";
		a.click();
	};
</script>

<nav
	class="w-full py-4 px-4 md:px-0 {$page.url.pathname === '/'
		? 'bg-transparent'
		: 'bg-slate-700 dark:bg-slate-900'}"
>
	<div
		class="container mx-auto flex items-center gap-5 dark:text-white {$page
			.url.pathname === '/'
			? 'text-slate-700'
			: 'text-white'}"
	>
		<a class="flex items-center gap-3" href="/">
			<img class="w-11" src="/logo.svg" alt="logo" />
			<h1 class="text-3xl font-bold text-cyan-400">read.me</h1>
		</a>
		<a class="text-xl hover:text-cyan-400 transition mt-1" href="/editor"
			>editor</a
		>
		<a class="text-xl hover:text-cyan-400 transition mt-1" href="/github"
			>github_repos</a
		>

		{#if $page.url.pathname === "/editor"}
			<div
				class="menu ml-auto mt-1 text-2xl md:hidden cursor-pointer"
				on:click|preventDefault={() => {
					toggleDropdown = !toggleDropdown;
					console.log(toggleDropdown);
				}}
			>
				<Fa icon={faBars} />
			</div>
		{:else}
			<div class="ml-auto md:hidden">
				<ThemeToggle bind:dark />
			</div>
		{/if}

		<div
			class="dropdown {toggleDropdown
				? 'flex'
				: 'hidden'} bg-slate-700 dark:bg-slate-900 md:ml-auto md:flex items-center z-10 gap-6"
		>
			<ThemeToggle bind:dark />
			{#if $page.url.pathname === "/editor"}
				<button
					class="transition py-1 px-5 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-2xl rounded-lg flex items-center gap-4"
					on:click={downloadFile}
					><Fa icon={faDownload} />
					<p>Download</p></button
				>
			{/if}
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
		.dropdown {
			position: absolute;
			left: 0;
			padding: 0.5rem 1rem;
			bottom: -3rem;
			width: 100%;
			margin: 0 auto;
			/* display: flex; */
			justify-content: space-between;
		}
	}
</style>
