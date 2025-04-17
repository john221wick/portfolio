<script>
	import { goto } from '$app/navigation';

	function handleClick(path) {
		goto(path);
	}
</script>

<nav class="mb-20 flex w-full items-center justify-center gap-4 overflow-x-auto md:gap-8">
	<a
		href="/"
		onclick={(e) => {
			e.preventDefault();
			handleClick('/');
		}}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		home
	</a>
	<a
		href="/blogs"
		onclick={(e) => {
			e.preventDefault();
			handleClick('/blogs');
		}}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		blogs
	</a>
	<a
		href="/projects"
		onclick={(e) => {
			e.preventDefault();
			handleClick('/projects');
		}}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		projects
	</a>
	<a
		href="/certifications"
		onclick={(e) => {
			e.preventDefault();
			handleClick('/certifications');
		}}
		class="cursor-pointer no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
	>
		certifications
	</a>
</nav>
