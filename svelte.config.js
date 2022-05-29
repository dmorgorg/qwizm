/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},
	}
};

export default config;
