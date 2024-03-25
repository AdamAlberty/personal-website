<script lang="ts">
	import type { Project } from '$lib/types';
	export let project: Project;
	import IconGithub from '~icons/lucide/github';
	import IconLink from '~icons/lucide/link';
</script>

<li class="border-b last:border-b-0 py-8">
	<h3 class="text-lg md:text-xl mb-2">{project.name}</h3>
	<p class="text-muted-foreground md:text-lg leading-relaxed">
		{project.description}
	</p>

	<div class="mt-5 flex justify-between items-center">
		<div class="flex items-center gap-5">
			{#if project.repository}
				<a href={project.repository} class="flex items-center gap-3">
					<IconGithub />
					<span class="hidden md:inline">Repository</span>
				</a>
			{/if}

			{#if project.website}
				<a href={project.website} class="flex items-center gap-3">
					<IconLink />
					<span class="hidden md:inline">{project.website.slice(8)}</span>
				</a>
			{/if}
		</div>

		<ul class="flex flex-wrap gap-2">
			{#each project.tags as tag, idx}
				<li class:hidden={idx > 1} class="text-sm text-muted-foreground md:block">
					#{tag}
				</li>
			{/each}
		</ul>
	</div>
</li>
