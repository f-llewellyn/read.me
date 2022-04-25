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
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let user, avatar_url;

	const clearStorage = () => localStorage.removeItem("markdownText");
</script>

<div
	class="bg-slate-600 dark:bg-slate-900 mx-auto mt-10 w-1/3 flex flex-col justify-center items-center rounded-lg p-4 text-white gap-4"
>
	{#if user}
		<img src={avatar_url} class="aspect-square w-40 rounded-full" alt="" />
		<h1 class="text-center font-bold text-4xl">Hello {user}</h1>
		<a
			on:click={clearStorage}
			href="/logout"
			class="transition py-1 px-5 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-2xl rounded-lg text-center"
			>Log Out</a
		>
	{:else}
		<Fa icon={faGithub} class="text-9xl" />
		<h1 class="text-center text-2xl">
			You don't appear to be logged in 😲
		</h1>
		<div class="flex gap-4 justify-center">
			<a
				href="/login"
				class="transition py-1 px-5 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-2xl rounded-lg flex items-center gap-4"
				>Log In</a
			>
			<a
				href="/"
				class="transition py-1 px-5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold text-2xl rounded-lg flex items-center gap-4"
				>Go Home</a
			>
		</div>
	{/if}
</div>

<style>
</style>
