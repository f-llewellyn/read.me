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
	import dark from "../stores/dark";
	import Header from "../components/Header.svelte";
	import "../app.css";
	import Fa from "svelte-fa/src/fa.svelte";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";

	export let avatar_url;

	onMount(() => {
		if (localStorage.getItem("theme") === "dark") {
			$dark = true;
		} else {
			$dark = false;
			localStorage.setItem("theme", "light");
		}
	});
</script>

<div class="{$dark ? 'dark' : ''} min-h-screen">
	<main
		class="transition-all min-h-screen min-w-full bg-white dark:bg-slate-700"
	>
		<Header {avatar_url} />
		<div class="flex-grow mx-auto md:p-6 p-2">
			<slot {dark} />
		</div>
		<!-- <a href="https://github.com/f-llewellyn" target="_">''
				<button
					class="transition-all p-4 aspect-square bg-slate-200 rounded-full text-3xl text-slate-900 z-50 hover:-translate-y-1"
					><Fa icon={faGithub} /></button
				>
			</a> -->
	</main>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");

	* :not(.markdonw-body) {
		font-family: "Ubuntu Mono", monospace;
	}
</style>
