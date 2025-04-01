<script>
	import { marked } from 'marked';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css';
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
			if (!res.ok) {
				throw new Error('Failed to fetch');
			}
			const text = await res.text();
			markdownContent = marked.parse(text);
			Prism.highlightAll();
		} catch (err) {
			console.error('Error loading Markdown:', err);
			markdownContent = 'Failed to load content.';
		}
	}
</script>

{#if markdownContent}
	<div
		class="mx-auto max-w-2xl rounded-lg bg-white p-6 text-left leading-relaxed text-gray-800 shadow-md"
	>
		{@html markdownContent}
	</div>
{:else}
	<div class="flex flex-col items-center p-5">
		<h2 class="mb-5 text-2xl font-bold">Reading</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each posts as { date, title, href } (title)}
				<li class="mb-2.5 flex items-baseline">
					<span class="mr-4 min-w-[120px] text-sm text-gray-500">{date}</span>
					<a
						{href}
						onclick={(e) => {
							e.preventDefault();
							loadMarkdown(href);
						}}
						class="font-bold text-inherit no-underline hover:underline"
					>
						{title}
					</a>
				</li>
			{/each}
		</ul>

		<h2 class="mb-5 text-2xl font-bold">Practicing</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each posts as { date, title, href } (title)}
				<li class="mb-2.5 flex items-baseline">
					<span class="mr-4 min-w-[120px] text-sm text-gray-500">{date}</span>
					<a
						{href}
						onclick={(e) => {
							e.preventDefault();
							loadMarkdown(href);
						}}
						class="font-bold text-inherit no-underline hover:underline"
					>
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
