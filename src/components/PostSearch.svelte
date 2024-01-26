<script lang="ts">
	import SearchIcon from '~icons/lucide/search';
	import ChevronLeftIcon from '~icons/lucide/chevron-left';

	import type { Post } from '$lib/types';
	import Fuse from 'fuse.js';

	export let posts: Post[];
	export let setDisplayedPosts: any;
	let query = '';
	let searched = false;

	const fuse = new Fuse(posts, {
		keys: ['title', 'date', 'description'],
		includeMatches: true
	});

	const handleSearch = (query: string) => {
		searched = true;
		const results = fuse.search(query, {
			limit: 20
		});
		setDisplayedPosts(results.map((res) => res.item));
	};

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			handleSearch(query);
		}
	};

	const handleClear = () => {
		searched = false;
		setDisplayedPosts(posts);
	};
</script>

<div class="mt-7">
	<div class="border rounded-xl flex justify-between items-center focus-within:border-accent">
		<input
			type="text"
			class="w-full bg-transparent p-3 outline-none"
			placeholder="Search for a post"
			bind:value={query}
			on:keydown={handleKeyDown}
		/>
		{#if searched}
			<button
				on:click={() => handleClear()}
				class="rounded-full bg-muted mr-2 p-1 px-3 outline-none focus:bg-accent transition-colors flex items-center"
			>
				<ChevronLeftIcon />
				<span class="text-sm">Clear</span>
			</button>
		{:else}
			<button
				on:click={() => handleSearch(query)}
				class="rounded-full bg-muted mr-2 p-2 outline-none focus:bg-accent transition-colors"
			>
				<SearchIcon />
			</button>
		{/if}
	</div>
</div>
