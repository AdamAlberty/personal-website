<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Something Went Wrong</title>
</svelte:head>

<main class="flex flex-col justify-center items-center py-[20vh] p-8">
	<h1 class="mb-5 text-8xl font-black">{$page.status}</h1>
	<div class="text-center"></div>
	<div class="bg-muted rounded-xl max-w-md">
		<div class="text-lg p-2 px-4">{$page?.error?.message}</div>
	</div>
</main>
