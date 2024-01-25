<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>Blog - Adam Alberty</title>
</svelte:head>

<main class="mx-auto max-w-screen-md p-8 py-[10vh]">
	<h1 class="text-2xl">Blog</h1>
	<!-- <p class="text-muted-foreground text-lg mt-1"></p> -->

	<ul class="grid gap-5 mt-10">
		{#each data.posts as post}
			<li>
				<a href={`/blog/${post.slug}`} class="block p-5 rounded-2xl border hover:bg-muted">
					<div class="flex justify-between text-foreground">
						<h2 class="text-lg">{post.title}</h2>
						<p class="date">{formatDate(post.date)}</p>
					</div>
					<p class="mt-1 text-muted-foreground">{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</main>
