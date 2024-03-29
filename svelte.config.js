import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';
import rehypeSlug from 'rehype-slug';
import { cwd } from 'process';

const t = await shiki.loadTheme(cwd() + '/dark-default.json');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await shiki.getHighlighter({ theme: t });
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
					return `{@html \`${html}\` }`;
				}
			},
			remarkPlugins: [],
			rehypePlugins: [rehypeSlug]
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'$components/*': 'src/components/*',
			'$res/*': 'src/res/*'
		}
	}
};

export default config;
