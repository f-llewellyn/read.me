<script>
	import markdownText from "../stores/markdownText";
	import ItemList from "../components/ItemList.svelte";
	import Editor from "../components/Editor.svelte";
	import MarkdownPreview from "../components/MarkdownPreview.svelte";
	import Fa from "svelte-fa/src/fa.svelte";
	import {
		faDownload,
		faTrashAlt,
		faUpload,
	} from "@fortawesome/free-solid-svg-icons";

	let items = [
		{ id: 1, name: "Heading 1", content: "# Heading 1" },
		{ id: 2, name: "Heading 2", content: "## Heading 2" },
		{ id: 3, name: "Heading 3", content: "### Heading 3" },
		{ id: 4, name: "Heading 4", content: "#### Heading 4" },
		{ id: 5, name: "Heading 5", content: "##### Heading 5" },
		{ id: 6, name: "Heading 6", content: "###### Heading 6" },
		{ id: 7, name: "Paragraph", content: "This is a paragraph" },
		{
			id: 8,
			name: "Link",
			content: "[Link Text](https://youtu.be/dQw4w9WgXcQ)",
		},
		{
			id: 9,
			name: "Licence",
			content: "[MIT](https://choosealicense.com/licenses/mit/)",
		},
		{
			id: 15,
			name: "Inline Code",
			content: "`Your code goes here`",
		},
		{
			id: 16,
			name: "Block Code",
			content: "```Your code goes here```",
		},
		{
			id: 10,
			name: "Unordered List",
			content: "- List Item",
		},
		{
			id: 11,
			name: "Ordered List",
			content: "1. List Item",
		},
		{
			id: 12,
			name: "Image",
			content:
				"![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)",
		},
		{
			id: 14,
			name: "Rule",
			content: "---",
		},
	];

	const clearText = () => {
		localStorage.removeItem("markdownText");
		$markdownText = "# Hello World!";
	};

	const downloadFile = () => {
		localStorage.setItem("markdownText", $markdownText);
		const a = document.createElement("a");
		const file = new Blob([$markdownText]);
		a.href = URL.createObjectURL(file);
		a.download = "README.md";
		a.click();
	};
</script>

<svelte:head>
	<title>read.me | editor</title>
</svelte:head>

<div
	class="item-container mx-auto grid-cols-1 grid-rows-3  md:grid md:grid-cols-5 md:grid-rows-1 gap-5 text-slate-700 dark:text-white"
>
	<div>
		<ItemList {items} />
	</div>

	<div class="col-span-2">
		<Editor />
	</div>

	<div class="col-span-2">
		<MarkdownPreview />
	</div>
</div>

<div class="flex flex-col md:flex-row items-center gap-4 my-4">
	<button
		class="transition py-2 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-xl rounded-lg"
		on:click={clearText}><Fa icon={faTrashAlt} /></button
	>
	<a href="/github">
		<button
			class="transition py-2 px-4 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-xl rounded-lg flex gap-2 items-center"
			><Fa icon={faUpload} /> Open from Github</button
		>
	</a>
	<button
		class="transition py-2 px-4 bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-xl rounded-lg flex gap-2 items-center md:ml-auto"
		on:click={downloadFile}><Fa icon={faDownload} /> Download</button
	>
</div>

<style>
	.item-container {
		height: 100%;
		/* max-height: 700px; */
	}
</style>
