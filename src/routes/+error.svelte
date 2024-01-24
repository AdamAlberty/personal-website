<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Something Went Wrong</title>
</svelte:head>

<main class="flex flex-col justify-center items-center py-[20vh] p-8">
	<h1 class="mb-5">Something went wrong</h1>
	<div class="text-center"></div>
	<div class="bg-muted rounded-xl">
		<pre class="font-mono p-2 px-4 w-1/2">
<span class="text-accent-foreground">{$page.status}</span> {$page.error.message}</pre>
	</div>
</main>
