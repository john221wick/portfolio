<script>
	import { goto } from '$app/navigation';

	function handleClick(path) {
		goto(path);
	}
</script>

<nav class="mb-20 flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
	<div
		onclick={() => handleClick('/')}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		home
	</div>
	<div
		onclick={() => handleClick('/blogs-ai')}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		AI Blogs
	</div>
	<div
		onclick={() => handleClick('/blogs-devops')}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		DevOps Blogs
	</div>
	<div
		onclick={() => handleClick('/blogs-others')}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		Blogs
	</div>
	<div
		onclick={() => handleClick('/projects')}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		Projects
	</div>
	<div
		onclick={() => {
			handleClick('/certifications');
		}}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		Certifications
	</div>
</nav>
