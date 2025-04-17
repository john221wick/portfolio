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

	let postsUpcoming = [
		{
			date: 'June, 2025 (tentatively)',
			title: 'GPU Architecture and Programming (IIT Kharagpur)',
			href: '/test.md',
			certHref: ''
		},
		{
			date: 'June, 2025 (tentatively)',
			title: 'Large Language Model (IIT Kharagpur)',
			href: '/test.md',
			certHref: ''
		},
		{
			date: 'June, 2025 (tentatively)',
			title: 'Foundation of Cloud IoT Edge ML (IIT Patna)',
			href: '/test.md',
			certHref: ''
		}
	];

	let posts = [
		{
			date: 'April 9, 2024',
			title: 'Applied Accelerated Artificial Intelligence (IIT Palakkad) (NVIDIA)',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1sNASrD4_2LE5u9BvUOe6iFoc1xcM33J5/view?usp=sharing'
		},
		{
			date: 'May 15, 2024',
			title: 'Linear algebra through Geometry (IISc Banglore) (one of the best course)',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1sQ1ao9MML9DGDTPgLIkNoN_8ZpAeX3e8/view?usp=sharing'
		},
		{
			date: 'November, 2022',
			title: 'Deep Learning (IIT Ropar)',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1MQ6OE30keXZi5iFZ8qNmST9ob8cBcn23/view?usp=sharing'
		},
		{
			date: 'April, 2023',
			title: 'BlockChain and its application (IIT Kharagpur)',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/17TjADjJWDIpLPIvcVod_I3EiohaN1bs2/view?usp=sharing'
		}
	];

	let postsCCompletion = [
		{
			date: 'Aug 8, 2023',
			title: 'Serverless Computing with AWS Lambda',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1pcBgDiBktK4wSO91YkX_oEG95uHkTtHK/view?usp=sharing'
		},
		{
			date: 'May 29, 2023',
			title: 'Docker Training Course',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1hX9188cnPLV5FhF3ORVrXjYvPgaK4lfc/view?usp=sharing'
		},
		{
			date: 'August 22, 2023',
			title: 'Linux Course',
			href: '/post/svelte5/runes.md',
			certHref: 'https://drive.google.com/file/d/15gthFFfQG-7AtyK3CKKojysPLN19fSfI/view?usp=sharing'
		},
		{
			date: 'January, 2024',
			title: 'CI/CD with Github actions',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/15gthFFfQG-7AtyK3CKKojysPLN19fSfI/view?usp=sharing'
		},
		{
			date: 'August 28, 2023',
			title: 'Shell Programming (Bash)',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1iqvRKZ-0Se7YdxJ3Ix4CQqRl53qY5_P3/view?usp=sharing'
		},
		{
			date: 'August 28, 2023',
			title: 'Git and Github',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1N12gQIwJPEHUtVZhEdqbc1JI43r5u112/view?usp=sharing'
		},
		{
			date: 'June 27, 2023',
			title: 'Try Hack Me (Pre Security Learning Path)',
			href: '/test.md',
			certHref: 'https://drive.google.com/file/d/1BWmUjpT0vEYf6xWWVT8wdaNmOX5aEipU/view?usp=sharing'
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
			markdownContent = '<p class="text-red-500">Failed to load content.</p>';
		}
	}

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
	<div class="mx-auto mt-5 max-w-2xl border-t p-5">
		<div class="prose prose-invert max-w-none text-sm sm:text-base">
			{@html markdownContent}
		</div>
	</div>
{:else}
	<div class="flex flex-col items-center p-5">
		<h2 class="mb-5 text-xl font-bold sm:text-2xl md:text-3xl">Upcoming</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each postsUpcoming as { date, title, href, certHref } (title)}
				<li class="mb-2.5 flex items-baseline">
					<span class="mr-4 min-w-[120px] text-[10px] text-gray-500 sm:text-xs md:text-sm"
						>{date}</span
					>
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
					{#if certHref}
						<a
							href={certHref}
							target="_blank"
							rel="noopener noreferrer"
							class="ml-auto text-xs text-blue-400 hover:underline sm:text-sm md:text-base"
						>
							Certificate
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex flex-col items-center p-5">
		<h2 class="mb-5 text-xl font-bold sm:text-2xl md:text-3xl">Certifications</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each posts as { date, title, href, certHref } (title)}
				<li class="mb-2.5 flex items-baseline">
					<span class="mr-4 min-w-[120px] text-[10px] text-gray-500 sm:text-xs md:text-sm"
						>{date}</span
					>
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
					{#if certHref}
						<a
							href={certHref}
							target="_blank"
							rel="noopener noreferrer"
							class="ml-auto text-xs text-blue-400 hover:underline sm:text-sm md:text-base"
						>
							Certificate
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex flex-col items-center p-5">
		<h2 class="mb-5 text-xl font-bold sm:text-2xl md:text-3xl">Course Completion</h2>
		<ul class="w-full max-w-[600px] list-none p-0">
			{#each postsCCompletion as { date, title, href, certHref } (title)}
				<li class="mb-2.5 flex items-baseline">
					<span class="mr-4 min-w-[120px] text-[10px] text-gray-500 sm:text-xs md:text-sm"
						>{date}</span
					>
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
					{#if certHref}
						<a
							href={certHref}
							target="_blank"
							rel="noopener noreferrer"
							class="ml-auto text-xs text-blue-400 hover:underline sm:text-sm md:text-base"
						>
							Certificate
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{/if}
