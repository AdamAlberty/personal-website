<script lang="ts">
	import ProjectCard from '$components/ProjectCard.svelte';
	import SectionTitle from '$components/SectionTitle.svelte';
	import { contacts } from '$res/contact';
	import { projects } from '$res/projects';
	import { resume } from '$res/resume';
	import IconDownload from '~icons/lucide/download';
</script>

<svelte:head>
	<title>Resumé - Adam Alberty</title>
</svelte:head>

<main class="mx-auto max-w-screen-xl p-8 py-[10vh]">
	<p class="text-sm text-accent-light uppercase">Resumé</p>
	<h1 class="text-2xl md:text-4xl">Adam Alberty</h1>
	<p class="mt-5 text-muted-foreground md:text-lg">
		Programmer mostly focusing on the Web with more than 3 years of experience and a desire to
		improve every day.
	</p>

	<div class="mt-10 flex items-center gap-5">
		<a
			href="/alberty-resume.pdf"
			target="_blank"
			class="flex items-center gap-2 bg-accent text-accent-foreground p-2 px-4 md:mr-5 rounded-lg hover:text-accent-foreground focus:text-accent-foreground"
		>
			<IconDownload />
			<span>View as PDF</span>
		</a>

		<div class="flex items-center gap-5 md:mt-0">
			{#each contacts as contact}
				<a aria-label={contact.name} href={contact.link}>
					<svelte:component this={contact.icon} />
				</a>
			{/each}
		</div>
	</div>

	<section class="mt-10 border rounded-2xl p-5">
		<SectionTitle>Technologies</SectionTitle>

		<ul class="mt-5 flex flex-wrap gap-3 text-sm md:text-base text-muted-foreground">
			{#each resume.tech as techItem}
				<li>{techItem}</li>
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<SectionTitle>Experience</SectionTitle>

		<ul class="mt-5 text-muted-foreground">
			{#each resume.experience as experience}
				<li class="rounded-2xl">
					<div class="flex justify-between items-center mb-2">
						<h3 class="text-foreground text-lg">{experience.name}</h3>
						<div class="text-sm shrink-0">
							<span class="border rounded-full p-1 px-3 inline-block">
								{experience.date}
							</span>
						</div>
					</div>
					<p class="text-sm md:text-base">{experience.description}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<SectionTitle>Education</SectionTitle>

		<ul class="grid gap-5 mt-5 text-muted-foreground">
			{#each resume.education as education}
				<li>
					<div class="md:flex justify-between items-center mb-2">
						<h3 class="text-foreground md:text-lg md:w-2/3">{education.name}</h3>
						<div class="text-sm shrink-0">
							<span class="border rounded-full p-1 px-3 hidden md:inline-block">
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
		<SectionTitle>Certifications</SectionTitle>

		<ul class="grid gap-2 mt-5 text-muted-foreground">
			{#each resume.certifications as certifications}
				<li>
					<a
						href={certifications.link}
						class="text-foreground flex justify-between items-center py-2 px-3 bg-muted rounded-lg"
						>{certifications.name}</a
					>
				</li>
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<SectionTitle>Projects</SectionTitle>

		<ul>
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</ul>
	</section>

	<section class="my-5 border rounded-2xl p-5">
		<SectionTitle>Languages</SectionTitle>
		<ul class="grid md:grid-cols-3 gap-2 mt-5 text-muted-foreground">
			{#each resume.languages as language}
				<li>
					<div class="flex justify-between items-center bg-muted rounded-lg px-3 py-2">
						<h3 class="text-foreground md:text-lg w-2/3">{language.name}</h3>
						<span class="rounded-full p-1 inline-block shrink-0">
							{language.level}
						</span>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>
