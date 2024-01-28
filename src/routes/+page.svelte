<script lang="ts">
	import ProjectCard from '$components/ProjectCard.svelte';
	import { contacts } from '$res/contact';
	import { projects } from '$res/projects';
</script>

<svelte:head>
	<title>Adam Alberty</title>
</svelte:head>

<main class="mx-auto max-w-screen-md p-8 py-[10vh]">
	<header>
		<img class="w-20 h-20 mb-10" alt="The project logo" src="/logo.svg" />
		<h1 class="text-3xl font-medium">
			<span class="text-gradient">Adam Alberty</span>
		</h1>

		<p class="mt-5 text-lg text-muted-foreground">
			Tech enthusiast and CS student working mostly on Web projects. Trying to improve as a
			programmer. Currently I'm doing freelancing work.
		</p>
	</header>

	<!-- Projects section -->
	<section class="my-10">
		<div class="">
			<h2 class="text-xl font-medium">My Projects</h2>
			<p class="text-muted-foreground mt-2">Here are a couple of projects I have worked on.</p>
		</div>

		<ul class="grid gap-5 mt-7">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</ul>
	</section>

	<section>
		<div class="">
			<h2 class="text-xl font-medium">Contact</h2>
			<p class="text-muted-foreground mt-2">Feel free to reach out through these platforms.</p>
		</div>

		<div class="grid gap-3 md:grid-cols-3 mt-10">
			{#each contacts as contact, idx}
				<a
					class:md:col-span-3={idx === 0}
					class="flex items-center p-5 rounded-2xl border"
					href={contact.link}
				>
					<div class="min-w-8">
						<svelte:component this={contact.icon} />
					</div>
					<div>{contact.name}</div>
				</a>
			{/each}
		</div>
	</section>
</main>
