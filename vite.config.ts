import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [sveltekit(), Icons({ compiler: 'svelte' })],
	server: {
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd()) + '/src',
				searchForWorkspaceRoot(process.cwd()) + '/posts'
			]
		}
	}
});
