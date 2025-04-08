<script>
	import { marked } from 'marked';
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import 'prismjs/themes/prism-tomorrow.css';
	import 'prismjs/plugins/autoloader/prism-autoloader';

	// For DYnamically deciding the language
	onMount(() => {
		Prism.plugins.autoloader.languages_path =
			'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/';
	});
	let projectsOngoing = [
		{
			date: '2025',
			title: 'Agentic CI/CD',
			href: 'https://github.com/bbl-sh/ke-automated-ci-cd'
		},
		{
			date: '2025',
			title: 'Leetcode clone',
			href: 'data/devops/bash-scripting.md'
		},
		{
			date: '2025',
			title: 'Building JUDGE0 api via Docker',
			href: 'https://github.com/bbl-sh/dg-projects'
		},
		{
			date: '2024',
			title: 'Github actions and Terraform',
			href: 'https://github.com/bbl-sh/actions-01'
		},
		{
			date: '2024',
			title: 'Hugging Face Library',
			href: 'https://github.com/bbl-sh/literate-invention/tree/main/hugging-face/nlp'
		},
		{
			date: '2025',
			title: 'Building CodeCrafters Clone',
			href: 'https://github.com/bbl-sh/ccraft'
		},
		{
			date: 'will be updated',
			title: 'Making miniGPT',
			href: 'https://github.com/bbl-sh/making-minigpt'
		},
		{
			date: '2024',
			title: 'Training miniGPT over Pytorch Distributed',
			href: '/post/svelte5/simplicity.md'
		},
		{
			date: '2024',
			title: 'Basics of Golang',
			href: 'https://github.com/bbl-sh/golang'
		},
		{
			date: '2023',
			title: 'Implementing RDT 3.0, tcp etc protocol in python',
			href: 'https://github.com/bbl-sh/computer-networks'
		},
		{
			date: '2022',
			title: 'Basics of pytorch',
			href: 'https://github.com/bbl-sh/pytorch-basics'
		}
	];

	let markdownContent = $state();

	async function loadMarkdown(path) {
		try {
			const res = await fetch(path);
			if (!res.ok) {
				throw new Error('Failed to fetch');
			}
			const text = await res.text();
			markdownContent = marked.parse(text);
		} catch (err) {
			console.error('Error loading Markdown:', err);
			markdownContent = 'Failed to load content.';
		}
	}

	// To ensure syntax highlighting after DOM update
	$effect(() => {
		if (markdownContent) {
			setTimeout(() => {
				const codeBlocks = document.querySelectorAll('pre code');
				codeBlocks.forEach((block) => {
					Prism.highlightElement(block);
				});
			}, 0);
		}
	});
</script>

{#if markdownContent}
	<div class="max-w-20xl text-white-800 mx-auto rounded-lg p-8 text-left leading-relaxed shadow-md">
		{@html markdownContent}
	</div>
{:else}
	<div class="flex flex-col items-center p-5">
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each projectsOngoing as { date, title, href } (title)}
				<li class="mb-2.5 flex items-baseline">
					<span class="mr-4 min-w-[120px] text-sm text-gray-500">{date}</span>
					<a {href} class="font-bold text-inherit no-underline hover:underline">
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
