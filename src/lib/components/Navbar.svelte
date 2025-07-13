<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	function handleClick(path, e) {
		e.preventDefault();
		goto(path);
	}

	const navLinks = [
		{ path: '/', label: 'home' },
		{ path: '/projects', label: 'projects' },
		{ path: '/certifications', label: 'certifications' }
	];
</script>

<nav class="gap-z mb-1 flex w-full items-center justify-center overflow-x-auto p-4 md:gap-10">
	{#each navLinks as link}
		<a
			href={link.path}
			onclick={(e) => handleClick(link.path, e)}
			class="cursor-pointer no-underline transition-all duration-300 ease-in-out"
			class:text-white={$page.url.pathname === link.path}
			class:font-semibold={$page.url.pathname === link.path}
			class:text-gray-400={$page.url.pathname !== link.path}
			class:hover:text-white={$page.url.pathname !== link.path}
			class:hover:scale-105={$page.url.pathname !== link.path}
		>
			{link.label}
		</a>
	{/each}
</nav>
