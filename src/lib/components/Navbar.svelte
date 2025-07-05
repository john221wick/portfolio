<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores'; // Import the page store

	function handleClick(path, e) {
		e.preventDefault();
		goto(path);
	}

	// An array to make the links easier to manage
	const navLinks = [
		{ path: '/', label: 'home' },
		{ path: '/projects', label: 'projects' },
		{ path: '/certifications', label: 'certifications' }
	];
</script>

<nav class="mb-1 flex w-full items-center justify-center gap-6 overflow-x-auto p-4 md:gap-10">
	{#each navLinks as link}
		<a
			href={link.path}
			onclick={(e) => handleClick(link.path, e)}
			class="cursor-pointer no-underline transition-all duration-300 ease-in-out"
			class:text-gray-900={$page.url.pathname === link.path}
			class:font-semibold={$page.url.pathname === link.path}
			class:text-gray-500={$page.url.pathname !== link.path}
			class:hover:text-gray-900={$page.url.pathname !== link.path}
			class:hover:scale-105={$page.url.pathname !== link.path}
		>
			{link.label}
		</a>
	{/each}
</nav>
