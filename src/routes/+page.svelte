<script lang="ts">
	import { contacts } from '$res/contact';
	import { projects } from '$res/projects';
	import IconGithub from '~icons/lucide/github';
	import IconLink from '~icons/lucide/link';
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
			<h2 class="text-muted-foreground mt-2">Here are a couple of projects I have worked on.</h2>
		</div>

		<ul class="grid gap-5 mt-10">
			{#each projects as project}
				<li class="p-5 rounded-2xl border">
					<h3 class="text-lg mb-2">{project.name}</h3>
					<p class="text-muted-foreground">{project.description}</p>

					<div class="mt-5 flex justify-between items-center">
						<div class="flex items-center gap-5">
							{#if project.repository}
								<a href={project.repository} class="flex items-center gap-1">
									<IconGithub />
									<span> Repository </span>
								</a>
							{/if}

							{#if project.website}
								<a href={project.website} class="flex items-center gap-1">
									<IconLink />
									<span>{project.website.slice(8)}</span>
								</a>
							{/if}
						</div>

						<ul class="flex flex-wrap gap-2">
							{#each project.tags as tag}
								<div class="text-sm text-muted-foreground">#{tag}</div>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<div class="">
			<h2 class="text-xl font-medium">Contact</h2>
		</div>

		<div class="grid gap-3 grid-cols-3 mt-10">
			{#each contacts as contact, idx}
				<a
					class:col-span-3={idx === 0}
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
