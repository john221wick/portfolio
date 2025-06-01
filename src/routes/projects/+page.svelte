<script>
	import { marked } from 'marked';

	let projectsOngoing = [
		{
			techStack: 'AI WebDev',
			title: 'Agentic CI/CD',
			href: 'https://github.com/bbl-sh/ke-automated-ci-cd'
		},
		{
			techStack: '2025',
			title: 'Leetcode clone',
			href: 'data/devops/bash-scripting.md'
		},
		{
			techStack: '2025',
			title: 'Building JUDGE0 api via Docker',
			href: 'https://github.com/bbl-sh/dg-projects'
		},
		{
			techStack: '2024',
			title: 'Github actions and Terraform',
			href: 'https://github.com/bbl-sh/actions-01'
		},
		{
			techStack: '2024',
			title: 'Hugging Face Library',
			href: 'https://github.com/bbl-sh/literate-invention/tree/main/hugging-face/nlp'
		},
		{
			techStack: '2025',
			title: 'Building CodeCrafters Clone',
			href: 'https://github.com/bbl-sh/ccraft'
		},
		{
			techStack: 'will be uptechStackd',
			title: 'Making miniGPT',
			href: 'https://github.com/bbl-sh/making-minigpt'
		},
		{
			techStack: '2024',
			title: 'Training miniGPT over Pytorch Distributed',
			href: '/post/svelte5/simplicity.md'
		},
		{
			techStack: '2024',
			title: 'Basics of Golang',
			href: 'https://github.com/bbl-sh/golang'
		},
		{
			techStack: '2023',
			title: 'Implementing RDT 3.0, tcp etc protocol in python',
			href: 'https://github.com/bbl-sh/computer-networks'
		},
		{
			techStack: '2022',
			title: 'Basics of pytorch',
			href: 'https://github.com/bbl-sh/pytorch-basics'
		}
	];
</script>

<section>
	<h1 class="mb-8 text-2xl font-medium">Projects</h1>
	<div>
		{#each projectsOngoing as project, index (project.title)}
			<a
				href={project.href}
				class="mb-5 flex flex-col space-y-1 transition-opacity duration-200 hover:opacity-80"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div
					class="flex w-full flex-col items-start justify-between space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2"
				>
					<h2 class="text-black dark:text-white">{project.title}</h2>
					<p class="text-neutral-600 dark:text-neutral-400">
						{project.techStack}
					</p>
				</div>
			</a>
		{/each}
	</div>
</section>
