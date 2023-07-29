import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					skeleton: ['@skeletonlabs/skeleton']
				}
			}
		}
	},
	plugins: [sveltekit()]
});
