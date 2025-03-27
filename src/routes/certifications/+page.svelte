<script>
	import { marked } from 'marked';
	import { preventDefault } from 'svelte/legacy';

	let posts = [
		{
			date: 'April 9, 2024',
			title: 'Embracing Svelte 5: Reactive Programming Redefined',
			href: '/test.md',
			certHref: '/certifications/svelte5-reactive.pdf'
		},
		{
			date: 'May 15, 2024',
			title: 'Svelte 5 Runes: A Game Changer for Developers',
			href: '/post/svelte5/runes.md',
			certHref: '/certifications/svelte5-runes.pdf'
		},
		{
			date: 'June 22, 2024',
			title: 'Why Svelte 5’s Simplicity Wins Over Complexity',
			href: '/post/svelte5/simplicity.md',
			certHref: '/certifications/svelte5-simplicity.pdf'
		}
	];

	let markdownContent = '';

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
</script>

{#if markdownContent}
	<div class="mt-5 border-t p-5">
		{@html markdownContent}
	</div>
{:else}
	<div class="flex flex-col items-center p-5">
		<h2 class="mb-5 text-2xl font-bold">Practicing</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each posts as { date, title, href, certHref } (title)}
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
					<a
						href={certHref}
						target="_blank"
						rel="noopener noreferrer"
						class="ml-auto text-blue-400 hover:underline"
					>
						Certificate
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
