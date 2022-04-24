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
	import { onMount } from "svelte";
	import RepoElement from "..//components/RepoElement.svelte";
	export let user, repos_url, token;
	let repoData = [];

	onMount(async () => {
		if (user) {
			try {
				const res = await fetch(repos_url, {
					headers: {
						Authorization: `token ${token}`,
					},
				});
				repoData = await res.json();
			} catch (error) {
				alert("Something went wrong, please try again later");
			}
		}
	});
</script>

<svelte:head>
	<title>read.me | github</title>
</svelte:head>

{#if user}
	<div class="flex items-center">
		<h1 class="text-5xl text-white font-bold w-1/2">
			Select the repo of the README you'd like to edit:
		</h1>
	</div>
	<div class="grid grid-cols-2 gap-4 mt-10">
		{#each repoData as repo}
			<RepoElement {repo} {token} />
		{/each}
	</div>
{:else}
	<div
		class="bg-slate-600 dark:bg-slate-900 mx-auto mt-10 w-1/3 flex flex-col justify-center rounded-lg p-4 text-white gap-4"
	>
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
	</div>
{/if}
