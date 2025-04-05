import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	],
	extensions: ['.svelte', '.svx']
};

export default config;
