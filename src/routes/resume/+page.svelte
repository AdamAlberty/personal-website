<script lang="ts">
	import { contacts } from '$res/contact';
	import { projects } from '$res/projects';
	import { resume } from '$res/resume';
	import IconDownload from '~icons/lucide/download';
	import IconGithub from '~icons/lucide/github';
	import IconLink from '~icons/lucide/link';
</script>

<svelte:head>
	<title>Resumé - Adam Alberty</title>
</svelte:head>

<main class="mx-auto max-w-screen-md p-8 py-[10vh]">
	<p class="text-sm text-accent-light uppercase">Resumé</p>
	<h1 class="text-2xl">Adam Alberty</h1>
	<p class="mt-5 text-muted-foreground">
		Programmer mostly focusing on the Web with more than 3 years of experience and a desire to
		improve every day.
	</p>

	<div class="mt-10 flex items-center gap-5">
		<a
			href="/alberty-resume.pdf"
			target="_blank"
			class="flex items-center gap-2 bg-accent text-accent-foreground p-2 px-4 mr-5 rounded-lg hover:text-accent-foreground focus:text-accent-foreground"
		>
			<IconDownload />
			<span>View as PDF</span>
		</a>

		{#each contacts as contact}
			<a href={contact.link}>
				<svelte:component this={contact.icon} />
			</a>
		{/each}
	</div>

	<section class="mt-10 border rounded-2xl p-5">
		<h2 class="text-xl">Technologies</h2>
		<ul class="mt-5 flex flex-wrap gap-3 text-muted-foreground">
			{#each resume.tech as techItem}
				<li>{techItem}</li>
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<h2 class="text-xl">Experience</h2>
		<ul class="mt-5 text-muted-foreground">
			{#each resume.experience as experience}
				<li>
					<div class="flex justify-between items-center mb-2">
						<h3 class="text-foreground text-lg">{experience.name}</h3>
						<div class="text-sm shrink-0">
							<span class="border rounded-full p-1 px-3 inline-block">
								{experience.date}
							</span>
						</div>
					</div>
					<p>{experience.description}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<h2 class="text-xl">Education</h2>
		<ul class="grid gap-5 mt-5 text-muted-foreground">
			{#each resume.education as education}
				<li>
					<div class="flex justify-between items-center mb-2">
						<h3 class="text-foreground text-lg w-2/3">{education.name}</h3>
						<div class="text-sm shrink-0">
							<span class="border rounded-full p-1 px-3 inline-block">
								{education.date}
							</span>
						</div>
					</div>
					<p>{education.description}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<h2 class="text-xl">Certifications</h2>
		<ul class="grid gap-2 mt-5 text-muted-foreground">
			{#each resume.certifications as certifications}
				<li>
					<div class="flex justify-between items-center">
						<a href={certifications.link} class="text-foreground text-lg w-2/3"
							>{certifications.name}</a
						>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<h2 class="text-xl mb-5">Projects</h2>
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

	<section class="my-5 border rounded-2xl p-5">
		<h2 class="text-xl">Languages</h2>
		<ul class="grid gap-2 mt-5 text-muted-foreground">
			{#each resume.languages as language}
				<li>
					<div class="flex justify-between items-center">
						<h3 class="text-foreground text-lg w-2/3">{language.name}</h3>
						<span class="border rounded-full p-1 px-3 inline-block">
							{language.level}
						</span>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>
