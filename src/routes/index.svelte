<script context="module">
	export async function load({ session }) {
		return {
			props: {
				user: session.user,
			},
		};
	}
</script>

<script>
	import Fa from "svelte-fa/src/fa.svelte";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	export let user;
</script>

<svelte:head>
	<title>read.me | home</title>
</svelte:head>

{#if user}
	<h2>Welcome {user}</h2>
	<a href="/logout"> logout </a>
{/if}
<div class="container flex flex-col lg:flex-row px-4 md:px-0">
	<div class="hero max-w-1/2">
		<h1
			class="font-bold text-slate-700 dark:text-white text-5xl lg:text-9xl"
		>
			Write a <span class="text-cyan-400">readme</span> like a pro!
		</h1>
		<p class="text-xl text-slate-700 dark:text-white mt-6">
			Read.me is a web app designed to help you write a readme worthy of
			your next billion dollar app, with premade markdown components and a
			live preview for all your readme goodness!
		</p>
		<div class="flex flex-col sm:flex-row mt-6 gap-5">
			<a href="/editor">
				<button
					class="transition py-2 px-10 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-2xl rounded-lg"
					>Get Started</button
				>
			</a>
			<a href="https://github.com/f-llewellyn" target="_">
				<button
					class="transition flex items-center py-2 px-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-2xl rounded-lg"
					><Fa icon={faGithub} class="mr-2" /> GitHub</button
				>
			</a>
		</div>
	</div>
	<div class="img-container">
		<img
			class="border-4 border-slate-500 dark:border-white rounded-lg mt-10"
			src="/readme-editor.png"
			alt=""
		/>
	</div>

	<div class="sidebar absolute" />
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");
	* {
		font-family: "Ubuntu Mono", monospace;
	}

	p {
		max-width: 80%;
	}

	.img-container {
		z-index: 100;
		position: relative;
	}

	img {
		aspect-ratio: 1918 / 939;
		width: 939px;
	}

	@media (min-width: 1024px) {
		.hero {
			max-width: 50%;
		}

		.sidebar {
			width: 33vh;
			background-color: #0f172a;
			background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
			top: 0;
			/* bottom: -100rem; */
			right: 0;
			min-height: 100%;
			z-index: 0;
		}

		img {
			margin-top: 30vh;
		}
	}
</style>
