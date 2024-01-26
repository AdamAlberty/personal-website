<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import LoaderIcon from '~icons/lucide/loader2';
	import ChevronRightIcon from '~icons/lucide/chevron-down';
	import CloseIcon from '~icons/lucide/x';

	let loading = true;
	let toc: { level: number; name: string; id: string }[] = [];
	let isOpen = false;

	onMount(() => {
		const headings = document.querySelectorAll(
			'.post h1, .post h2, .post h3, .post h4, .post h5, .post h6'
		) as NodeListOf<HTMLHeadingElement>;

		for (const heading of headings) {
			let level = 1;
			switch (heading.tagName) {
				case 'H1':
					level = 1;
					break;
				case 'H2':
					level = 2;
					break;
				case 'H3':
					level = 3;
					break;
				case 'H4':
					level = 4;
					break;
				case 'H5':
					level = 5;
					break;
				case 'H6':
					level = 6;
					break;
			}
			toc.push({
				level,
				name: heading.innerText,
				id: heading.id
			});
		}
		// To react to the change
		toc = [...toc];
		loading = false;
	});
</script>

<aside class="fixed right-0 md:left-0 md:top-[15vh]">
	{#if isOpen}
		<div
			class="bg-background/80 backdrop-blur border p-3 px-10 rounded-b-2xl md:rounded-2xl w-screen md:w-auto md:max-w-xl ml-5"
		>
			<div class="flex justify-between items-center mb-5">
				<h2 class="font-medium md:text-xl">Table of Contents</h2>
				<button aria-label="Close table of contents" on:click={() => (isOpen = false)}>
					<CloseIcon class="text-sm" />
				</button>
			</div>

			<ul class="grid">
				{#if loading}
					<div class="flex justify-center items-center min-h-32">
						<LoaderIcon class="animate-spin" />
					</div>
				{:else}
					{#each toc as entry}
						<li>
							<a
								class="py-2 block text-sm md:text-base"
								style={`margin-left: ${(entry.level - 1) * 15}px`}
								href={`${$page.url.pathname}#${entry.id}`}>{entry.name}</a
							>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	{:else}
		<button
			aria-label="Open table of contents"
			on:click={() => (isOpen = true)}
			class="rounded-b-xl md:rounded-r-xl md:rounded-b-none md:text-xl bg-muted p-1 px-2 border mr-5"
		>
			<ChevronRightIcon class="md:-rotate-90" />
		</button>
	{/if}
</aside>
