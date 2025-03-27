<script>
	let markdownContent = '';
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	onMount(async () => {
		try {
			const res = await fetch('/test.md');
			const text = await res.text();
			markdownContent = marked.parse(text);
		} catch (err) {
			console.error('Error loading Markdown:', err);
			markdownContent = 'Failed to load content.';
		}
	});
</script>

<div>
	{@html markdownContent}
</div>
