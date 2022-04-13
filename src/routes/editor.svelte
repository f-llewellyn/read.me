<script>
	import ItemList from "../components/ItemList.svelte";
	import Editor from "../components/Editor.svelte";
	import MarkdownPreview from "../components/MarkdownPreview.svelte";

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
</script>

<svelte:head>
	<title>read.me | editor</title>
</svelte:head>

<div
	class="item-container px-4 mx-auto md:grid md:grid-cols-5 gap-5 mb-5 text-slate-700 dark:text-white"
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
