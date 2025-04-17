<script>
	import { marked } from 'marked';
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import 'prismjs/themes/prism-tomorrow.css';
	import 'prismjs/plugins/autoloader/prism-autoloader';

	// For dynamically deciding the language
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
			if (!res.ok) throw new Error('Failed to fetch');
			const text = await res.text();
			markdownContent = marked.parse(text);
		} catch (err) {
			console.error('Error loading Markdown:', err);
			markdownContent = '<p class="text-red-500">Failed to load content.</p>';
		}
	}

	// To ensure syntax highlighting after DOM update
	$effect(() => {
		if (markdownContent) {
			requestAnimationFrame(() => {
				const codeBlocks = document.querySelectorAll('pre code');
				codeBlocks.forEach((block) => Prism.highlightElement(block));
			});
		}
	});
</script>

{#if markdownContent}
	<div class="text-white-800 max-w-2xl rounded-lg p-4 text-left leading-relaxed shadow-md sm:p-8">
		<div class="prose prose-invert max-w-none">
			{@html markdownContent}
		</div>
	</div>
{:else}
	<div class="flex flex-col items-center p-3">
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each projectsOngoing as { date, title, href } (title)}
				<li class="mb-2 flex flex-wrap items-baseline">
					<span
						class="mr-2 min-w-[60px] flex-shrink-0 text-[10px] text-gray-500 sm:min-w-[80px] sm:text-xs md:min-w-[100px] md:text-sm"
					>
						{date}
					</span>
					<a
						{href}
						class="text-xs font-bold text-inherit no-underline hover:underline sm:text-sm md:text-base"
					>
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
