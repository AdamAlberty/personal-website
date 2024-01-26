<script lang="ts">
	import PostSearch from '$components/PostSearch.svelte';
	import type { Post } from '$lib/types.js';
	import { formatDate } from '$lib/utils';

	export let data;
	let posts = data.posts;

	const setDisplayedPosts = (newPosts: Post[]) => {
		posts = newPosts;
	};
</script>

<svelte:head>
	<title>Blog - Adam Alberty</title>
</svelte:head>

<main class="mx-auto max-w-screen-md p-8 py-[10vh]">
	<h1 class="text-2xl">Latest posts</h1>
	<p class="text-muted-foreground text-lg mt-1">
		This is a blog where I try to write about various topics
	</p>

	<PostSearch posts={data.posts} {setDisplayedPosts} />

	<ul class="grid gap-5 mt-10">
		{#each posts as post}
			<li>
				<a href={`/blog/${post.slug}`} class="block p-5 rounded-2xl border hover:bg-muted">
					<div class="flex justify-between text-foreground">
						<h2 class="text-lg">{post.title}</h2>
						<p class="">{formatDate(post.date)}</p>
					</div>
					<p class="mt-1 text-muted-foreground">{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</main>
