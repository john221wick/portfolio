<script>
	import { goto } from '$app/navigation';

	function handleClick(path) {
		goto(path);
	}
</script>

<nav class="mb-20 flex w-full items-center justify-center gap-8">
	<button
		onclick={() => handleClick('/')}
		class="no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		home</button
	>
	<button
		onclick={() => handleClick('/blogs-ai')}
		class="no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		AI Blogs</button
	>
	<button
		onclick={() => handleClick('/blogs-devops')}
		class="no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		DevOps Blogs</button
	>
	<button
		onclick={() => handleClick('/blogs-others')}
		class="no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		Blogs</button
	>
	<button
		onclick={() => handleClick('/projects')}
		class="no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		Projects</button
	>
	<button
		onclick={() => handleClick('/certifications')}
		class="no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		Certifications</button
	>
</nav>
