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
	import { onMount } from "svelte";
	import RepoElement from "..//components/RepoElement.svelte";
	export let user, repos_url, token;
	let repoData = [];
	let loading = true;

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
		} else {
			window.location.replace("/account");
		}
	});
</script>

<svelte:head>
	<title>read.me | github</title>
</svelte:head>

{#if user}
	<div class="flex items-center">
		<h1 class="text-5xl text-slate-700 dark:text-white font-bold w-1/2">
			Select the repo of the README you'd like to edit:
		</h1>
	</div>
	<div class="grid grid-cols-2 gap-4 mt-10">
		{#each repoData as repo}
			<RepoElement {repo} {token} />
		{/each}
	</div>
{/if}
