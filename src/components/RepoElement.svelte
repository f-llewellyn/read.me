<script>
	import markdownText from "../stores/markdownText";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { decode } from "js-base64";
	import Fa from "svelte-fa/src/fa.svelte";
	let selected = false;
	export let repo, token;

	const getReadme = async () => {
		try {
			const res = await fetch(
				`https://api.github.com/repos/${repo.full_name}/contents/README.md`,
				{
					headers: {
						Authorization: `token ${token}`,
					},
				}
			);
			const data = await res.json();
			const readmeData = decode(data.content);
			localStorage.setItem("markdownText", readmeData);
			window.location.replace("/editor");
		} catch (error) {
			alert("This repository does not appear to have a README.");
		}
	};
</script>

<div
	class="{selected
		? 'bg-slate-800'
		: 'bg-slate-900'} text-white px-4 py-2 rounded-lg cursor-pointer"
	on:click={getReadme}
>
	<h1 class="text-2xl flex items-center gap-2">
		<Fa icon={faGithub} />
		{repo.full_name}
	</h1>
	<div class="flex items-center">
		<p class="mr-4">Stars: {repo.stargazers_count}</p>
		{#if repo.language}
			<div
				class="aspect-square w-4 h-4 rounded-full mr-2"
				class:bg-sky-700={repo.language === "Python"}
				class:bg-yellow-300={repo.language === "JavaScript"}
				class:bg-blue-700={repo.language === "CSS"}
				class:bg-emerald-500={repo.language === "Vue"}
				class:bg-pink-500={repo.language === "SCSS"}
				class:bg-orange-600={repo.language === "HTML"}
				class:bg-amber-500={repo.language === "Handlebars"}
				class:bg-orange-500={repo.language === "Svelte"}
				class:bg-stone-500={repo.language === "C"}
				class:bg-lime-800={repo.language === "C#"}
				class:bg-rose-500={repo.language === "C++"}
			/>
			<p>{repo.language}</p>
		{/if}
	</div>
</div>

<style>
</style>
