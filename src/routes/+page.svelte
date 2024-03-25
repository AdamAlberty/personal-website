<script lang="ts">
	import ProjectCard from '$components/ProjectCard.svelte';
	import { projects } from '$res/projects';
</script>

<main class="py-[10vh]">
	<header class="mx-auto max-w-screen-xl p-8 pb-32">
		<img class="w-20 h-20 mb-10" alt="The project logo" src="/logo.svg" />
		<h1 class="text-3xl font-medium">
			<span class="text-gradient md:text-4xl">Adam Alberty</span>
		</h1>

		<p class="mt-5 text-lg md:text-2xl text-muted-foreground">
			Tech enthusiast and CS student working mostly on Web projects. Trying to improve as a
			programmer. Currently I'm doing freelancing work.
		</p>
	</header>

	<!-- Projects section -->
	<div class="bg-muted">
		<section class="py-20 md:py-36 mx-auto max-w-screen-xl p-8">
			<div class="">
				<h2 class="text-xl md:text-3xl font-medium">My Projects</h2>
				<p class="text-muted-foreground mt-2 md:text-lg">
					Here are a couple of projects I have worked on.
				</p>
			</div>

			<ul class="mt-7">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</ul>
		</section>
	</div>
</main>
