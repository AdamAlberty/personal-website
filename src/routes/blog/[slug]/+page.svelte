<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-auto max-w-screen-md p-8 py-[10vh]">
	<!-- Title -->
	<hgroup>
		<h1 class="text-3xl">{data.meta.title}</h1>
		<p class="mt-2 text-muted-foreground">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="flex flex-wrap gap-3">
		{#each data.meta.categories as category}
			<span class="px-3 py-1 rounded-full border mt-5">{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="post leading-loose">
		<svelte:component this={data.content} />
	</div>
</article>
