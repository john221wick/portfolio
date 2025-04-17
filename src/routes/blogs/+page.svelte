<script>
	import { marked } from 'marked';
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import 'prismjs/themes/prism-tomorrow.css';
	import 'prismjs/plugins/autoloader/prism-autoloader';

	onMount(() => {
		Prism.plugins.autoloader.languages_path =
			'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/';
	});

	let posts = [
		{
			date: 'July, 2023',
			title: 'Bash Scripting',
			href: 'data/devops/bash-scripting.md'
		},
		{
			date: 'May 15, 2024',
			title: 'Svelte 5 Runes: A Game Changer for Developers',
			href: '/post/svelte5/runes.md'
		},
		{
			date: 'June 22, 2024',
			title: 'Why Svelte 5’s Simplicity Wins Over Complexity',
			href: '/post/svelte5/simplicity.md'
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
	<div
		class="text-white-800 mx-auto max-w-2xl rounded-lg p-4 text-left leading-relaxed shadow-md sm:p-8"
	>
		<div class="prose prose-invert max-w-none">
			{@html markdownContent}
		</div>
	</div>
{:else}
	<div class="flex flex-col items-center p-3 sm:p-5">
		<h2 class="mb-3 text-lg font-bold sm:text-xl md:text-2xl">Reading</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each posts as { date, title, href } (title)}
				<li class="mb-2 flex flex-wrap items-baseline">
					<span
						class="mr-2 min-w-[60px] flex-shrink-0 text-[10px] text-gray-500 sm:min-w-[80px] sm:text-xs md:min-w-[100px] md:text-sm"
					>
						{date}
					</span>
					<a
						{href}
						onclick={(e) => {
							e.preventDefault();
							loadMarkdown(href);
						}}
						class="text-xs font-bold text-inherit no-underline hover:underline sm:text-sm md:text-base"
					>
						{title}
					</a>
				</li>
			{/each}
		</ul>

		<h2 class="mt-6 mb-3 text-lg font-bold sm:text-xl md:text-2xl">Practicing</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each posts as { date, title, href } (title)}
				<li class="mb-2 flex flex-wrap items-baseline">
					<span
						class="mr-2 min-w-[60px] flex-shrink-0 text-[10px] text-gray-500 sm:min-w-[80px] sm:text-xs md:min-w-[100px] md:text-sm"
					>
						{date}
					</span>
					<a
						{href}
						onclick={(e) => {
							e.preventDefault();
							loadMarkdown(href);
						}}
						class="text-xs font-bold text-inherit no-underline hover:underline sm:text-sm md:text-base"
					>
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
